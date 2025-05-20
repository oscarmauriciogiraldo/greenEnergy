import React from 'react'
import Hero from './components/sections/Hero'
import Header from './components/Header/Header'
import EnergyData from './components/sections/EnergyData'

const App = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <Hero />
      <main>
        <EnergyData />
      </main>
    </div>
  )
} 

export default App