// 'use client'
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";

// Components
import Magnetic from "../components/Magnetic";
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
          <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
            Leidenschaftliche Musikerin mit pädagogischer Erfahrung.
          </motion.h2>
        </motion.div>
        <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
          <img src="./portrait.jpg" />
        </motion.div>

        <section className="wrapper">
          <p>
            Laura Maria Müller seit 2012 in Darmstadt lebend, 1993 im Rhein-Main-Gebiet geboren, fand ich früh den Weg zur Musik. Über das Singen mit meiner Mama, verfolgte ich meine Leidenschaft für den Gesang in zahlreichen Schulchören, und nahm zwei Jahre lang Keyboardunterricht. Mit 15 Jahren gründeten einige Schulfreund/Innen und ich unsere erste Band, in der ich als Sängerin und Songwriterin tätig war. Seither, probierte ich mich mit den verschiedensten Instrumenten (Gitarre, Ukulele, Kalimba, Glockenspiele, unterschiedliche Percussioninstrumente, und Software am Computer u.a. Fruity Loops und Ableton) aus und war Teil verschiedener Bandprojekte und verfolgte meinen Weg als Solokünstlerin.
          </p>
          <p>
            Mit 17 Jahren begann ich die Ausbildung zur Sozialassisstentin, begab mich danach in die Ausbildung zur staatlich anerkannten Erzieherin und arbeitete fast 10 Jahre mit Kindern im Alter von zwei bis 12 Jahren. Im Laufe meiner Berufsbahn als Erzieherin absolvierte ich die Ausbildung zur Kinderschutzfachkraft, war als stellvertretende Leitung tätig und absolvierte später dann die Weiterbildung zur Traumapädagogin. Nach einer Auszeit, kam die elementare Musikpädagogik mir quasi zugeflogen. Es fühlte sich einfach richtig an, an meiner beruflichen Situation etwas zu verändern und mir die Expertise aus meiner Tätigkeit als Erzieherin dafür von Nutzen zu machen. Ich hospitierte bei einer Musikschule, nahm dort an Eltern-Kind-Kursen und Kursen für Kinder bis zum Schuleintritt teil und merkte schnell wie viel Spass es mir bereitete mich in der musikalischen Früherziehung, mit den Eltern und ihren Kindern auszutoben.
          </p>
          <p>
            Im September 2024 begann ich dann für die Musikschule Taunus zu arbeiten und nahm zeitgleich an diversen Fortbildungen (Musikgarten 1 & Musikgarten 2, dem „Early Child Music Education“- Seminar, vom Verband deutscher Musikschulen, und weiteren kurzweiligen Fortbildungen zum Instrumentalspiel mit Kindern) teil. Seit September 2024 bilde ich mich stetig mit Klavier- und Gesangsunterricht weiter, um professionelle Arbeit leisten zu können. Im Februar 2025 beginnt außerdem ein zertifizierter Lehrgang zur „Fachkraft für Musik im Elementarbereich“.
          </p>
          <p>
            Mit meiner Expertise als Erzieherin gehe ich bewusst auf die Bedürfnisse unserer kleinsten Mitmenschen ein und lasse den Kindern die nötige Zeit um von selbst in den Ausdruck, oder das Spiel mit der Musik zu kommen.
          </p>
          <p>
            Ich freue mich auf euch!
          </p>
        </section>

        {/* <section className='contact-form'>
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
            />
              <button type="submit">
                {/* {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send 
                Anmelden
              </button>
            </form>
          </Bound>

        </section> */}

        <Footer />
      </div >
    </>
  );
}
