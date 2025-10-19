// 'use client'
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";

// Components
import Magnetic from "../components/Magnetic";
import { Bound } from "../components/Bound";
import { hlone, hltwo, imagereveal } from '../components/anim';
import Link from "next/link";
import Background2 from "../components/Background2";
import Footer from '../components/Footer';
import Transition from '../components/Transition';
// import Background3 from '../components/Background3';

export default function Home() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"])
    const opacity = useTransform(scrollYProgress, [0, .2], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])


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
                <Background2 color="#af70f3" />

                <Transition>
                    <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                        {/* <img src="./start.png" /> */}
                    </motion.div>

                    <motion.div ref={container} style={{ y, opacity, scale }} className="bound xl" id="impressum">
                        <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                            Impressum</motion.h1>
                    </motion.div>

                    <section className="wrapper">
                        <p>Laura Maria M&uuml;ller<br />
                            Musikp&auml;dagogische Angebote Tamusi<br />
                            Kittlerstrasse 31<br />
                            64289 Darmstadt</p>

                        <h2>Kontakt</h2>
                        <p>Telefon: +49 (0) 163 90 27 74 8<br />
                            E-Mail: tamusi.darmstadt@gmail.com</p>

                        <h2>EU-Streitschlichtung</h2>
                        <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

                        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                        <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
                    </section>

                    <Footer />
                </Transition>
            </div >
        </>
    );
}