import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/Home.module.css";
// import { motion } from "framer-motion"
import { motion } from "motion/react";

// Components
import Magnetic from "../components/Magnetic";
// import Link from "next/link";
import { Bound } from "../components/Bound";
import { hlone, hltwo } from "../components/anim";
import Background2 from "../components/Background2";

const dokdo = localFont({
    src: "./fonts/DokdoRegular.woff",
    variable: "--font-dokdo",
    // weight: "400",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <>
            <Head>
                <title>Tamusi • Eltern-Kind-Kurs</title>
                <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
                <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                // className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
                // className={`${styles.page} ${dokdo.variable} ${geistMono.variable}`}
                className={`${dokdo.variable} ${geistMono.variable}`}

            >
                <Background2 color="#287ff0" />

                {/* <main className={styles.main}> */}
                <div className="bound xl">
                    <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                        Eltern-Kind Kurs
                    </motion.h1>
                    <motion.h2 variants={hltwo} initial="hidden" animate="enter" exit="exit">
                        Kinder zwischen 0 und 3 Jahren entdecken hier mit ihren Eltern ihre musische Seite.
                    </motion.h2>
                </div>

                <section>
                    <Bound>
                        <h3>Warum es gut für ihr Kind ist?</h3>
                        <h4>Grund 1</h4>
                        <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                    </Bound>
                </section>

                <footer>
                    <Magnetic>
                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/file.svg"
                                alt="File icon"
                                width={16}
                                height={16}

                            />
                            Learn
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/window.svg"
                                alt="Window icon"
                                width={16}
                                height={16}
                            />
                            Examples
                        </a>
                    </Magnetic>
                    <Magnetic>
                        <a
                            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                aria-hidden
                                src="/globe.svg"
                                alt="Globe icon"
                                width={16}
                                height={16}
                            />
                            Website
                        </a>
                    </Magnetic>
                </footer>
            </div>
        </>
    );
}
