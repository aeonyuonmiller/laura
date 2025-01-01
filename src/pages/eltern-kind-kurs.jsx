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
                <Background2 color="#287ff0" />

                <motion.div ref={container} style={{ y, opacity, scale }} className="bound xl">
                    <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                        Eltern-Kind-Kurse</motion.h1>
                    <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
                        Gemeinsam Musik erleben.
                    </motion.h2>
                </motion.div>

                <div className="wrapper">
                    <p>Die Eltern-Kind-Kurse sind für mich eine besondere Herzensangelegenheit. Es geht darum, Kindern einen ersten Kontakt zur Welt der Musik zu ermöglichen und euch als Begleitperson eine angeleitete, musikalische Qualitätszeit mit eurem Kind zu schenken.</p>
                    <p>Im Mittelpunkt stehen gemeinsames Singen, Tanzen, Bewegen und erste Erfahrungen mit Rhythmusinstrumenten. Die Stunden wechseln zwischen aktiven und entspannten Phasen, wobei ich flexibel auf die Bedürfnisse der Gruppe eingehe. Ob mehr Bewegung oder längere Konzentration – ich passe den Ablauf individuell an.</p>
                </div>

                <section className="points">
                    <Bound>
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
                            <Image
                                aria-hidden
                                src="/holding-hands.svg"
                                alt="File icon"
                                width={300}
                                height={300}
                            />
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
                            <Image
                                aria-hidden
                                src="/hands-with-heart.svg"
                                alt="Hand in Hand"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </Bound>
                </section>

                <div className="wrapper">
                    <h4>Rahmenbedingungen</h4>
                    <ul>
                        <li><strong>Elternabend:</strong> Zu Kursbeginn gibt es einen Elternabend, um Fragen zu klären und Erwartungen abzugleichen. Spät-Einsteigende erhalten die wichtigsten Infos per Elternbrief.</li>
                        <li><strong>Gruppeneinteilung:</strong> Die Gruppen werden altersgerecht eingeteilt, z. B. 1–2-Jährige und 3–4-Jährige.</li>
                        <li><strong>Ferienregelung:</strong> In den hessischen Schulferien findet in der Regel kein Unterricht statt. Nachholtermine bei Ausfall können jedoch in diese Zeit fallen.</li>
                        <li><strong>Probezeit:</strong> Die ersten 4 Wochen gelten als Probezeit und kosten 35 €. Eine Kündigung ist in dieser Zeit per E-Mail möglich. Ohne Kündigung läuft der Vertrag bis zum Ende des Musikschuljahres (31. August).</li>
                    </ul>
                    <p>
                        Alle weiteren Informationen findet ihr im Vertrag, den ich euch nach Anfrage per E-Mail zusende.
                    </p>
                    <p>
                        Ich freue mich auf euch und eure kleinen Musiker:innen!
                    </p>
                </div>

                <Footer />
            </div>
        </>
    );
}