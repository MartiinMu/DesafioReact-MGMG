import React, { Fragment, useContext } from 'react'
import { CartCheck } from 'react-bootstrap-icons'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const Carrito = (props) => {

  const { carrito, calcularCantidad, obtenerTotal, vaciarProductosDeCarrito, borrarProducto, precioTotal } = useContext(CartContext)


  const ContadorDeProductos = carrito.reduce((acc, product) => {


    if (acc[product.id]) {
      acc[product.id].unidades++;

    } else {
      acc[product.id] = { ...product, unidades: 1 };
    }
    return acc;
  }, {});





  const Cart = Object.values(ContadorDeProductos);






  return (
    <div className='divCartBody'>
      <div className="cart-container">
        <h1 className='h1Cart'>Carrito de Compras</h1>
      </div>
      {Cart.map((prod) => {

        return (




          <Fragment key={prod.id}>






            {/* 
            <h1>{prod.nombre} <br/>
               unidades {prod.unidades}  x $ {precioTotal(prod.unidades,prod.precio)} </h1>
            <button onClick={() => {borrarProducto(prod)}}>❌</button>
         
          */}
            <div className="cart-container">

              <div className="cart-item">
                <div className="item-details">
                  <p className="item-name">{prod.nombre} </p>
                  <p className="item-quantity">unidades {prod.unidades}  x $ {precioTotal(prod.unidades, prod.precio)}</p>
                </div>
                <button className="remove-item" onClick={() => { borrarProducto(prod) }}>❌</button>
              </div>


            </div>

          </Fragment>

        )
      })}


       {
        carrito.length > 0 ?
          <>
            <div className="total">
              <p>Total: ${obtenerTotal()}</p>
            </div>
            <button className="empty-cart" onClick={vaciarProductosDeCarrito}>Vaciar Carrito</button>
            <Link className="checkout-link" to="/finalizar-compra">Finalizar compra</Link>
          </> :
          <h2>Carrito vacío</h2>
      }
    </div>
  )
}