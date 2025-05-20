import { useState } from "react"
import { menuTabs } from "../../constants"

import './styles.css'
import SolarComponent from "../energys-data/SolarComponent"
import EolicComponent from "../energys-data/EolicComponent"
import HidroComponent from "../energys-data/HidroComponent"
import GeotermComponent from "../energys-data/GeotermComponent"
import Energys from "../energys-data/Energys"


const EnergyData = () => {

  const [activeTab, setActiveTab] = useState()  

  const EnergyTabContent ={
    tab1: (
        <div className="infoEnergy">
            <SolarComponent />
        </div>
    ),
    tab2: (
        <div className="infoEnergy">
            <EolicComponent />
        </div>
    ),
    tab3: (
        <div className="infoEnergy">
            <HidroComponent />
        </div>
    ),
    tab4: (
        <div className="infoEnergy">
            <GeotermComponent />
        </div>
    )
  }  

  return (
    <div className="contianer flex flex-col mt-6 w-full justify-center items-center ">
        <div className="title">
            <h1>Datos y Energias renovables</h1>
        </div>
        <div className="contain-country-data">
            <Energys />
        </div>
        <div className="flex w-full items-center justify-around mt-6  flex-wrap border-b">
            {menuTabs.map((tab) => (
                <button 
                    key={tab.id}
                    className={`px-4 py-2 font-semibold cursor-pointer ${
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