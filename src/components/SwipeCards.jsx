import React, { useState } from 'react'

const cardsPhrase = [
    {
        id: 1,
        title: 'card 1',
        phrase : 'phrase 1',
        speaker: 'speaker 1',
    },
    {
        id: 2,
        title: 'card 2',
        phrase : 'phrase 2',
        speaker: 'speaker 2',
    },
    {
        id: 3,
        title: 'card 3',
        phrase : 'phrase 3',
        speaker: 'speaker 3',
    },
]

const SwipeCards = () => {
    const [cardsPhrase, setCardsPhrase] = useState(cardsPhrase)
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextCard = () => {
        if (currentIndex < cardsPhrase.length - 1) {    
            setCurrentIndex(currentIndex + 1)
        }
    }

    const previousCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

  return (
    <section>
        <div>
            <h2>Cards pre seleccionadas</h2>
            <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={previousCard}
              className="bg-stone-100 p-2 border-2 border-stone-800 rounded-full hover:bg-stone-200 transition-colors disabled:opacity-50"
              disabled={currentIndex === 0}
              aria-label="Previous card"
            >
              👈
            </button>
            <button
              onClick={nextCard}
              className="bg-stone-100 p-2 border-2 border-stone-800 rounded-full hover:bg-stone-200 transition-colors disabled:opacity-50"
              disabled={currentIndex === cardsPhrase.length - 1}
              aria-label="Next card"
            >
              👉
            </button>
          </div>
        </div>
        <div>
            {/* aca irian las cards destacadas */}
        </div>
    </section>
  )
}

export default SwipeCards