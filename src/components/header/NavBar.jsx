import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import categories from '../../data/categorias.json'


import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const NavBar = () => {


  let [categories, setCategories] = useState([])

  useEffect(() => {

    const categoriasReferencia = collection(db, "categorias")
    getDocs(categoriasReferencia)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data() }
        }))
      })
  }, [])



  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" className='nav-link'>Inicio</NavLink>

        </li>

        {categories.map((category) => {
          return (

            <li className="nav-item" key={category.id}>
              <NavLink to={`/category/${category.id}`} activeClassName="active" className='nav-link'>{category.nombre}</NavLink>
            </li>

          )
        })}



      </ul>
    </nav>
  )
}
