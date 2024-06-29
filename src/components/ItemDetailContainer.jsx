import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

import data from '../data/productos.json'



export const ItemDetailContainer = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState(undefined);
    let [loading, setLoading] = useState(true)


    useEffect(() => {

        const productoReferencia = doc(db, "productos", itemId)
        getDoc(productoReferencia)
          .then(res => {
            if(res.data()) {
              setProducto({ ...res.data(),id: res.id})
            }
            setLoading(false)
          })

    }, [itemId])



    if(loading) {
      return <div> Cargando ... </div>
    } else if (producto) {
      return <ItemDetail producto={producto}/> 
    } else {
      return <div>Producto no encontrado</div>
    }

}
