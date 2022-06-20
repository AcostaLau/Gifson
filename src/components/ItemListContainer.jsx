import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { ItemList } from './ItemList'
import '../style.css'
// import {BuscadorGifs} from './BuscadorGifs'
export const ItemListContainer = () => {

  const [buscarGif, setBuscarGif] = useState('star wars')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = e =>{
    setBuscarGif(e.target.value)
  }
  return (
    <Container>
        <h1 className='t-center'>Gifs mas populares</h1>

        <form 
        onSubmit={handleSubmit}
        >
        <label>Busca el gif que quieras: </label>
        <input 
            type="text" 
            id="buscarGif" 
            value={buscarGif}
            //capturamos el valor del nuevo gif que busca el usuario
            onChange={handleChange}
            
        />
        </form>
    
        {/* <BuscadorGifs/> */}
        <ItemList className='itemList' buscarGif = {buscarGif}/>
    </Container>
  )
}
