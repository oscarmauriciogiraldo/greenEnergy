import { useFetch } from "../../useFetch"

const SolarComponent = () => {

 
  const { data, loading } = useFetch("http://127.0.0.1:5000/api/data")
  /* console.log(data) */

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto bg-transparent rounded-lg">
      {/* Gráfica de energía (lado izquierdo) */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
        <img 
          src="" 
          alt="Gráfico de uso de energías"
          className="w-[80%]  h-auto rounded-lg border border-gray-200"
        />
      </div>

      {/* Información (lado derecho) */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Distribución de Energía Solar</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>
            <span className="font-medium text-blue-600">Energia Solar:</span> % del total
          </p>
          
          {/* <p>
            <span className="font-medium text-gray-700">Fósiles:</span> 62% del total
            <span className="block text-sm text-gray-500">(Carbón, Petróleo, Gas Natural)</span>
          </p> */}
          
          <p>
            {/* <span className="font-medium text-green-600">Nuclear:</span> 10% del total */}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Los datos muestran una transición gradual hacia energías renovables, con un crecimiento del 5% anual en capacidad solar instalada.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SolarComponent