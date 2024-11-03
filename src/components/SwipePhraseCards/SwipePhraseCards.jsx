import React, { useState } from 'react'
import { phraseData } from '../SwipePhraseCards/phraseData.js' 
import PhraseCard from '../SwipePhraseCards/PhraseCard.jsx' 

const SwipePhraseCards = () => {
  const [currentCard, setCurrentCard] = useState(0)

  const handlePrevious = () => {
    setCurrentCard((currentCard - 1 + phraseData.length) % phraseData.length)
  }

  const handleNext = () => {
    setCurrentCard((currentCard + 1) % phraseData.length)
  }

  return (
    <section className='flex flex-col justify-evenly items-center h-screen'>
      <div className=''>
        <h2 className='font-drukTrialWide text-5xl font-semibold'>Disparadores destacados</h2>
      </div>

      <div className='grid place-items-center mt-4'>
        {phraseData.map((phrase, index) => {
          return (
            <PhraseCard key={phrase.id} {...phrase} />
          )
        })}
      </div>

      <div className="flex justify-center space-x-4">
        <button className='bg-stone-200 px-6 py-3 border-2 border-violet-800 rounded-2xl'
        onClick={handlePrevious}
        >
          👈
        </button>
        <button className='bg-stone-200 px-6 py-3 border-2 border-violet-800 rounded-2xl'
        onClick={handleNext}
        >
          👉
        </button>
      </div>
    </section>
  )
}

export default SwipePhraseCards