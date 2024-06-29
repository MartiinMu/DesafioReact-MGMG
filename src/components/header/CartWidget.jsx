import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartCheck } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    const { calcularCantidad } = useContext(CartContext)


  return (
    <Link className='carrito' to="/carrito">
        <CartCheck color="white" /><span className='white'>{calcularCantidad()}</span>
    </Link>
  )
}
