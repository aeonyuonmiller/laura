'use client'

import React, { useRef, ReactNode } from "react"
import { motion, useScroll, useVelocity, useTransform, useSpring } from "motion/react"

interface ScrollMarqueeProps {
    children: ReactNode
}

export default function ScrollMarquee({ children }: ScrollMarqueeProps) {
    const targetRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    })

    const scrollVelocity = useVelocity(scrollYProgress)

    const skewXRaw = useTransform(
        scrollVelocity,
        [-0.5, 0.5],
        ["45deg", "-45deg"]
    )
    const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 })
    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000])
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 })

    return (
        <section
            ref={targetRef}
            className="velocity-section"
        >
            <div className="velocity-container">
                <motion.div
                    style={{ skewX, x }}
                    className="velocity-text"
                >
                    {children}
                </motion.div>
            </div>
        </section>
    )
}

