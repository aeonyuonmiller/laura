"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

export default function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div style={container}>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0.9, scale: 0, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0.9, scale: 0, y: 50 }}
                        style={box}
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                style={button}
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Schliessen" : "Menü"}
            </motion.button>
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    // display: "flex",
    // flexDirection: "column",
    width: "50vw",
    height: 160,
    position: "fixed",
    background: "#000"
}

const box: React.CSSProperties = {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: "10px",
}

const button: React.CSSProperties = {
    backgroundColor: "#0c0c0ca3",
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#0f1115",
    position: "absolute",
    top: "40px",
    margin: "40px",
    right: "40px",
    width: "300px",
    zIndex: 9999,
}