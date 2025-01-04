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
                <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Background2 color="#a35cf0" />

                <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                    {/* <img src="./start.png" /> */}
                </motion.div>

                <motion.div ref={container} style={{ y, opacity, scale }} className="bound xl">
                    <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                        Impressum</motion.h1>
                </motion.div>

                <section className="wrapper">
                    <h5>Angaben gemäss § 5 TMG</h5>
                    <p>
                        Tamusi - Musikkurse für Kinder im Elementarbereich<br />
                        Laura Maria Müller<br />
                        Lauteschlägerstrasse 11<br />
                        xxxxxx Darmstadt
                    </p>
                    <h5>Kontakt</h5>
                    <p>
                        Telefon: [Telefonnummer]<br />
                        E-Mail: tamusi.darmstadt@gmail.com<br />
                        Website: www.tamusi-darmstadt.de
                    </p>

                    <h5>Vertreten durch</h5>
                    <p>
                        Laura Maria Müller
                    </p>

                    <h5>Umsatzsteuer-Identifikationsnummer gemäss § 27 a Umsatzsteuergesetz:</h5>
                    <p>
                        [falls vorhanden, angeben]
                    </p>

                    <h5>Berufsbezeichnung und berufsrechtliche Regelungen</h5>
                    <p>
                        Berufsbezeichnung: [z. B. Musikpädagoge/Musikpädagogin]
                        Zuständige Kammer: [falls relevant]
                        Verleihungsstaat: [Land, in dem die Berufsbezeichnung verliehen wurde]
                    </p>

                    <h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h5>
                    <p>
                        [Vorname Nachname, Adresse]
                    </p>

                    <h5>Haftungsausschluss (Disclaimer)</h5>
                    <p>
                        [Hier könnte ein Haftungsausschluss stehen, z. B. Haftung für Inhalte und Links.]
                    </p>

                    <h5>Streitschlichtung</h5>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [Link zur Plattform].
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </section>

                <Footer />
            </div >
        </>
    );
}