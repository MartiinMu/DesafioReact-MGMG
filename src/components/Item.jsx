import React from 'react'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
          <br></br>
          <img src={producto.imagen}/>
          <h2>{producto.nombre}</h2>
          <p>${producto.precio}</p>
          <p>{producto.descripcion}</p>
          <br></br>
        </div>
        
  )
}
