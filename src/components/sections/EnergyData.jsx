import { useState } from "react"
import { menuTabs } from "../../constants"

const EnergyData = () => {

  const [activeTab, setActiveTab] = useState()  

  const EnergyTabContent ={
    tab1: (
        <div className="infoEnergy">
            <h2>Energia 1</h2>
        </div>
    ),
    tab2: (
        <div className="infoEnergy">
            <h2>Energia 2</h2>
        </div>
    ),
    tab3: (
        <div className="infoEnergy">
            <h2>Energia 3</h2>
        </div>
    ),
    tab4: (
        <div className="infoEnergy">
            <h2>Energia 4</h2>
        </div>
    )
  }  

  return (
    <div className="contianer">
        <h1>aqui tabs</h1>
        <div className="flex flex-wrap border-b">
            {menuTabs.map((tab) => (
                <button 
                    key={tab.id}
                    className={`px-4 py-2 font-semibold ${
                        activeTab === tab.id ? "border-b-2 border-b-cyan-950 text-cyan-950" : "text-gray-500 hover:text-cyan-950"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
        <div className="content-infoEnergy">
            {EnergyTabContent[activeTab]}
        </div>
    </div>
  )
}

export default EnergyData