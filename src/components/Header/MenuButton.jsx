import React from 'react'
import { motion } from 'framer-motion'

const MenuButton = ({isOpen, setIsOpen}) => {
  return (
    <div onClick={() => setIsOpen(!isOpen)} className='absolute top-0 right-0 overflow-hidden h-12 w-28 text-stone-800 border-2 border-violet-800 rounded-2xl cursor-pointer uppercase font-bold'>
       <motion.div
       className='relative h-full w-full'
       animate={{top : isOpen ? '-100%' : '0'}}
       transition={{duration: 0.5, ease: [0.76, 0, 0.20, 1]}}
       >
            <div className='h-full w-full bg-[#f9f900] flex justify-center items-center'>
                <p>Menu</p>
            </div>
            <div className='absolute top-full h-full w-full bg-stone-100 text-violet-800 flex justify-center items-center'>
                <p>Close</p>
            </div>
        </motion.div>
    </div>
  )
}

export default MenuButton