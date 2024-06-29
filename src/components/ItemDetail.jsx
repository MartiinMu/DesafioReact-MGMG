import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({producto}) => {

  const {addToCart} = useContext(CartContext)

  return (
    <div>

            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>stock: {producto.stock}</p>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>

            <br/>
            <button onClick={() => addToCart(producto)}> Agregar Producto</button>




    </div>
  )
}
