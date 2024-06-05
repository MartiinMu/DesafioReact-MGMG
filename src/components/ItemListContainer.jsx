import React, { useEffect, useState } from 'react'
import data from '../data/productos.json'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

// Para que se recargue el DOM (renderice) se tiene que crear un estado
// let productos = [];
let [productos,setProductos] = useState([])

/*
Al principio productos va a tener un estado de un array vacio, ya que la funcion es async despues de un rato se va a cargar con todos los productos de json

*/


  const pedirProducto = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        
        resolve(data)   
      },1000)
      

    })
  }


  /*
  
  Si no se usa useEffect es ciclo no se cortaria, ya que:

  1ro se carga el codigo sync despues el async se cambia de estado, al cambiar de estado se vuelve a renderizar y
  se carga lo sync , despues lo async y se cambia de estado, y asi siempre. 
  Con useEffect solo lo va a hacer una vez, osea, cambia de estado una vez y no se vuelve a ejecutar el codigo


  */



  useEffect(()=>{ // ---> Usamos esto porque de lo contrario se seguiria renderizando infinitamente al cambiar siempre de estado.
    
      pedirProducto()                        
        .then((res) => {
          
          // para que tome el estado y se rendece hay que hacerlo con useState por eso usamos la funcion de useState
          // productos = res;
          setProductos(res)
          console.log(productos)
        })        

  },[])




  return (
    <div className='item-list-container'>
      <h1>Productos</h1>
      <ItemList productos={productos}/> {/* --> Con la propiedad productos pasamos el listado de productos utilizando este props */}
    </div>
  )
}

