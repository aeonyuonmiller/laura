import Head from "next/head";
import { motion } from "motion/react"

// Components
import Background2 from "../components/Background2";
import { Bound } from "../components/Bound";
import { hlone, hltwo } from "../components/anim";

// const dokdo = localFont({
//     src: "./fonts/DokdoRegular.woff",
//     variable: "--font-dokdo",
//     // weight: "400",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

export default function Home() {
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

          <div className="bound xl">
              <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
                Über mich
              </motion.h1>
              <motion.h2 variants={hltwo} initial="hidden" animate="enter" exit="exit">
                Leidenschaftliche Pädagogin und Musikerin mit 10 Jahren Erfahrung.
              </motion.h2>
          </div >
  
                <section>
                    <Bound>
                        <h3>Laura Maria Müller</h3>
                        <h4>Grund 1</h4>
                        <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
                    </Bound>
                </section>
              </div>
        </>
    );
}
