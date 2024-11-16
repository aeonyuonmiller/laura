import { stagger } from "framer-motion"

export const classic = {
    hidden: { opacity: 0, y: 40, transition: { duration: 1.2, bounce: .4 }},
    enter: { opacity: 1, y: 0 },
    exit: { y: -40, opacity: 0, transition: { bounce: .4, duration: 1, }}
}

export const quick = {
    hidden: { opacity: 0, y: 80, scale: .98, filter: "blur(6px)" },
    enter: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { delay: .2, type: "spring", duration: .5, bounce: .2 }},
    exit: { opacity: 0, y: -40, scale: .98, filter: "blur(6px)", transition: { type: "spring", duration: .5, bounce: .2 }}
}