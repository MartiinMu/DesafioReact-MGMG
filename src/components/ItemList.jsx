import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos}) => {
  return (
    <div className="producto-grilla">
      {
      // productos.length > 0 ? productos[0].nombre : "No hay productos" // --> Al principio va a dar el mensaje y despues va a mostrar el producto. Pero como se hace todo demasiado rapido no se va a ver el mensaje pero con un setTimeOut de mas de 2 segundos si se aprecia
      
      productos.length > 0 ? 
      productos.map(producto => {
        return        <Item key={producto.id} producto={producto}/>; {/* Se le agrega la key para que cuando se quiera actualizar un item en especial solo se actualice ese y no tenga que cargar el componente entero */}
        
        
      })
      : " No hay Productos"
      
      
      }
    </div>
    
  )
}
