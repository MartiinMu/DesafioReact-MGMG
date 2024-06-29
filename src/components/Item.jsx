import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='producto'>
          <br></br>
          <img src={producto.imagen}/>
          <h2>{producto.nombre}</h2>
          <p>stock: {producto.stock}</p>
          <p>{producto.descripcion}</p>
          <p>${producto.precio}</p>
          <br/><br/>
          <Link className='verMas' to={`/item/${producto.id}` }>Ver mas ✔ </Link>
          <br></br>
        </div>
        
  )
}
