import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Header } from "./components/header/Header"
import { ItemListContainer } from "./components/ItemListContainer"
import { Footer } from "./components/Footer";


function App() {

 
  const numerito = 1;

  

  return (
    < BrowserRouter>
    
      <Header numerito={numerito}/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        
        

      </Routes>
    <Footer/>
    </ BrowserRouter>
  )
}

export default App