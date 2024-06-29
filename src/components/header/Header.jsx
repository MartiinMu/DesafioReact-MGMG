import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from '../Carrito'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const Header = (props) => {

  return (
    <header className='header'> 
        <Link to="/" className='logo'><h1>Mi tienda</h1></Link>
        <NavBar />
        <CartWidget/>
        
    </header>
  )
}
