import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'

export const Header = (props) => {

  return (
    <header className='header'> 
        <Link to="/" className='logo'><h1>Mi tienda</h1></Link>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}
