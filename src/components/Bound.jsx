import { motion } from "motion/react"
import { quick } from './anim'

export const Bound = ({ children }) => {
    return (
        <motion.div
            variants={quick} initial="hidden" animate="enter" exit="exit" className="bound">{children}</motion.div>
    )
}
