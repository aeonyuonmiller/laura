'use client';
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function index({ stickyElement }) {

    const cursorSize = 40;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = { damping: 18, stiffness: 300, mass: .98 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])

    return (
        <>
            <motion.div
                className="cursor"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { delay: 1.6, duration: .4 } }}
                style={{
                    left: smoothMouse.x,
                    top: smoothMouse.y,
                }}
            >
            </motion.div>
        </>
    )
}
