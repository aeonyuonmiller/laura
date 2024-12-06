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

export default function Home() {

    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"] )
  const opacity = useTransform(scrollYProgress, [0, .2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])


  // const Slide = (props) => {
  // const direction = props.direction == 'left' ? -1 : 1;
  // const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  // }

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
        <Background2 color="#EA4447" />

        <motion.div ref={container} style={{y, opacity, scale}} className="bound xl">
          <motion.h1 variants={hlone} initial="hidden" animate="enter" exit="exit">
            Willkommen<br/>bei Tamusi</motion.h1>
            <motion.h2 variants={hltwo} initial="hidden" animate="enter" exit="exit">
            Musikkurse für Kleinkinder. 
            Mit Empathie und Rhythmus die Entwicklung Ihrer Kleinen fördern.
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
              viewport={{
                amount: '.4',
                once: true
                // margin: "100px 100px -100px 100px"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                // width="248"
                height="45vh"
                fill="none"
                viewBox="0 0 248 278"
              >
                <path
                  fill="url(#a)"
                  d="M35.934 60.326a55 55 0 0 1-1.75 1.88l-5.089 4.68q-1.869 14.274-3.351 24.456a343 343 0 0 1-2.306 18.879l-4.025 42.458q.392 6.747-.044 11.351.075 4.652-.313 8.745-.485 5.115-1.384 9.159-.851 3.532-1.24 7.625l-.387 4.092q.365 1.583.683 3.678 1.464 6.332 2.708 9.547 1.292 2.703 2.024 5.869 1.244 3.216 2.854 8.013 1.657 4.287 3.391 13.225l.953 6.284 9.627 12.784q3.58.339 5.847 3.651 2.316 2.8 6.628 6.306 4.825 3.555 13.23 7.448 8.965 3.43 25.335 4.983 9.207.873 17.489.626 8.793-.2 16.806-3.052 13.37-4.927 22.552-9.217 9.693-4.243 17.899-9.142a133 133 0 0 0 15.584-11.942q7.84-6.483 17.507-15.89 1.68-1.388 5.283-6.725t7.351-12.206a109 109 0 0 0 6.522-14.35q3.333-7.942 4.061-15.615l5.402-13.424q1.018-10.743 1.282-18.976l5.093-53.712q-2.778-3.36-6.311-4.211-2.972-1.314-7.016-2.214a26 26 0 0 0-2.954-.528l-4.744-24.323q-3.542.815-5.978-2.651-2.143-4.131-3.991-8.925-1.478-3.836-2.663-8.336-1.368-4.98-2.292-7.376-1.294-3.357-3.102-3.76Q166.784 5.49 133.246 1.347 100.004-3.46 65.483 9.846l-4.315 1.664Q47.42 27.272 40.313 45.982q-2.795 7.405-4.38 14.344"
                ></path>
                <path
                  fill="#920B0E"
                  d="M238.16 50.386c0 .301-.264.452-.641.377-.716-.189-2.414 1.169-3.771 3.055l-.792 1.131-.792-1.018c-1.848-2.339-5.016-2.716-6.412-.717-.377.528-.792 1.773-.905 2.753-.189 1.471-.076 1.962.717 3.206.565.792 1.282 1.697 1.621 1.999 1.056 1.018 3.206 2.15 3.809 1.999.453-.113.604.188.566 1.094 0 .679.113 1.584.302 2.036.377.906 1.773 1.886 1.773 1.245 0-.226.226-.34.528-.226.264.113.98-.302 1.584-.906.565-.603.905-1.093.678-1.093-.188-.038.076-.377.566-.792s.792-.83.641-.98c-.113-.114.113-.453.528-.755s.755-.68.755-.905c0-.189.943-1.283 2.112-2.414 1.735-1.66 2.036-2.15 1.697-2.602-.34-.415-.302-.566.113-.717.302-.113.641-.038.717.226.264.755.754-2.3.49-3.281-.302-1.282-2.338-2.715-4.262-3.017-1.282-.189-1.622-.113-1.622.301m3.055 2.602c1.019.754.755 2.338-.603 3.771-.717.755-1.169 1.434-1.056 1.547.151.113-.038.226-.377.226-.566 0-.83.415-.679 1.207q0 .283-.227.226c-1.244-.226-3.281 2.452-3.205 4.262.037 1.207-.566 1.47-.943.415-.302-.754-.754-1.32-1.81-2.376-1.547-1.509-1.962-1.848-2.377-1.848-.264 0-.452-.151-.452-.302 0-.189-.528-.679-1.169-1.17-.905-.678-1.245-.753-1.697-.376-.453.377-.491.34-.302-.189.113-.34.377-.603.528-.603s.302-.227.264-.49c-.076-1.962.188-2.49 1.32-3.055 1.207-.604 2.414-.83 1.546-.302-.49.302 1.924 3.356 2.527 3.168.226-.038.377.038.34.188-.038.189.075.68.226 1.132.528 1.697 2.074.716 2.074-1.282 0-1.81 2.64-4.64 4.3-4.64.641 0 1.433.227 1.772.49m-3.62 8.561c.113.189-.038.377-.34.377-.339 0-.603-.188-.603-.377 0-.226.151-.377.339-.377.226 0 .49.15.604.377m-.755 1.886c.113.188.038.377-.151.377-.226 0-.414-.188-.414-.377 0-.226.075-.377.15-.377.114 0 .302.15.415.377m-2.451 3.017a.38.38 0 0 1-.377.377.405.405 0 0 1-.377-.377c0-.226.188-.377.377-.377.226 0 .377.15.377.377M211.171.862c0 .604.528.905 1.283.754 1.433-.377 4.827 2.339 7.543 6.11l1.584 2.263 1.584-2.036c3.696-4.677 10.032-5.431 12.823-1.434.754 1.056 1.584 3.546 1.81 5.507.377 2.942.151 3.922-1.433 6.411-1.131 1.584-2.564 3.395-3.243 3.998-2.112 2.037-6.412 4.3-7.619 3.998-.905-.226-1.207.377-1.131 2.187 0 1.358-.227 3.168-.604 4.074-.754 1.81-3.545 3.771-3.545 2.489 0-.453-.452-.679-1.056-.453-.528.227-1.961-.603-3.168-1.81-1.131-1.207-1.81-2.187-1.358-2.187.377-.076-.151-.755-1.131-1.585-.981-.83-1.584-1.659-1.282-1.96.226-.227-.227-.906-1.057-1.51-.829-.603-1.508-1.357-1.508-1.81 0-.377-1.886-2.564-4.224-4.827-3.47-3.32-4.073-4.3-3.395-5.205.679-.83.604-1.131-.226-1.433-.603-.226-1.282-.075-1.433.452-.528 1.51-1.509-4.6-.981-6.562.604-2.565 4.677-5.43 8.524-6.034 2.565-.377 3.243-.227 3.243.603m-6.109 5.205c-2.037 1.508-1.509 4.676 1.207 7.543 1.433 1.508 2.338 2.866 2.112 3.092-.302.227.075.453.754.453 1.131 0 1.659.83 1.358 2.414q0 .566.452.452c2.489-.452 6.563 4.903 6.412 8.524-.076 2.414 1.131 2.942 1.886.83.603-1.509 1.508-2.64 3.62-4.752 3.093-3.018 3.923-3.697 4.752-3.697.528 0 .905-.301.905-.603 0-.377 1.056-1.358 2.339-2.338 1.81-1.358 2.489-1.509 3.394-.755.905.755.981.68.604-.377-.227-.679-.755-1.207-1.056-1.207s-.604-.452-.528-.98c.15-3.923-.378-4.979-2.641-6.11-2.413-1.207-4.827-1.66-3.092-.603.98.603-3.847 6.713-5.054 6.336-.453-.076-.754.075-.679.377.076.377-.151 1.358-.452 2.263-1.056 3.394-4.149 1.433-4.149-2.565 0-3.62-5.28-9.278-8.599-9.278-1.282 0-2.866.453-3.545.98m7.241 17.122c-.226.378.075.755.679.755.679 0 1.207-.377 1.207-.755 0-.452-.302-.754-.679-.754-.453 0-.981.302-1.207.754m1.509 3.772c-.227.377-.076.754.301.754.453 0 .83-.377.83-.754 0-.453-.151-.754-.302-.754-.226 0-.603.301-.829.754m4.903 6.034c0 .378.301.755.754.755.377 0 .754-.377.754-.755a.756.756 0 0 0-.754-.754c-.453 0-.754.302-.754.754"
                ></path>
                <defs>
                  <pattern
                    id="a"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                  >
                    <use
                      xlinkHref="#b"
                      transform="matrix(0 .00034 -.00028 0 1.019 0)"
                    ></use>
                  </pattern>
                  <image
                    xlinkHref="/portrait.png"
                    id="b"
                    style={{ objectFit: "cover", }}
                    width="2936"
                    height="3739"
                  ></image>
                </defs>
              </svg>
              {/* <Image src="/portrait.png" alt="portrait" width={500} height={500} /> */}
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
            // className="border-none p-0"
            // data-aos="fade-down"
            >
            <label for="id-nachname">Nachname</label>
            <input
              name="nachname"
              type="text"
              id="id-nachname"
              placeholder="Nachname"
              // value={formData.email}
              // onChange={handleChange}
              required
                />
              
                          <input
              name="name"
              type="text"
              placeholder="Name"
              // value={formData.email}
              // onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
              />
              
                          <input
              name="telefon"
              type="tel"
              placeholder="Telefon"
              // value={formData.email}
              // onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
              
            <input
              name="email"
              type="email"
              placeholder="Email"
              // value={formData.email}
              // onChange={handleChange}
              className="text-background w-full p-2 mb-4 border border-gray-300 rounded"
              required
              />
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
            <button
              type="submit"
              className="w-full bg-primary hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded"
            >
              {/* {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send */}
              Anmelden
            </button>
          </form>
          </Bound>

        </section>

        
        <footer>
          <Magnetic>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="120"
              fill="none"
              viewBox="0 0 147 109"
              >
              <path
      fill="#000"
      fillOpacity="0.35"
      d="M27.064.49c-.184.096-.378.251-.436.348a4.5 4.5 0 0 1-.417.572c-.174.222-.32.445-.32.494 0 .058-.067.155-.145.223-.232.193-.794 1.191-.871 1.56a1.9 1.9 0 0 1-.204.522c-.078.107-.136.34-.136.533a2.2 2.2 0 0 1-.193.726c-.107.233-.194.601-.194.92 0 .31-.068.611-.145.718-.107.145-.146.484-.146 1.336 0 .93-.038 1.23-.203 1.647-.184.465-.203.668-.165 2.267.02 1.337.058 1.792.165 1.918.087.106.155.484.184 1.007.029.485.097.92.174 1.037.078.106.136.407.136.678s.087.668.194.91c.106.233.193.582.193.795 0 .203.04.397.097.426.049.029.136.242.194.465s.174.542.252.717c.077.164.136.348.136.416 0 .204.803 1.695 1.065 1.986.145.155.3.388.34.514.028.116.367.484.745.803.59.514.726.582.988.543.349-.058.785-.262 4.902-2.354 3.138-1.598 3.971-1.937 4.94-2.044.523-.048.581-.039.823.213.223.213.242.281.136.378-.165.145-2.14 1.346-3.584 2.17-.562.32-1.502.881-2.093 1.25-.62.387-1.491.833-2.043 1.036-.533.203-1.066.465-1.173.581-.407.436-.339 1.434.117 1.54.28.068 2.024.708 2.634.96.272.116.833.29 1.26.387 3.313.756 3.884.785 8.272.32a50 50 0 0 0 1.744-.204l.339-.068-.213.272c-.116.145-.213.358-.213.474 0 .107-.068.33-.155.494-.194.368-.194.92 0 1.298a1.3 1.3 0 0 1 .155.494c0 .436 1.094 2.325 1.763 3.061.368.398.658.766.658.824 0 .155.63.378 1.056.378.988 0 4.137-1.047 5.725-1.909 2.325-1.259 2.228-1.22 2.228-1.007 0 .106.04.213.087.242.049.03.204.28.35.562.348.678.484.814 1.055 1.114.446.223.61.252 1.56.261.59 0 1.743-.029 2.576-.077l1.521-.087.204.465c.27.61.29 2.17.038 2.615-.145.252-.174.591-.174 2.519 0 1.947.02 2.266.165 2.518.097.155.174.465.174.669 0 .339.436 1.637.824 2.431.067.155.174.446.222.64.049.193.262.6.465.91.213.31.427.659.494.765.359.61 1.899 2.325 2.451 2.722.213.155.59.436.823.6.572.427 2.335 1.435 3.41 1.958.766.368.891.465.94.716a2.96 2.96 0 0 1-.136 1.618c-.135.359-.194.717-.194 1.318 0 .503-.048.93-.135 1.084-.068.146-.155.727-.184 1.308-.039.707-.107 1.105-.204 1.25-.116.155-.155.465-.155 1.124 0 .648-.048.988-.155 1.21-.126.223-.174.66-.213 1.667-.029.92-.087 1.424-.174 1.569-.097.145-.136.533-.136 1.21 0 .872-.029 1.056-.232 1.434-.242.475-.736.814-1.298.92-.184.04-.756.262-1.26.495-.513.242-1.065.465-1.22.494-.165.029-.388.106-.494.174a2.4 2.4 0 0 1-.543.184c-.368.068-.571.34-.571.785 0 .63.349.794 1.143.571.3-.087.64-.213.746-.271.261-.165 1.937-.698 2.431-.785l.397-.058.117.659c.058.358.126.92.135 1.24l.02.581.348.087c.436.107.775.03.93-.213.058-.106.184-.62.272-1.143.087-.533.203-.998.242-1.046.145-.145 1.191.33 2.276 1.056 1.133.765 1.521.881 1.84.562.117-.117.146-.252.107-.494-.077-.494-.271-.717-.891-1.027-1.57-.785-2.993-1.967-2.906-2.403.029-.126.087-.445.145-.707.058-.271.213-1.181.349-2.034s.31-1.918.388-2.373c.067-.455.154-1.085.193-1.405.03-.32.116-.891.194-1.26.339-1.743.446-2.411.533-3.486.164-1.967.271-2.965.32-3.023.028-.029.435.03.91.136.697.145 1.298.174 3.274.174 2.587 0 3.923-.116 6.994-.63.872-.145 1.598-.242 1.627-.212.03.029.049.145.049.261 0 .107.058.262.126.32.077.087.135.61.165 1.608.038 1.104.096 1.53.193 1.656.107.136.155.581.194 1.86.048 1.637.058 1.695.28 1.88.35.28.902.232 2.19-.204.64-.223 1.53-.484 1.976-.591.475-.107 1.376-.455 2.15-.814.727-.348 1.386-.63 1.463-.63.184 0 .465.33.746.873.465.881 1.918 2.13 2.5 2.13.28 0 .61-.435.61-.813 0-.252-.116-.426-.64-.93-.648-.64-1.54-1.724-1.472-1.792.02-.02.426-.213.901-.436.484-.223.949-.465 1.036-.552.233-.213.223-.717-.019-.979-.261-.28-1.007-.29-1.52-.019-.388.194-.572.233-1.037.213l-.281-.02.058-1.462c.039-.92.029-1.54-.039-1.647-.155-.29-.494-.222-.9.194-.34.349-.378.446-.437 1.066-.038.377-.116.736-.184.804-.067.067-.116.387-.116.775 0 .552-.029.678-.213.852-.126.107-.33.223-.465.252-.407.097-1.482.436-1.821.581a1.7 1.7 0 0 1-.533.136.83.83 0 0 0-.416.145.8.8 0 0 1-.427.145c-.135 0-.368.068-.523.146-.164.087-.513.174-.794.193l-.513.04-.04-.844c-.086-1.54-.251-3.448-.358-4.126-.058-.368-.087-.678-.077-.688.02-.02.358-.165.756-.33 1.007-.426 1.656-.803 2.615-1.51 1.385-1.027 2.79-2.616 3.322-3.76.3-.638.97-2.944 1.182-4.087.184-.94.32-3.38.33-5.696.01-1.25.029-1.424.164-1.424.388 0 2.238.717 3.575 1.385 2.509 1.24 2.615 1.28 3.971 1.25 2.015-.048 3.924-.445 5.183-1.085 1.25-.63 3.991-2.354 4.911-3.08 1.095-.872 2.16-2.5 2.16-3.303 0-.504-.135-.688-.794-1.018-.339-.174-.407-.174-1.453-.019-1.463.203-5.783.64-6.296.63l-.417-.01.484-.136c.272-.067 1.337-.261 2.374-.426 3.884-.61 6.064-1.279 8.359-2.577 1.366-.775 2.277-1.501 3.652-2.915 1.337-1.357 1.618-1.773 1.512-2.219-.097-.387-.785-.988-1.211-1.065-.194-.03-.553-.165-.814-.29a5.4 5.4 0 0 0-.872-.369l-.407-.116.436-.233c.717-.368 1.947-1.21 2.606-1.792.349-.31.852-.726 1.143-.93 1.792-1.327 2.877-2.828 3.468-4.795.213-.697.271-1.123.31-2.218.058-1.589 0-1.918-.746-3.807-.542-1.375-.823-1.734-1.385-1.83-.533-.088-.785.019-1.395.59-.31.281-.736.61-.949.717-.214.116-1.211.998-2.228 1.966-1.008.96-2.006 1.84-2.209 1.947-.203.097-.93.708-1.598 1.347-.678.649-1.376 1.23-1.55 1.308-.184.068-.775.562-1.308 1.075a1053 1053 0 0 1-5.134 4.872c-.31.291-.756.63-.988.766-.233.135-.785.6-1.23 1.017-.446.426-1.202 1.143-1.676 1.598-.485.455-1.327 1.27-1.889 1.802-6.53 6.219-6.403 6.103-7.062 6.296l-.223.068.068-1.094c.058-1.105.155-2.2.33-4.01.048-.534.145-1.774.203-2.762s.174-2.373.252-3.08c.232-1.995.029-3.73-.698-5.957-.145-.417-.232-.775-.222-.785.116-.097 2.295-.93 4.175-1.598 2.731-.979 4.804-1.899 4.94-2.2.232-.493-.213-1.297-.707-1.297-.097 0-.756.28-1.463.62s-1.443.649-1.627.687c-.184.04-.737.262-1.211.494-.485.233-1.027.456-1.211.494-.3.059-1.288.485-1.957.853a1.2 1.2 0 0 1-.465.145 1.3 1.3 0 0 0-.494.155c-.59.3-.755.184-1.395-.94-.726-1.278-.988-1.666-1.85-2.75-.881-1.095-1.56-1.744-2.383-2.287-.358-.232-.794-.523-.969-.639-.484-.32-1.918-.998-2.247-1.066a5 5 0 0 1-.833-.329c-.29-.135-.688-.29-.872-.33a3.4 3.4 0 0 1-.6-.203 1.2 1.2 0 0 0-.456-.135c-.106 0-.339-.058-.513-.136-.785-.32-1.618-.542-2.063-.542-.262-.01-.591-.068-.727-.146-.33-.184-7.837-.213-8.166-.029-.116.068-.513.146-.891.184-.552.049-.891.155-1.812.6-1.036.505-1.23.64-2.421 1.754-.707.659-1.356 1.327-1.434 1.482-.078.146-.28.436-.455.64-.175.193-.32.407-.32.474 0 .068-.126.252-.28.417-.32.32-1.076 1.782-1.076 2.053a.84.84 0 0 1-.126.369c-.078.106-.184.368-.242.58-.049.214-.233.756-.397 1.212-.165.455-.3.94-.3 1.085 0 .135-.059.377-.136.532a4 4 0 0 0-.242.66c-.136.542-.3.726-.64.726-.988 0-2.654-.165-2.79-.272-.087-.077-.561-.145-1.2-.184-.572-.029-1.163-.116-1.309-.184-.29-.155-1.879-.184-2.092-.048-.155.097-.261.775-.174 1.114.077.3.087.3 1.956.59.843.136 1.783.282 2.073.33.95.165 2.17.3 2.713.3.29 0 .59.04.649.078.184.116.174 1.172-.01 1.52-.106.214-.155.563-.155 1.24 0 .62-.048 1.066-.136 1.26-.106.232-.154.959-.184 2.848-.048 2.044-.087 2.586-.203 2.828-.126.233-.155.65-.155 2.132 0 1.162-.039 1.937-.106 2.111a2.8 2.8 0 0 0-.175.63l-.058.358-.872-.697c-1.298-1.037-6.267-6.074-7.778-7.866-.262-.32-1.23-1.298-2.16-2.18-.92-.88-1.793-1.762-1.938-1.966-.562-.765-11.024-10.714-11.866-11.275a14 14 0 0 1-1.153-.988c-1.008-.96-2.16-1.947-2.267-1.947-.048 0-.455-.33-.9-.746a23 23 0 0 0-1.531-1.28 22 22 0 0 1-1.385-1.113c-.359-.33-.804-.678-.979-.785a10 10 0 0 1-.92-.707c-.659-.552-1.26-.9-1.53-.881-.098.01-.32.097-.504.193m1.82 2.586c.408.368 1.231 1.085 1.841 1.608a213 213 0 0 1 4.456 3.942c.572.504 1.55 1.376 2.19 1.918.639.553 2.014 1.802 3.05 2.77a360 360 0 0 0 7.285 6.53c.523.445 1.85 1.772 2.955 2.945 3.255 3.448 7.217 7.478 9.067 9.212l1.714 1.608h-.94c-.939-.01-1.956-.184-2.198-.378-.107-.087-.707-1.308-1.008-2.054-.048-.135-.251-.32-.435-.416-.446-.203-.746-.107-2.054.678-1.133.688-2.102 1.162-2.538 1.25-.174.029-.542.174-.823.31-.281.135-.669.29-.853.329-.426.097-1.21.349-1.627.533-.175.077-.533.135-.795.135h-.474l-.34-.61c-.193-.339-.551-1.25-.813-2.034l-.465-1.424.765-.94c.426-.523.804-1.036.843-1.143.213-.552.31-1.027.252-1.26-.097-.367-.6-.561-1.143-.445-1.773.397-7.227 1.143-9.038 1.23-2.102.117-4.805-.348-3.962-.678.349-.135 4.93-2.915 5.347-3.254.252-.194.814-.562 1.24-.804 1.104-.64 1.133-.688 1.056-1.473-.058-.523-.145-.755-.446-1.21-.6-.892-1.036-1.23-1.685-1.308-1.26-.165-3.1.232-6.587 1.404-2.81.95-4.417 1.56-4.814 1.85l-.262.184-.145-.213c-.233-.358-.785-1.598-1.172-2.634-.94-2.538-1.415-6.345-1.124-8.98.174-1.53.668-3.827.988-4.611.165-.378.64-1.23 1.065-1.89.417-.648.766-1.22.766-1.258 0-.155.145-.059.862.58M80.09 4.694c1.801.213 4.824.784 7.168 1.375 1.627.397 3.1.96 3.826 1.453.29.194 1.008.814 1.589 1.376.823.804 1.24 1.317 1.947 2.383.94 1.433 1.366 2.15 1.298 2.218-.077.068-2.935 1.143-3.904 1.472-1.046.359-1.22.388-1.22.223 0-.252-.456-.707-.91-.92-.689-.3-1.977-.562-2.423-.484-.193.038-.503.203-.697.368-.804.707-1.782 2.257-1.782 2.828 0 .64.27 1.279.755 1.753.543.533.969.775 1.782.979.95.242 1.444.136 2.558-.572 1.22-.775 1.433-1.065 1.356-1.87l-.048-.6 1.25-.436c1.86-.658 3.98-1.259 4.077-1.162.262.261.63 2.78.717 4.92.107 2.762-.184 4.098-1.463 6.685-1.152 2.344-2.45 3.739-5.211 5.58-2.315 1.559-4.32 2.411-6.364 2.712-.91.126-4.766.058-5.948-.107-.746-.116-3.003-.843-3.768-1.23-2.354-1.172-5.715-3.778-6.655-5.134-.436-.63-1.405-2.993-1.58-3.856-.29-1.404-.445-3.167-.445-5.008v-1.82h.543c.532 0 2.46.154 5.512.435.852.078 1.889.175 2.295.204l.746.067.058.446c.097.668.223.94.65 1.327.6.543 1.346.843 2.227.891.66.039.814.02 1.27-.203 1.026-.504 1.84-1.443 1.966-2.267.087-.581-.107-1.676-.388-2.247-.126-.252-.426-.63-.658-.843-.368-.349-.523-.407-1.28-.562-.822-.165-.88-.165-1.307 0-.978.378-2.189 1.289-2.354 1.783-.048.145-2.14.038-5.938-.291-2.615-.232-2.954-.281-2.954-.426 0-.378.552-2.025.92-2.77.543-1.076 2.538-4.408 3.08-5.135.601-.813 1.512-1.724 2.103-2.121 1.036-.698 2.692-1.308 4.02-1.492.697-.097 2.421-.058 3.584.078m47.349 3.99c.61.911.649 1.047.649 2.451-.01 1.453-.039 1.657-.484 2.761-.494 1.23-.581 1.405-1.134 2.238-.28.436-.513.833-.513.881 0 .145-1.831 1.87-1.976 1.87-.068 0-.271.116-.455.252a8 8 0 0 1-.979.571c-.358.175-.784.426-.949.572-.165.135-.358.252-.417.252-.067 0-.271.125-.455.27-.184.156-.6.398-.92.543-.32.155-.678.359-.794.475-.475.426-.33 1.26.271 1.57.271.145 1.182.367 2.761.677 1.017.204 1.22.31 1.152.64-.126.571-.629 1.346-.881 1.346-.068 0-.32.155-.562.34-.252.183-.484.338-.533.338-.039 0-.281.155-.523.34-.242.183-.465.338-.494.338s-.542.233-1.143.514c-1.618.775-1.782.842-1.966.842-.088 0-.272.058-.417.136-.145.068-.494.155-.785.184-.281.039-.571.107-.639.165s-.358.126-.639.164c-.291.03-.611.107-.717.165-.116.068-1.066.126-2.422.155-1.501.039-2.334.097-2.567.184-.184.068-.581.223-.872.33-.29.106-.687.31-.871.455-.185.135-.436.29-.543.339-.591.261-1.492 1.346-1.492 1.782 0 .417.601.92 1.55 1.279.795.31.872.32 2.18.31.746 0 1.84-.078 2.421-.165 1.328-.203 3.827-.32 3.827-.184 0 .194-1.027 1.26-1.812 1.88-.901.706-1.976 1.317-2.983 1.675-1.056.368-4.35 1.318-4.611 1.318-.339 0-1.599-.359-2.044-.591-.204-.107-.756-.475-1.221-.814a15 15 0 0 0-1.811-1.114c-.853-.426-1.27-.572-2.412-.823-.271-.058-.155-.175 3.1-3.371 6.102-5.987 8.272-8.03 9.89-9.28 4.378-3.4 4.902-3.866 9.619-8.602 3.487-3.507 6.112-6.016 6.296-6.016.039 0 .185.165.32.359m-38.408 7.16c.126.077.31.28.406.454.524.843-.154 1.85-1.23 1.831-1.007-.01-1.598-.988-1.133-1.87.3-.6 1.346-.813 1.957-.416M78.84 17.15c.513.484.532 1.327.038 1.821-.368.368-.756.446-1.201.261-.698-.29-.96-1.25-.514-1.908.388-.581 1.163-.659 1.676-.174M67.05 29.899c.853 1.143 2.48 2.75 3.546 3.506 3.148 2.219 8.466 3.643 12.932 3.468 3.903-.155 7.788-2.073 11.595-5.725l1.094-1.046v3.778l-.91.862a28 28 0 0 0-1.802 1.87 73 73 0 0 1-1.937 2.082c-.96.979-1.056 1.105-1.114 1.531-.126.814.261 1.153 1.094.959.359-.078 1.976-1.288 3.497-2.606.562-.494 1.085-.9 1.153-.9.145 0 .145.096-.03 2.247-.406 4.785-.697 5.89-2.053 7.662-.9 1.182-3.42 3.449-4.368 3.933a10 10 0 0 0-.853.523c-.659.436-1.608.823-3.332 1.356-2.412.746-2.742.794-5.425.794-2.712 0-3.022-.048-5.57-.842-4.04-1.26-6.52-3.139-7.972-6.035-.727-1.444-.882-2.219-1.366-6.587-.436-3.962-.436-3.982-.261-3.836.232.194 1.927 2.237 2.257 2.722.765 1.114 1.743 1.579 2.218 1.056.271-.3.213-1.085-.136-1.589-.145-.213-1.21-1.327-2.363-2.49-2.47-2.44-2.228-1.811-1.88-4.979.136-1.172.272-2.586.3-3.167l.068-1.037.485.814a22 22 0 0 0 1.133 1.676"
      style={{ mixBlendMode: "plus-darker" }}
                ></path>
              <g fill="#000" fillOpacity="0.5" style={{ mixBlendMode: "plus-darker" }}>
      <path d="M9.502 82.968h-.396q0-.264-.528-.264-.462 0-.726.33l-1.188.132q-.33 0-.66.066h-.528q-.132-.066-.528-.132a2.7 2.7 0 0 0-.858-.132q-.462 0-.528.198-.924.066-1.254.132h-.924a3 3 0 0 1-.33-.132l-.264-.264q-.33-.132-.528-.66a4.8 4.8 0 0 1-.264-1.254v-2.376l.132-.132.264-.264.462-.396h1.056q.462.066.924.066h1.056l.396-.066.33-.198q2.244 0 4.158.198a100 100 0 0 1 3.762.33l3.828.396q1.914.132 4.29.132 0 .198.132.33l.198.198q.132.066.594.066h1.518q.594-.066.99-.132.396-.132.726-.264a7 7 0 0 1 .858-.264q.264.33.198.66 0 .33.528.726a.8.8 0 0 0-.132.462q0 .33.066.33 0 .132-.066.462a3 3 0 0 0-.066.462q0 .264.066.33h.264q-.726.462-1.452.726-.66.198-.924.264h-1.452q-.594 0-1.32-.132-.99.132-1.386.264a3 3 0 0 1-.528.066q-.462 0-.66-.066l-.594-.198h-2.376l.264 3.564 1.584 3.96v11.286l.396 1.386v4.554l-1.716.528-5.346-.462-1.65.33-.792-1.518-.198-3.762v-9.24l1.122-6.336zM27.955 83.496q.33-.99.99-1.518.66-.594 1.65-.99.99-.462 2.442-.858a62 62 0 0 0 3.234-.99q.066-.198.726-.198h1.518q.858 0 1.518-.066.726-.132.792-.462.594.132.99.198t.726.066h2.97q.132.132.264.33l.264.264q.264 0 .462.594.198.528.462 1.254t.594 1.32.858.594h.132q.066.132.066.858.066.66.132 1.452.132.726.264 1.386t.33.792q.066 1.782.198 2.574.198.792.33 1.254.198.396.33.726.198.264.264.792v.528q.066.462.132 1.056.066.528.198 1.056t.33.528q-.066 0-.132.066h-.198q.066 1.518.066 2.706.066 1.188.066 2.31.066 1.056.132 2.244.132 1.188.198 2.706-.264.528-.462.858-.198.264-.264.594h-.924q-.528-.264-.726-.594-.858 0-1.518.132-.66.066-1.188.198a7 7 0 0 1-.924.198 7 7 0 0 1-.99.066q-.66 0-1.584-.462-.924-.528-1.782-.528-.792 0-1.254.198-.396.132-.594.396a2 2 0 0 1-.264.33q-.066.198-.198.198h-3.696q-.858 0-1.716-.066H31.32q-.858 0-1.98-.462a12.5 12.5 0 0 1-2.178-1.32 10 10 0 0 1-1.782-1.848q-.726-1.056-.726-2.112 0-3.3 1.518-5.544 1.584-2.244 4.752-3.828 1.32-.33 2.112-.66t1.386-.594q.66-.33 1.254-.462.594-.198 1.452-.198l1.98-1.122h1.056l.924-.132 1.914-.132v-.396q0-.594.066-1.254.066-.726.396-1.518 0-.396-.264-.528a1.7 1.7 0 0 1-.396-.396q-.33-.132-.462-.33l-.132-.528a.83.83 0 0 0-.33-.462q-.198-.198-.726-.198-.99 0-2.574.33-1.518.33-3.168.792a82 82 0 0 0-2.97.924q-1.32.396-1.98.528-.198 0-.462-.396a38 38 0 0 1-.594-.924 3.5 3.5 0 0 0-.66-.924q-.33-.396-.792-.396m14.322 11.088a29 29 0 0 1-1.32-.33l-1.32-.396h-.264a5.2 5.2 0 0 0-1.122.132q-.528.132-1.188.33-1.32.33-2.508.594a6.5 6.5 0 0 0-2.112.858q-.858.528-1.386 1.584-.462 1.056-.462 2.904 0 .924.264 1.386.33.462.792 1.254l4.62-.264q1.056-.066 2.178-.132a60 60 0 0 0 2.442-.198h.924v-.528q0-.528.066-1.65a9 9 0 0 1 .396-2.178zM87.44 99.732l-.595.924H80.51l-1.716-.726v-3.3l-.858-6.864-.396-1.188-2.838-.264-.132 1.452v5.28l.66 4.554-1.452 1.122h-5.412l-.66-.594v-9.042l-.264-2.508-.792-1.122h-3.3v13.266l-1.452.33H58.4l-.924.462-3.432-.264V89.634l.528-5.61 1.32-2.508 2.97.726 1.452-.198 1.65 1.122.33.594.792.198 3.894-1.386 3.564.264 3.168 1.914 1.584-.264.792-.462 2.046-.198 6.468.132q.99.462 1.584 1.452t1.056 2.046zM109.864 90.822v9.042l-.594.792h-3.96l-1.584-1.056.198-.462-.66-.66-.858.396-2.64 2.64-1.32.66-2.31-.264-.264.462-1.452.462-1.848-1.188-1.584-.528-1.452-3.63.726-7.194-1.122-2.244.528-4.29 1.056-.33h4.95l1.122 3.432v7.26l.528.792.264.99.726.264 3.366-1.122h1.122l.792-.528V83.76l.99-.528 3.3.726zM131.391 96.366q0 .858.066 1.518.132.66.132 1.254 0 .924-.66 1.716a4.5 4.5 0 0 1-1.32 1.122l-1.386.66q-.528 0-.924.264-.396.198-.858.528-.462.264-1.254.528-.726.264-1.98.264a6.8 6.8 0 0 1-1.65-.198 7 7 0 0 0-1.716-.198 13.5 13.5 0 0 0-2.772.264q-1.254.264-2.508.396-.066 0-.66-.264-.528-.33-.528-.462l.132-.066h-.066a.74.74 0 0 1 .198-.528h-.066q-.33 0-.264-.726.066-.792-.33-1.716-.066-.066.396.132.528.198.858.198t.462-.198q1.386.198 1.848.198.594 0 1.188-.198.66-.198 2.178-.66 0 .066.462 0t.99-.264q.594-.264.99-.594a1.25 1.25 0 0 0 .462-.99q0-.462-.198-.99l-.528-.528q-.462-.462-.462-.726-.858-.396-.99-.528a3 3 0 0 1-.198-.33q0-.198-.264-.396-.198-.264-1.122-.594-.66-.066-1.122-.33l-.792-.66a7 7 0 0 0-.858-.726 5.3 5.3 0 0 0-1.122-.594l-.594-.528q-.33-.132-.726-.792-.33-.726-.33-1.32.132-.132.198-.462t.066-.594q0-.33-.066-.396t-.066-.198q0-.462.264-.792.33-.33.33-.924.726-.528 1.056-1.122a4.7 4.7 0 0 1 1.65-1.254 15.5 15.5 0 0 0 1.914-.99l2.508-1.056q.792-.33 1.452-.396.66-.132 1.518-.462.066.066.198.132h1.98q.594-.066 1.386-.198.33.33.792.528.528.132.528 1.122v.66a.74.74 0 0 1 .066.33q-.066 0-.066.066t-.066.066q0 .066.066.066-.264.066-.462.132h-1.32q-.33.198-.528.33a1.7 1.7 0 0 1-.528.066q-1.386.396-1.584.528t-.198.264q-.264.396-.594.528t-.528.132h-.132c-.836.44-1.518 1.122-1.518 1.122s-.198.77-.198 1.386q0 .99.198 1.32.264.264.528.264l1.188 1.122q.066.264.396.594.396.33 1.254.726l.924.462q.198.066.792.462.66.33.792.33.462.198.66.396.264.198.462.33.264.066.594.264.33.132.924.33 0 .594.462.924t.594.924M146.297 81.12l-.66 4.95-.924.66-3.102-.594-3.96.66-.198-.792v-6.27l1.584-.528 2.112.462 2.904.528zm.462 21.978-.396 2.508.33 1.584-1.254.594h-5.082l-.792.264h-1.188l-.66-.726 1.386-15.972 1.122-.528 2.64.198.528-.264 1.386.066.792.858v4.554l.462 1.65v3.102l-.396 1.188z"></path>
              </g>
            </svg>
          </Magnetic>
          <span>&copy; 2024 – <strong>Alle Rechte vorbehalten.</strong>
            <Link href="/impressum">Impressum</Link>
            <a href="mailto:laura@gmail.com">Kontakt</a>
          </span>
        </footer>
      </div>
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
