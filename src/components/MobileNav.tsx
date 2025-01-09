'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

export default function App() {
    const [show, setShow] = useState(false);
    const toggleNav = () => {
        setShow(!show);
    };

    return (
        // <div className="mobile-nav">
        <>
            <div className="controls">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    // animate={{ show? "enter": "hide" }}
                    exit={{ scale: 0 }}
                    onClick={toggleNav}
                >
                    <AnimatePresence mode="sync">
                        {show ? (
                            <motion.svg
                                initial={{ scale: 0, rotate: 32 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: -30 }} width="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M99.6391 67.1122L83.0504 86.9536L47.9213 122.083L42.2291 120.944L39.4643 115.577L28.5678 106.307L28.2425 101.753L74.2681 61.9079L95.2479 40.928L102.079 36.6995L121.269 42.5544L121.92 45.8071L106.795 60.9321L100.29 64.8353L99.6391 67.1122Z" fill="#333" />
                                <path d="M99.6391 87.8878L83.0504 68.0464L47.9213 32.9173L42.2291 34.0557L39.4643 39.4227L28.5678 48.6929L28.2425 53.2466L74.2681 93.0921L95.2479 114.072L102.079 118.3L121.269 112.446L121.92 109.193L106.795 94.0679L100.29 90.1647L99.6391 87.8878Z" fill="#333" />
                            </motion.svg>
                        ) : (
                            <motion.svg
                                initial={{ scale: 0, rotate: 32 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: -30 }} width="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M97.9767 65.1245L72.2167 67.4246L22.5367 67.4246L19.3167 62.5945L21.1567 56.8445L20.0067 42.5845L22.9967 39.1345L83.7167 43.5045L113.387 43.5045L121.207 45.3445L130.637 63.0546L128.797 65.8145L107.407 65.8145L100.047 63.9745L97.9767 65.1245Z" fill="#000000a5" />
                                <path d="M51.9764 109.415L77.7364 111.715L127.416 111.715L130.636 106.885L128.796 101.135L129.946 86.8746L126.956 83.4246L66.2364 87.7946L36.5664 87.7946L28.7464 89.6346L19.3164 107.345L21.1564 110.105L42.5464 110.105L49.9064 108.265L51.9764 109.415Z" fill="#000000a5" />
                            </motion.svg>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            <AnimatePresence>
                {show ? (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: "0", transition: { ease: [0.785, 0.135, 0.15, 0.86], duration: .9 } }}
                        exit={{ x: "100%", transition: { ease: [0.785, 0.135, 0.15, 0.86], duration: .7 } }}
                    // transition={{ duration: 0.7, bounce: .9 }}
                    >
                        <Link href="/" scroll={false} onClick={toggleNav} tabIndex={0}>
                            Startseite
                        </Link>

                        <Link href="/eltern-kind-kurs" scroll={false} onClick={toggleNav} tabIndex={0}>
                            Eltern-Kind-Kurse
                        </Link>

                        <Link href="/ueber-mich" scroll={false} onClick={toggleNav} tabIndex={0}>
                            Über Mich
                        </Link>

                        <Link href="/zusammenarbeit" scroll={false} onClick={toggleNav} tabIndex={0}>
                            Zusammenarbeit
                        </Link>

                        <a href="mailto:tamusi.darmstadt@gmail.com" tabIndex={0}>
                            E-Mail
                        </a>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
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