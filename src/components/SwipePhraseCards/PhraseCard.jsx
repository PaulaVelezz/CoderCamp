import React from 'react'
import { phraseData } from '../SwipePhraseCards/phraseData.js' 
import { motion } from 'framer-motion'

const PhraseCard = ({id, title, phrase, speaker, image}) => {

  return (
    <motion.div key={id} className='bg-[#f9f900] opacity-90 rounded-2xl h-96 w-96 p-4 text-stone-800 overflow-hidden'>
      <p>{phrase}</p>
      <span className='font-semibold'>{speaker}</span>
      <a href="#">LinkedIn</a>
      <img 
       className='w-20 h-20 object-cover rounded-2xl'
       src={image} alt={title} 
       />
    </motion.div>
  )
}

export default PhraseCard