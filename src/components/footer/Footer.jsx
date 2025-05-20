import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0a0f0f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Sección superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1 - Logo y eslogan */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Green Energy</h2>
            <p className="text-green-200">Energías...</p>
            <p className="text-green-100 italic">El futuro es renovable</p>
          </div>

          {/* Columna 2 - Enlaces */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-2">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300 transition">Home</a></li>
              <li><a href="#" className="hover:text-green-300 transition">Energías renovables</a></li>
              <li><a href="#" className="hover:text-green-300 transition">Nuestro Propósito</a></li>
              <li><a href="#" className="hover:text-green-300 transition">Proyectos</a></li>
            </ul>
          </div>

          {/* Columna 3 - Propósito */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-2">Nuestro Propósito</h3>
            <p className="text-green-100">
              Descubre los datos que están transformando el mundo
            </p>
            <button className="mt-4 bg-white text-green-800 px-4 py-2 rounded hover:bg-green-100 transition">
              Ver análisis actualizado
            </button>
          </div>

          {/* Columna 4 - Newsletter (añadido como valor extra) */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg mb-2">Suscríbete</h3>
            <p className="text-green-100">Recibe las últimas novedades</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="px-3 py-2 text-gray-800 flex-grow rounded-l focus:outline-none"
              />
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-r transition">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Línea divisora y copyright */}
        <div className="border-t border-green-700 pt-6 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} Green Energy Col. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer