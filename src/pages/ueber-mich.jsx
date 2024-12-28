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

export default function Uebermich() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"])
  const opacity = useTransform(scrollYProgress, [0, .2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <>
      <Head>
        <title>Tamusi • Über mich</title>
        <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
        <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Background2 color="#FD7536" />

        <motion.div ref={container} style={{ y, opacity, scale }} className="bound xl">
          <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
            Über mich</motion.h1>
          <motion.h2 variants={hltwo} initial="hidden" animate="enter" exit="exit">
            Leidenschaftliche Musikerin mit pädagogischer Erfahrung.
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

        <section className="two-grid">
          <motion.div variants={hlone} initial="hidden" whileInView="enter" exit="exit" viewport={{
            amount: '.4',
            once: true
          }}>
            <motion.h3
              variants={hlone}
              initial="hidden"
              whileInView="enter"
              exit="exit"
              viewport={{ once: true }}>
              Über mich
            </motion.h3>
            <h2>Ich bin Laura Maria Müller – leidenschaftliche Musikerin und Pädagogin mit über 10 Jahren professioneller Erfahrung.</h2>
            <p>
              In meinen Kursen bringe ich Kindern von 0 bis 8 Jahren die Freude an der Musik näher und helfe ihnen, ihre kreativen Fähigkeiten zu entfalten. Die Kleinen lernen, Instrumente zu spielen und sich selbst besser kennenzulernen. Dabei achte ich immer auf die individuelle Entwicklung jedes Kindes.
            </p>
          </motion.div>

          <div>
            <motion.div
              variants={hlone}
              initial="hidden"
              whileInView="enter"
              exit="exit"
              viewport={{ once: true }}
            >
              <Image src="/portrait.png" alt="portrait" width={500} height={500} />
            </motion.div>
            <motion.h5 variants={hlone} initial="hidden" whileInView="enter" exit="exit">Laura Maria Müller</motion.h5>
            <motion.h6 variants={hltwo} initial="hidden" whileInView="enter" exit="exit">Musikerin und Pädagogin</motion.h6>
          </div>
        </section>

        <section className='contact-form'>
          <Bound>
            <h4>Mein Kind für den Kurs anmelden</h4>
            <p>Die Eltern-Kind Kurse sind bis max. 12 Personen in unseren Räumlichkeiten.</p>

            <form
            // onSubmit={handleSubmit}
            >
              <input
                name="nachname"
                type="text"
                id="id-nachname"
                // placeholder="von Ihnen"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
              <label for="id-nachname">Nachname</label>

              <input
                id="id-name"
                name="name"
                type="text"
                // placeholder="Name des Kindes"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
              <label for="id-name">Name</label>

              <input
                id="id-tel"
                name="telefon"
                type="tel"
              // placeholder="Telefonnummer"
              // value={formData.email}
              // onChange={handleChange}
              // className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              // required
              />
              <label for="id-tel">Telefon</label>

              <input
                id="id-email"
                name="email"
                type="email"
                // placeholder="Emailadresse"
                // value={formData.email}
                // onChange={handleChange}
                className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
              <label for="id-email">Email</label>
              {/* <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="...type your message"
              // value={formData.message}
              // onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
            /> */}
              <button type="submit">
                {/* {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send */}
                Anmelden
              </button>
            </form>
          </Bound>

        </section>

        <Footer />
      </div>
    </>
  );
}
