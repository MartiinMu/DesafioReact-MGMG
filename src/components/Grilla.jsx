import React from 'react'

export const Grilla = () => {

    const productos = [
        "Ejemplo de Grilla dinamica", "Mesa", "Ventana", "gato" ,"colibri"
]
        
let cantidadColumnas = productos.length > 4 ? 4 : productos.length;


  return (
    <div className='grid' style={{gridTemplateColumns: `repeat(${cantidadColumnas},1fr)`}}>
        
        {productos.map((producto) => <p>{producto}</p>)}

    </div>
  )
}
