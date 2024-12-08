import "../styles/globals.css";
import localFont from "next/font/local";
import { AnimatePresence } from "motion/react"
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../components/Magnetic";
import Logo from "../components/Logo";

const dokdo = localFont({
  src: "./fonts/DokdoRegular.woff",
  variable: "--font-geist-sans",
  // weight: "100 900",
});

export default function App({ Component, pageProps, router }) {

    return (
      <div className='main'>
        <div className={`${dokdo.variable}`}>
          <AnimatePresence mode='sync' onExitComplete={() => window.scrollTo(0, 0)}>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </div>

          <div className="logo">
            <Magnetic>
              <Link href="/#" aria-label="Tamusi Logo" scroll={false} tabIndex={0}>
                <Logo />
              </Link>
            </Magnetic>
          </div>

        <nav>
          <Magnetic>
            <Link href="/eltern-kind-kurs" scroll={false} tabIndex={0}>
              <Image
                src="/eltern-kind-kurse.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
              />
              Eltern-Kind-Kurse
            </Link>
          </Magnetic>

          {/* <Magnetic>
            <Link href="/kinder-kurse" scroll={false} tabIndex={0}>
              <Image
                src="/kind-kurse.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
              />Kinder-Kurse
            </Link>
          </Magnetic> */}

          <Magnetic>
            <Link href="/ueber-mich" scroll={false} tabIndex={0}>
              <Image
                src="/ueber-mich.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
              />
              Über Mich
            </Link>
          </Magnetic>

          <Magnetic><Link href="/" scroll={false} tabIndex={0}>
            <Image
                src="/zusammenarbeit.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
          />Zusammenarbeit</Link>
          </Magnetic>

          <Magnetic><Link href="/" scroll={false} tabIndex={0}>
            <Image
                src="/kontakt.svg"
                alt="Brief"
                width={90}
                height={90}
                priority
              />Kontakt</Link></Magnetic>
        </nav>
        </div>
    )

}
