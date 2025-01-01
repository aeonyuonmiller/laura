'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <div className="mobile-nav">
            <div className="controls">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.5 }}
                    onClick={() => setShow(!show)}
                >
                    {show ? "Schliessen" : "Menü"}
                </motion.button>
            </div>

            <AnimatePresence>
                {show ? (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: "0" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.7, bounce: .8 }}
                    />
                ) : null}
            </AnimatePresence>
        </div>
    );
}


/**
 * ==============   Styles   ================
 

const container: React.CSSProperties = {
    // display: "flex",
    // flexDirection: "column",
    width: "50vw",
    height: 160,
    position: "fixed",
    background: "#000"
}

const box: React.CSSProperties = {
    width: 500,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: "30px",
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

*/