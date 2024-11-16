import "@/styles/globals.css";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";
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

        <Link href="/" scroll={false}>
          <div className="logo">
            <Magnetic>
              <Logo />
          </Magnetic>
          </div>
        </Link>

        <nav>
          <Magnetic>
            <Link href="/eltern-kind-kurs" scroll={false}>
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

          <Magnetic>
            <Link href="/kind-kurs" scroll={false}>
              <Image
                src="/kind-kurse.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
              />Kind-Kurse
            </Link>
          </Magnetic>

          <Magnetic>
            <Link href="/ueber-mich" scroll={false}>
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

          <Magnetic><Link href="/" scroll={false}>
            <Image
                src="/zusammenarbeit.svg"
                alt="Kinderhand in Elternhand"
                width={90}
                height={90}
                priority
          />Zusammenarbeit</Link>
          </Magnetic>

          <Magnetic><Link href="/" scroll={false}>
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
