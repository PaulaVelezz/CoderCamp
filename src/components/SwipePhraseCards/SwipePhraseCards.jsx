import React from 'react'
import { phraseData } from '../SwipePhraseCards/phraseData.js' 
import PhraseCard from '../SwipePhraseCards/PhraseCard.jsx' 

const SwipePhraseCards = () => {

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
    </section>
  )
}

export default SwipePhraseCards