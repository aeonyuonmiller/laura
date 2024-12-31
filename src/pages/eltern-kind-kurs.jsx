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
                        Kinder zwischen 0 und 3 Jahren entdecken hier ihre musische Seite.
                    </motion.h2>
                </motion.div>

                <section className="points">
                    <Bound>
                        <h3 className="center">Drei gute Gründe</h3>

                        <motion.div
                            className="point"
                            variants={imagereveal}
                            initial="hidden"
                            whileInView="enter"
                            exit="exit"
                            viewport={{ once: true }}
                        >
                            <span>
                                <h4>Grund 1</h4>
                                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                            </span>
                            <Image
                                aria-hidden
                                src="/hands-with-heart.svg"
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
                                <h4>Grund 2</h4>
                                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                            </span>
                            <Image
                                aria-hidden
                                src="/holding-hands.svg"
                                alt="Hand in Hand"
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
                                <h4>Grund 3</h4>
                                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                            </span>
                            <Image
                                aria-label='drums'
                                src="/drums.svg"
                                alt="Trommel"
                                width={300}
                                height={300}
                            />
                        </motion.div>
                    </Bound>
                </section>

                <Footer />
            </div>
        </>
    );
}