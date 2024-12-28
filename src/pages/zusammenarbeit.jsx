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
                <title>Tamusi • Musik Kinder-Kurse</title>
                <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
                <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Background2 color="#87EA80" />

                <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
                    {/* <img src="./start.png" /> */}
                </motion.div>

                <motion.div ref={container} style={{ y, opacity, scale }} className="bound xl">
                    <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                        Zusammen-<br />arbeit</motion.h1>
                    <motion.h2 variants={hltwo} initial="hidden" animate="enter" exit="exit">
                        Zusammen erreicht man soviel mehr.
                    </motion.h2>
                </motion.div>

                <section className="points">
                    <Bound>
                        <h3>Drei gute Gründe</h3>

                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Das Zucker in Darmstadt</h4>
                                <p>Ein in Darmstadt ansässiger Verein. Förder seit über zehn Jahren Kunst und Kultur im regionalen Raum. Hier finden die Kurse statt.</p>
                            </span>
                            <Image
                                aria-hidden
                                src="/zucker-logo.svg"
                                alt="File icon"
                                width={200}
                                height={80}
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
                                <h4>Musikschule</h4>
                                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                            </span>
                            <Image
                                aria-hidden
                                src="/zucker-logo.svg"
                                alt="File icon"
                                width={200}
                                height={80}
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
                                <h4>Kollaboration</h4>
                                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                            </span>
                            <Image
                                aria-hidden
                                src="/zucker-logo.svg"
                                alt="File icon"
                                width={200}
                                height={80}
                            />
                        </motion.div>
                    </Bound>
                </section>

                <section className="two-grid">
                    <div>
                        <motion.h3
                            variants={hlone}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{
                                once: true,
                                amount: '.2'
                            }}>
                            Über mich
                        </motion.h3>
                        <h2>Ich bin Laura Maria Müller – leidenschaftliche Musikerin und Pädagogin mit über 10 Jahren professioneller Erfahrung.</h2>
                        <p>
                            In meinen Kursen bringe ich Kindern von 0 bis 8 Jahren die Freude an der Musik näher und helfe ihnen, ihre kreativen Fähigkeiten zu entfalten. Die Kleinen lernen, Instrumente zu spielen und sich selbst besser kennenzulernen. Dabei achte ich immer auf die individuelle Entwicklung jedes Kindes.
                        </p>
                    </div>

                    <div>
                        <motion.div
                            variants={hlone}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <Image src="/portrait.jpg" alt="portrait" width={500} height={500} />
                        </motion.div>
                        <h5>Laura Maria Müller</h5>
                        <h6 variants={hltwo}>Musikerin und Pädagogin</h6>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}