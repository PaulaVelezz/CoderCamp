import React, { useState } from 'react'
import MenuButton from './MenuButton'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../Navbar/Navbar'

const variants = {
  open: {
    width: 384,
    height: 384,
    transition: {
      duration: 0.5,
      ease: [0.78, 0, 0.20, 1]
    }
  },
  closed: {
    width: 112,
    height: 48,
    transition: {
      duration: 0.5,
      delay: 0.3,
      ease: [0.78, 0, 0.20, 1]
    }
  }
}


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='fixed top-7 right-12'>
      <motion.div 
      className='w-96 h-96 bg-[#f9f900] rounded-2xl'
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      initial='closed'
      >
        <AnimatePresence>
        {isOpen && <Navbar />}
        </AnimatePresence>
      </motion.div>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen}/>
    </header>
  )
}

export default Header