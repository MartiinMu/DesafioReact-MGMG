import  { createContext, useState } from 'react'



export const CartContext = createContext();





export const CartProvider = ({children}) => {


  
    const [carrito, setCarrito] = useState([])



    const addToCart = (producto) => {
        setCarrito([...carrito,producto])
    }
  
    const precioTotal = (unidad,precio) => {
        return (unidad * precio).toFixed(2)
    }
  


    const calcularCantidad = () => {
        return carrito.length
    }


    const obtenerTotal = () => {
        return carrito.reduce((acc,prod) => acc + prod.precio,0).toFixed(2)
    }


    const vaciarProductosDeCarrito = () => {
        setCarrito([])
    }


    const borrarProducto = (producto) => {
        setCarrito(carrito.filter(prod => prod.id != producto.id))
    }



   return (
    
  <CartContext.Provider value ={{carrito, calcularCantidad, obtenerTotal,  vaciarProductosDeCarrito, borrarProducto, addToCart, precioTotal}}>
    {children}
  </CartContext.Provider>



  )
}
