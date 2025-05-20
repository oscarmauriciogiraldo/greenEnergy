import React from 'react'

const InfoEnergy = () => {
  return (
    <section className="flex w-full justify-center items-center gap-6 py-16 px-6">
      <div className=" flex flex-col max-w-6xl justify-center items-center mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Energías Renovables
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            El futuro es <span className="text-green-600">renovable</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo las energías limpias están transformando el mundo y nuestro compromiso con un futuro sostenible.
          </p>
        </div>

        {/* Grid de información */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Tarjeta 1 */}
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Crecimiento exponencial</h3>
            <p className="text-gray-600">
              La capacidad solar mundial ha crecido un 22% anual en la última década, reduciendo costos en un 85%.
            </p>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Eficiencia energética</h3>
            <p className="text-gray-600">
              Los nuevos aerogeneradores producen un 30% más energía que los modelos de hace 5 años con el mismo viento.
            </p>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-green-50 rounded-xl p-6 hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Impacto ambiental</h3>
            <p className="text-gray-600">
              Cada MW de energía renovable evita la emisión de 1,500 toneladas de CO₂ anuales.
            </p>
          </div>
        </div>

        {/* CTA y gráfico */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">¿Quieres conocer nuestros proyectos?</h3>
              <p className="mb-6 text-green-100">
                Accede al análisis completo de energías renovables y su implementación global.
              </p>
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition">
                Ver análisis actualizado
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/20 p-4 rounded-lg">
                {/* Placeholder para gráfico */}
                <div className="h-48 flex items-center justify-center">
                  <p className="text-center text-green-100">Gráfico de crecimiento renovable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoEnergy