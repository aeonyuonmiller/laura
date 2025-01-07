'use client'
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";

// Components
import { hlone, hltwo, imagereveal } from '../components/anim';
import Background2 from "../components/Background2";
import Transition from "../components/Transition/index"
import Footer from '../components/Footer';

export default function Home() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "40vh"])
    const opacity = useTransform(scrollYProgress, [0, .4], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "85%"])
    const s2 = useTransform(scrollYProgress, [0, 1], [1, 1.4])
    const o2 = useTransform(scrollYProgress, [0.5, 1], [1, 0])

    // const Slide = (props) => {
    // const direction = props.direction == 'left' ? -1 : 1;
    // const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    // }

    return (
        <>
            <Head>
                <title>Tamusi • Tanzen, Musizieren & Singen</title>
                <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
                <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Background2 color="#87EA80" />

                <Transition>
                    <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                        {/* <img src="./start.png" /> */}
                    </motion.div>

                    <motion.div ref={container} style={{ opacity, scale }} className="bound xl">
                        <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                            Zusammen-<br />arbeit</motion.h1>
                        <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            Zusammen erreicht man soviel mehr.
                        </motion.h2>
                    </motion.div>
                    <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                        <motion.div style={{ y: y2, scale: s2, opacity: o2 }} variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            <img src="./mutter-mit-kind.png" alt="Begleitperson weiblich mit Kind im Kurs" />
                        </motion.div>
                    </motion.div>

                    <section className="wrapper">
                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Zucker e.V. in Darmstadt</h4>
                                <p>
                                    Nähe des Riegerplatzes finden die Kurse in der Räumlichkeit des Zucker e.V. statt.
                                </p>
                                <a target="_blank" href="https://www.musikschule-taunus.de/" alt="Link zur Webseite vom Zucker e.V.">Zur Webseite</a>
                                {/* <p>Ein in Darmstadt ansässiger Verein. Förder seit über zehn Jahren Kunst und Kultur im regionalen Raum. Hier finden die Kurse statt.</p> */}
                            </span>
                            {/* <Image
                                className="thumb"
                                aria-hidden
                                src="/zucker-logo.svg"
                                alt="File icon"
                                width={200}
                                height={80}
                            /> */}
                            <img className="thumb" src="/zucker-logo.svg" alt="Zucker Logo" />
                        </motion.div>

                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Musikschule Taunus</h4>
                                <p>Hier arbeite ich im Bereich der elementaren Musikpädagogik.</p>
                                <a target="_blank" href="/#" alt="Link zur Webseite der Musikschule Taunus">Zur Webseite</a>
                            </span>
                            {/* <Image
                                className="thumb"
                                aria-hidden
                                src="/musikschule-taunus-logo.png"
                                alt="Musikschule Taunus Logo"
                                height={238}
                                width={800}
                            /> */}
                            <img className="thumb" src="/musikschule-taunus-logo.png" alt=" Musikschule Taunus Logo" />
                        </motion.div>

                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Illustrationen</h4>
                                <p>Die schönen Illustrationen sind von Rosa Wolf.</p>
                                <a target="_blank" href="https://www.instagram.com/die_echte_rosa_wolf?igsh=c3UzeWx3eDNzZGxs">Zu Rosa Wolfs Instagram</a>
                            </span>
                            <img className="thumb" src="/blumenstrauss.jpeg" alt="Rosa Wolf Blumenstrauss" />
                            {/* <Image
                            className="thumb"
                            aria-hidden
                            src="/blumenstrauss.jpeg"
                            alt="File icon"
                            width={200}
                            height={600}
                        /> */}
                        </motion.div>

                        {/* </Bound> */}
                    </section>

                    <Footer />
                </Transition >
            </div>
        </>
    );
}