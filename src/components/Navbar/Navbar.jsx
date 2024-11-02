import React from 'react'
import { Links } from '../Navbar/data.js'
import { motion } from 'framer-motion'

const linksVariants = {
   initial: {
       opacity: 0,
   },
   enter: (i) => ({
       opacity: 1,
       transition: {
           delay: 0.5 + (i * 0.1),
       }
   }),
   exit: {
       opacity: 0,
   }
}

const Navbar = () => {
  return (
    <div className='h-full pt-16 p-10 box-border'>
        <div className='text-stone-800 font-semibold text-3xl flex gap-4 flex-col'>
            {
                Links.map((link, i) => {
                    return (
                        <motion.div 
                            key={link.id}
                            custom={i}
                            variants={linksVariants}
                            animate="enter"
                            exit="exit"
                            initial="initial"
                        >
                            <a href={link.path}>{link.title}</a>
                        </motion.div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Navbar