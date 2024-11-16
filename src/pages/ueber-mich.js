import Head from "next/head";
import localFont from "next/font/local";
// import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion"

// Components
import Background from "@/components/Background";
import { Bound } from "@/components/Bound";

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
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 1 } }} exit={{ opacity: 0, y: -15 }}>
                Über mich
              </motion.h1>
              <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 1.05 } }} exit={{ opacity: 0, y: -15 }}>
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
