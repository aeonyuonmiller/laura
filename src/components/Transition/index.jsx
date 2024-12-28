import React from 'react'
import { motion } from 'motion/react';
import { slide, opacity, perspective } from './anim';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Transition({ children }) {
    return (
        <div className='inner'>
            <motion.div className='slide' {...anim(slide)} />
            <motion.div className='page' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    {children}
                </motion.div>
            </motion.div>
        </div>
    )
}