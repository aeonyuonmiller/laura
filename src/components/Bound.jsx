import { motion } from "framer-motion"
import { quick } from './anim'

export const Bound = ({ children }) => {
    return (
        <motion.div
            variants={quick} initial="hidden" whileInView="enter" exit="exit" className="bound">{children}</motion.div>
    )
}
