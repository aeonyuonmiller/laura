// import { stagger } from "framer-motion"
// import { easeIn } from "framer-motion"

export const trans = {
    hidden: { opacity: 0 },
    enter:  { opacity: 1, transition: { delay: 1 } },
    exit:   { opacity: 0, transition: { bounce: .4 }}
}

export const hlone = {
    hidden: { opacity: 0, y: 30 },
    enter:  { opacity: 1, y: 0, transition: { delay: 1 } },
    exit:   { opacity: 0, y: -15, transition: { bounce: .4 }}
}

export const classic = {
    hidden: { opacity: 0, y: 40, transition: { duration: 1.2, bounce: .4 }},
    enter:  { opacity: 1, y: 0 },
    exit:   { y: -40, opacity: 0, transition: { bounce: .4, duration: 1, }}
}

export const quick = {
    hidden: { opacity: 0, y: 0, scale: 1, filter: "blur(6px)" },
    enter:  { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { delay: .2, type: "spring", duration: .5, bounce: .2 }},
    exit:   { opacity: 0, y: -20, scale: .99, filter: "blur(6px)", transition: { type: "spring", duration: 1, bounce: .2 }},
}

export const imagereveal = {
    hidden: { opacity: 0, y: 80 },
    enter:  { opacity: 1, y: 0, transition: { delay: .2, type: "spring", duration: 1, bounce: .2 }},
    exit:   { opacity: 0, y: -40, transition: { type: "spring", duration: 1, bounce: .2 }},
}

export const scale = {
    hidden: { opacity: 0, scaleX: .5, scaleY: .5 },
    enter:  { opacity: 1, scaleX: 1, scaleY: 1, transition: { delay: .4, type: "spring", duration: .8, bounce: .5 }},
    exit: { opacity: 0, scaleX: .5, transition: { ease: "easeIn", duration: .4 } },
}

export const hltwo = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { delay: 1.05 }},
    exit: { opacity: 0, y: -15 }
}

export const zoom = {
    hidden: { scale: 0 },
    enter: { scale: 1, transition: { delay: 1.5 }},
    exit: { scale: 0 }
}

export const ui = {
    hidden: { opacity: 0, y: -20 },
    enter: { opacity: 1, y: 0, transition: { type: "spring", bounce: .5, delay: 1.2 }}
}