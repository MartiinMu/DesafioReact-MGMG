import React, { useEffect, useState } from 'react'

import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom';


import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from "../firebase/config"

export const ItemListContainer = () => {

let {categoryId} = useParams();
let [productos,setProductos] = useState([])
let [titulo, setTitulo] = useState("Productos");


useEffect(() => {



const productosReferencia = collection(db, "productos")
const queryProductos = categoryId ? query(productosReferencia, where("categoria.id", "==", categoryId)) : productosReferencia

const categoriasReferencia = collection(db, "categorias")
let categoriaQuery = categoryId && query(categoriasReferencia, where("id", "==", categoryId))

getDocs(queryProductos)
  .then((res) => {
    setProductos(
      res.docs.map((doc) => {
        return {...doc.data(), id: doc.id}
      })
    )
  })

  if (categoriaQuery) {
    getDocs(categoriaQuery)
      .then((res) => {
        setTitulo(res.docs[0].data().nombre)
      })
  } else {
    setTitulo("Productos")
  }

  },[categoryId])




  return (
    <div className='item-list-container'>
      <h1>{titulo}</h1>
      <ItemList productos={productos}/>
    </div>
  )
}

