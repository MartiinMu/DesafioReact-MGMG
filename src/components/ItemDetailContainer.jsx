import { useParams } from 'react-router-dom'
import data from '../data/productos.json'
import { useEffect, useState } from 'react';




export const ItemDetailContainer = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState();


    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)))
    }, [itemId])



  return (
    <div>
    {producto && ( 
        <>
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>${producto.precio}</p>
            <p>{producto.descripcion}</p>
        </>
    )}
</div>
  )
}
