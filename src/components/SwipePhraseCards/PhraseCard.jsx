import React from 'react'
import { phraseData } from '../SwipePhraseCards/phraseData.js' 
import { motion, useMotionValue, useTransform} from 'framer-motion'

const PhraseCard = ({id, title, phrase, speaker, image}) => {
  const x = useMotionValue(0)
  const baseRotate = useTransform(x, [-270, 270], [-20, 20]);

  const firstCard = id === phraseData[phraseData.length - 1].id;

  const rotate = useTransform(() => {
    const offset = firstCard ? 0 : id % 3 ? 7 : -7;
    return `${baseRotate.get() + offset}deg`;
  }); 

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 90) {
      x.set((pv)  =>  [pv.filter((v) => v.id !== id)]);
    }
  }

  return (
    <motion.div className='bg-[#f9f900] opacity-90 rounded-2xl h-96 w-96 p-4 text-stone-800 overflow-hidden hover:cursor-grab active:cursor-grabbing origin-bottom'
    style={{ gridRow: 1, gridColumn: 1, x, rotate, transition: "0.2s transform" }}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={handleDragEnd}
    >
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