import React from 'react'
import Hero from './components/sections/Hero'
import Header from './components/Header/Header'
import EnergyData from './components/sections/EnergyData'
import Energys from './components/energys-data/Energys'
import Footer from './components/footer/Footer'
import InfoEnergy from './components/sections/InfoEnergy'

const App = () => {
  return (
    <div className='mainContainer'>
      <Header />
      <Hero />
      <main>
        
        <EnergyData />
      </main>
      <div className="container-renovable-info">
        <InfoEnergy />
      </div>
      <Footer />
    </div>
  )
} 

export default App