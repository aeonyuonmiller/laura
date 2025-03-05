'use client'
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";

// Components
import { hlone, hltwo, imagereveal, zoom } from '../components/anim';
import Background2 from "../components/Background2";
import Footer from '../components/Footer';
import Transition from '../components/Transition';

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
    const r = useTransform(scrollYProgress, [0, 1], [0, 80])

    // const Slide = (props) => {
    // const direction = props.direction == 'left' ? -1 : 1;
    // const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
    // }

    return (
        <>
            <Head>
                <title>Tamusi • Tanzen, Musizieren & Singen</title>
                <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
                <meta name="keywords" content="Musikalische Früherziehung, Elementare Musikpädagogik, EMP, Laura Maria Mueller, Tamusi, Darmstadt, Martinsviertel, Zucker, Eltern-Kind-Kurse, musikalische Angebote, Kita, Kindertagesstätte, Wohnheim" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Background2 color="#eef888" />

                <Transition>
                    <motion.div ref={container} style={{ opacity, scale }} className="bound xl" id="elternkind">
                        <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                            Anmeldung & Vertrag</motion.h1>
                        <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            Du hast Lust an einem Eltern-Kind-Kurs teilzunehmen?
                        </motion.h2>
                    </motion.div>
                    <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                        <motion.div style={{ y: y2, scale: s2, opacity: o2 }} variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            <img src="./vater-mit-kind.png" alt="Begleitpersonen mit Kindern im Eltern-Kind-Kurs" />
                        </motion.div>
                    </motion.div>

                    <div className="wrapper">
                        <h4 className='center'>So gehts:</h4>
                        <p>
                            <a href="Tamusi-Unterrichtsvertrag.pdf" download>Vertrag herunterladen</a>, ausdrucken und auf dem Postweg an unten stehende Adresse senden oder persönlich einwerfen.
                        </p>
                        <h2 style={{ marginBottom: "40px" }}>
                            Laura Maria Müller<br />
                            Tamusi<br />
                            Lauteschlägerstraße 11<br />
                            64289 Darmstadt
                        </h2>
                        <p>
                            Du hast keinen Drucker? Kein Problem, Einen Vertrag zum ausfüllen, findest du bereits ausgedruckt, für dich zum mitnehmen am Briefkasten an oben benannter Adresse.
                        </p>
                        <p>
                            Du möchtest erst einmal ausprobieren und dich nicht direkt verpflichten? Der erste Monat gilt als Probezeit. In dieser Zeit hast du die Möglichkeit auszuprobieren, wie es dir und deinem Kind im Kurs gefällt. Während dieser Zeit kannst du den Vertrag jederzeit (bis zum letzten Tag des Monats) per Mail kündigen.
                        </p>
                    </div >

                    <Footer />
                </Transition >
            </div >
        </>
    );
}