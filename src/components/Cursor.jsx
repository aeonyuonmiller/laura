'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react';


const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateCursorPosition)

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
        }
    }, [])

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { type: "spring", bounce: .4, stiffness: 10 } }}
            className="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    )
}

export default CustomCursor
