import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Components
import { hlone, hltwo, zoom } from '../components/anim';
import Background2 from "../components/Background2";
import Transition from "../components/Transition/index"
import Footer from '../components/Footer';
import Magnetic from '../components/Magnetic';

export default function Home() {

  // Page Headline Scroll Anim
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })
  const opacity = useTransform(scrollYProgress, [0, .4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "85%"])
  const s2 = useTransform(scrollYProgress, [0, 1], [1, 1.4])
  const o2 = useTransform(scrollYProgress, [0.5, 1], [1, 0])
  const r = useTransform(scrollYProgress, [0, 1], [0, 80])


  return (
    <>
      <Head>
        <title>Tamusi • Tanzen, Musizieren & Singen</title>
        <meta name="description" content="Erlebe spielerische Musik-Kurse für Kleinkinder: Instrumente entdecken, kreative Zusammenarbeit und musikalische Entwicklung. Teilnahme mit oder ohne Eltern möglich!" />
        <meta name="keywords" content="Musik-Kurse Kinder, Musik für Kleinkinder, Kinder-Instrumentenkurse, Eltern-Kind Musik-Kurse, musikalische Früherziehung, Kleinkind-Kurse, Musik und Zusammenarbeit, Musik entdecken für Kinder, kreative Kurse für Kinder, Darmstadt, Hessen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      <Background2 color={"#EA4447"} />
        
      <Transition>
          <motion.div ref={container} style={{ opacity, scale }} className="bound xl" id="startseite">
            <motion.div style={{ rotate: r }} variants={zoom} initial="hidden" animate="enter" exit="exit" className="stoerer">
              Ab<br/>März 2025
            </motion.div>
          <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
              Willkommen<br />bei Tamusi
          </motion.h1>
            <motion.h2 className="center" variants={hltwo} initial="hidden" animate="enter" exit="exit">
            Musikkurse für Kleinkinder.<br/> 
            Mit Empathie und Rhythmus die Entwicklung fördern.
          </motion.h2>
        </motion.div>
        <motion.div variants={hltwo} initial="hidden" animate="enter" exit="exit" className="hero-img">
          <motion.div style={{ y, scale: s2, opacity: o2 }} variants={hltwo} initial="hidden" animate="enter" exit="exit">
            <img src="./guitar2.png" alt="Foto von Lauras Gesicht" />
          </motion.div>
        </motion.div>  
          
        <div className="wrapper">
          <h3 className="center" style={{ marginBottom: 30 }}>Hallo,<br/>wie schön dich hier begrüssen zu dürfen</h3>
          <img style={{ mixBlendMode: "plus-darker", opacity: .8 }} src="./kinder1.png" />
          <p>Das hier ist die Webseite von Tamusi. Hier geht es um das Singen, Tanzen, Bewegen und darum ganzheitliche Erfahrungen in der Welt der Musik zu machen.</p>
          <p>Wenn du auf der Suche nach einem Eltern-Kind-Kurs bist, oder Interesse an einer Kooperation mit mir hast, kontaktiere mich gerne über meine E-Mail.</p>
          <p>Schildere dein Anliegen, und ich werde mich zeitnah bei dir zurückmelden.</p>
         <p className='center'><strong>Ich freue mich auf deine Nachricht!</strong></p>
        </div>  

        {/* classname was "two-grid" */}
        <section className="grid-two">
        {/* <section className="wrapper"> */}
          <div>
            <h4>Mein Steckbrief</h4>
            <p>
              Mein Name ist Laura.<br/>Ich bin Traumapädagogin, Erzieherin und seit mehr als 15 Jahren im Songwriting und als Sängerin in Bands tätig.
            </p>
            <p>
              Ab dem Frühjahr 2025 biete ich Eltern-Kind-Kurse im Bereich der elementaren Musikpädagogik in Darmstadt und Umgebung an.
            </p>
            <Link className="button" href="/ueber-mich" aria-label="Über mich" scroll={false} tabIndex={0}>
                <Magnetic><svg height="16" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.761 0.771364C12.0591 0.933032 11.3459 1.18632 11.1745 1.32023C10.9687 1.48093 10.5872 1.558 10.2818 1.52044C9.97642 1.48287 9.71708 1.57498 9.69454 1.75821C9.67576 1.91091 9.38261 2.27786 9.03965 2.54569C8.6967 2.81351 8.24383 3.47083 7.98922 4.02853C7.63597 4.88412 7.43395 5.01427 6.83068 4.87806C6.41065 4.76439 5.86422 4.41817 5.61942 4.14005C5.34783 3.82763 4.87424 3.64537 4.4965 3.69191C4.11876 3.73844 3.88572 3.61678 3.91577 3.37246C3.95333 3.06707 3.64419 3.06005 2.52649 3.32557C0.832784 3.73726 0.661306 3.87117 0.46075 4.74553C0.298245 5.56258 0.965512 7.19471 1.48468 7.25857C1.69845 7.28487 1.85163 7.55172 1.81031 7.88765C1.72767 8.55951 2.37796 9.32153 3.21803 9.54887C3.54644 9.65127 4.00502 9.95568 4.21552 10.2606C4.53691 10.6721 5.04856 10.7971 6.22407 10.8177C7.30421 10.8575 7.51422 10.9144 6.85412 10.9882C6.00327 11.1005 5.96522 11.1578 6.49238 11.4087C6.81329 11.5722 7.27561 11.846 7.53168 12.0325C8.30365 12.5615 10.4071 12.8513 10.9483 12.4838C11.2494 12.3039 11.4167 11.9524 11.3551 11.6968C11.2936 11.4413 11.4115 11.2387 11.5947 11.2613C11.7817 11.2533 12.0908 11.2603 12.2778 11.2523C12.6175 11.2631 14.663 9.25162 14.7118 8.85462C14.7269 8.73246 15.4005 7.79229 16.1809 6.74123C17.8063 4.61609 18.1694 2.92468 17.2625 1.7281C16.593 0.870706 14.4167 0.417001 12.761 0.771364ZM15.4218 3.08273C15.403 3.23543 15.1705 3.36183 14.9262 3.33178C14.6819 3.30172 14.4869 3.12273 14.5057 2.97004C14.5282 2.7868 14.757 2.69094 15.0013 2.721C15.2456 2.75105 15.4444 2.8995 15.4218 3.08273ZM2.02951 4.8455C2.10235 5.00947 2.02248 5.15465 1.86979 5.13587C1.68656 5.11333 1.55264 4.94185 1.57143 4.78915C1.59396 4.60592 1.67007 4.49128 1.73115 4.49879C1.82276 4.51006 1.96043 4.651 2.02951 4.8455ZM6.30498 5.37142C6.37781 5.53538 6.32849 5.68432 6.14526 5.66178C5.99256 5.643 5.76703 5.46025 5.6942 5.29629C5.62512 5.10178 5.67069 4.98338 5.85392 5.00592C6.00662 5.0247 6.2359 5.17691 6.30498 5.37142ZM2.83723 6.0919C2.49427 6.35972 2.27577 5.86783 2.59946 5.50463C2.82401 5.19124 2.88509 5.19875 2.96593 5.54971C3.00071 5.771 2.94012 6.01155 2.83723 6.0919ZM14.6281 7.01525C14.6093 7.16794 14.4684 7.30561 14.2851 7.28307C14.1324 7.26429 13.9985 7.09281 14.0173 6.94012C14.0398 6.75688 14.2076 6.65351 14.3603 6.67229C14.5435 6.69483 14.6506 6.83201 14.6281 7.01525ZM5.70512 6.97169C5.61023 7.23903 5.70609 7.46783 5.88933 7.49037C6.07256 7.51291 6.11486 7.67312 5.97016 7.84132C5.82171 8.04007 5.55813 7.91464 5.20995 7.4688C4.91535 7.09155 4.7847 6.64146 4.93316 6.44272C5.29865 5.99166 5.90241 6.37594 5.70512 6.97169ZM13.7449 8.14665C13.7036 8.48258 13.5476 8.74241 13.4254 8.72738C13.1201 8.68981 13.1797 7.95312 13.5189 7.71583C13.8275 7.47479 13.8313 7.44425 13.7449 8.14665ZM2.59013 6.58852C2.57886 6.68014 2.43793 6.81781 2.24342 6.88689C2.07946 6.95972 1.93427 6.87986 1.95306 6.72717C1.9756 6.54393 2.14707 6.41002 2.29977 6.4288C2.483 6.45134 2.59765 6.52745 2.59013 6.58852ZM10.8931 9.65593C10.8744 9.80863 10.7945 9.95381 10.7334 9.9463C10.6418 9.93503 10.5079 9.76355 10.4351 9.59958C10.366 9.40508 10.4421 9.29044 10.5948 9.30922C10.778 9.33176 10.9157 9.4727 10.8931 9.65593ZM4.13698 9.13488C4.1182 9.28758 3.89691 9.32236 3.66387 9.20069C3.43458 9.04848 3.23584 8.90003 3.24335 8.83895C3.25086 8.77788 3.47215 8.74309 3.71646 8.77315C3.96077 8.8032 4.15952 8.95165 4.13698 9.13488ZM10.2204 11.0922C10.3238 11.26 10.1025 11.2947 9.77787 11.1618C9.09801 10.8922 9.03269 10.6671 9.64347 10.7423C9.88778 10.7723 10.1476 10.9283 10.2204 11.0922Z" fill="#630507"/>
</svg></Magnetic>Mehr zu mir</Link>
            </div>

          <div className='centro'>
            <motion.div
              variants={hlone}
              initial="hidden"
              animate="enter"
              exit="exit"
            >
              <Image src="/portrait.jpg" alt="portrait" width={300} height={300} />
              <h5>Laura Maria Müller</h5>
              <h6 className="fineprint">Musikerin und Pädagogin</h6>
            </motion.div>
          </div>
          </section>
          
          <Footer />
      </Transition>  
      </>
    </>
  );
}

// Components
// const Phrase = ({src}) => {
//   return (
//     <div>
//       <p style="font-size: 7.5vw;">Front End Developer</p>
//       <span style="position: relative;">
//         <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
//         okokok
//       </span>
//     </div>
//   )
// }