import Head from "next/head";
import Image from "next/image";
// import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion"

// Components
import Magnetic from "../components/Magnetic";
import Background from "@/components/Background";
import { Bound } from "@/components/Bound";

export default function Home() {
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
        <Background color="#EA4447" />

        <div className="bound xl">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 1 } }} exit={{ opacity: 0, y: -15 }}>Willkommen bei Tamusi</motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0, transition: { delay: 1.05 } }} exit={{ opacity: 0, y: -15 }}>
            Musikkurse für Kleinkinder. 
            Mit Empathie und Rhythmus die Entwicklung Ihrer Kleinen fördern.
            </motion.h2>
        </div>

        <section className="points">
          <Bound>
            <h3>Drei gute Gründe</h3>
          
            <div className="point">
              <span>
                <h4>Grund 1</h4>
                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
              </span>
              <img src="/" width={30} />
            </div>

            <div className="point">
              <span>
                <h4>Grund 2</h4>
                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
              </span>
              <img src="/" width={30} />
            </div>

            <div className="point">
              <span>
                <h4>Grund 3</h4>
                <p>Warum es gut ist sein Kind in den Musikunterricht zu nehmen. Barrieren abbauen. Lorem ipsum.</p>
              </span>
              <img src="/" width={30} />
            </div>
          </Bound> 
        </section>
      </div>
    </>
  );
}
