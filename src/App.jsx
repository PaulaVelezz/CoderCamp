import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import SendQuote from "./components/SendQuote/SendQuote.jsx"
import GridQuotes from "./components/GridQuotes/GridQuotes.jsx"
import Footer from "./components/Footer/Footer.jsx"
import SwipePhraseCards from "./components/SwipePhraseCards/SwipePhraseCards.jsx"


function App() {
  return (
    <>
      <Header />
      <Hero />
      <SwipePhraseCards />
      <SendQuote />
      <GridQuotes />
      <Footer />
    </>
  )
}

export default App