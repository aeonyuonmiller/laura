import { motion } from "motion/react"
import { quick } from './anim'

export const Bound = ({ children }) => {
    return (
        <motion.div
            variants={quick} initial="hidden" whileInView="enter" exit="exit" viewport={{ once: true }} className="bound">{children}</motion.div>
    )
}
