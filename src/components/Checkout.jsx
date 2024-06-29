import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from "react-hook-form"
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import {db} from "../firebase/config"

export const Checkout = () => {


  const { carrito, obtenerTotal, vaciarProductosDeCarrito} = useContext(CartContext);
  const {register, handleSubmit} = useForm();
  let [messageId, setMessageId] = useState("");


  const comprar = (data) => {
    const orden = {
      cliente: data,
      productos: carrito,
      total: obtenerTotal(),
      fecha: Timestamp.now()
    }

    const ordenReferencia = collection(db, "orders");

    addDoc(ordenReferencia, orden)
      .then((doc) => {
        setMessageId(doc.id)
        vaciarProductosDeCarrito();
      })

  }



  if(messageId){
    return (
      <div className="success-message">
      <h1>Su compra se realizó exitosamente</h1>
      <p>Puede utilizar el siguiente código <span className="message-id">{messageId}</span> para el seguimiento de su pedido</p>
    </div>
    )
  }






  return (
    <div>

    <form onSubmit={handleSubmit(comprar)}>
      <input type='text' placeholder='Ingrese su nombre' {...register("nombre:")} />
      <input type='email' placeholder='Ingrese su email' {...register("email:")} />
      <input type='number' placeholder='Ingrese su numero de telefono' {...register("nro. Tel.:")} />
      <button type='submit'> Comprar </button>
      


    </form>


    </div>
  )
}
