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
                <Background2 color="#4994f8" />

                <Transition>
                    <motion.div ref={container} style={{ opacity, scale }} className="bound xl" id="elternkind">
                        <motion.div style={{ rotate: r }} variants={zoom} initial="hidden" animate="enter" exit="exit" className="stoerer zwei">
                            Donnerstags<br />von 15.00 - 18.00 Uhr
                        </motion.div>

                        <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                            Eltern-Kind-Kurse</motion.h1>
                        <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            Gemeinsam Musik erleben.
                        </motion.h2>
                    </motion.div>
                    <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                        <motion.div style={{ y: y2, scale: s2, opacity: o2 }} variants={hltwo} initial="hidden" animate="enter" exit="exit">
                            <img src="./vater-mit-kind.png" alt="Begleitpersonen mit Kindern im Eltern-Kind-Kurs" />
                        </motion.div>
                    </motion.div>

                    <div className="wrapper">
                        <p>Die Eltern-Kind-Kurse sind für mich eine besondere Herzensangelegenheit. Es geht darum Kindern einen ersten Kontakt zur Welt der Musik zu ermöglichen und euch als Begleitperson eine angeleitete, musikalische Zeit mit eurem Kind zu schenken.</p>
                        <p>Im Mittelpunkt stehen gemeinsames Singen, Tanzen, Bewegen und erste Erfahrungen mit Rhythmusinstrumenten. Die Stunden <strong>(eine Einheit dauert 45 Minuten)</strong> wechseln zwischen aktiven und entspannten Phasen, wobei ich flexibel auf die Bedürfnisse der Gruppe eingehe. Ob mehr Bewegung oder längere Konzentration – ich passe den Ablauf individuell an.</p>
                        <p>Ihr als Begleitpersonen seid Vorbilder für eure Kinder. Wenn ihr mitmacht und ein gutes Beispiel gebt, wird euer Kind ganz von selbst beginnen, aktiv teilzunehmen – ganz ohne dass ihr seine Hände führen müsst. Gebt den Kindern die Zeit, die sie brauchen: Vom Staunen und Zuschauen finden sie von alleine den Weg ins eigene Tun.</p>
                        <p>Ihr könnt den Takt der Lieder, die wir singen, mit sanftem Tippen, Patschen oder ähnlichen Bewegungen auf den Körper eures Kindes übertragen – so entwickelt es ein erstes Gefühl für Rhythmus. Wenn euer Kind bei euch auf dem Schoß sitzt, spürt es dabei nicht nur eure Bewegungen, sondern auch die Schwingungen eures Körpers beim Singen und Musizieren. Das fördert nicht nur seine musikalische Wahrnehmung, sondern stärkt auch eure Beziehung zueinander und schenkt insbesondere den Kleinsten erste wertvolle musikalische Eindrücke.</p>
                    </div>

                    <section className="wrapper">
                        {/* <h3 className="center">Drei gute Gründe</h3> */}
                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Wer kann begleiten?</h4>
                                <p>Alle nahen Bezugspersonen des Kindes sind willkommen – ob Eltern, Großeltern oder andere Vertraute. Wichtig ist nur, dass sich das Kind in der Begleitung sicher fühlt und sein natürliches Explorationsverhalten entfalten kann.</p>
                            </span>
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
                                <h4>Barrierefreiheit und Flexibilität</h4>
                                <p>Wir sitzen in der Regel auf dem Boden, aber für Begleitpersonen, die das nicht können, stehen Stühle bereit. Habt ihr besondere Wünsche? Sprecht mich gerne an – wir finden eine Lösung, damit alle teilnehmen können!</p>
                            </span>
                            {/* <Image
                                aria-hidden
                                src="/hands-with-heart.svg"
                                alt="Hand in Hand"
                                width={300}
                                height={300}
                            /> */}
                        </motion.div>
                    </section>

                    <div className="wrapper">
                        <h4>Rahmenbedingungen</h4>
                        <ul>
                            {/* <li><strong>Elternabend:</strong> Zu Kursbeginn gibt es einen Elternabend, um Fragen zu klären und Erwartungen abzugleichen. Spät-Einsteigende erhalten die wichtigsten Infos per Elternbrief.</li> */}
                            <li><strong>Gruppeneinteilung:</strong> Die Gruppen werden altersgerecht eingeteilt, z. B. 1–2-Jährige und 3–4-Jährige.</li>
                            <li><strong>Ferienregelung:</strong> In den hessischen Schulferien findet in der Regel kein Unterricht statt. Nachholtermine bei Ausfall können jedoch in diese Zeit fallen.</li>
                            {/* <li><strong>Probezeit:</strong> Die ersten 4 Wochen gelten als Probezeit und kosten 25 €. Eine Kündigung ist in dieser Zeit per E-Mail möglich. Ohne Kündigung läuft der Vertrag bis zum Ende des Musikschuljahres (31. August).</li> */}
                            {/* <li><strong>Allgemein:</strong>Der monatliche Beitrag beläuft sich auf 35€ monatlich (abgesehen vom ersten Monat, der als Probezeit gilt und mit 25 Euro abgedeckt wird.</li> */}
                            <li><strong>Allgemein:</strong> Der monatliche Beitrag beläuft sich auf 40€ monatlich, Reguläre Vertragslaufzeit 1 Jahr. Fristgerechte Kündigung zum Halbjahr möglich.</li>
                            <li><strong>Bildung und Teilhabe (BuT):</strong> Finanzielle Unterstützung zur Teilhabe am sozialen und kulturellen Leben <a href="#">Dokument</a></li>
                            <li><strong>Probezeit:</strong> Vertrag kann halbjährlich gekündigt werden jeweils zum 31.1. und 31.8. </li>
                        </ul>
                        <p>
                            Alle weiteren Informationen findet ihr im <a href="/vertrag">&rarr; Vertrag</a>.
                        </p>
                        <p className="center">
                            <strong>Ich freue mich auf euch und eure kleinen Musiker:innen!</strong>
                        </p>
                    </div>

                    <Footer />
                </Transition >
            </div>
        </>
    );
}