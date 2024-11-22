import Head from "next/head";
import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion"

// Components
import Background from "@/components/Background";
import { Bound } from "@/components/Bound";
import { hl1, hl2 } from "@/components/anim";

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
              <Background color="#FD7536" />

          <div className="bound xl">
              <motion.h1 variants={hl1} initial="hidden" animate="enter" exit="exit">
                Über mich
              </motion.h1>
              <motion.h2 variants={hl2} initial="hidden" animate="enter" exit="exit">
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
