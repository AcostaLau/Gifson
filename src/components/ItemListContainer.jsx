import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import { ItemList } from './ItemList'
import '../style.css'
import styled from 'styled-components'

export const ItemListContainer = () => {

  const [buscarGif, setBuscarGif] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleChange = e =>{
    setBuscarGif(e.target.value)
  }
  return (
    <Container>
        <FormContainer
        onSubmit={handleSubmit}
        >
        <h1 className='text-center'>Busca el gif que quieras: </h1>
        <input 
            type="text" 
            id="buscarGif" 
            value={buscarGif}
            //capturamos el valor del nuevo gif que busca el usuario
            onChange={handleChange}
            className='text-center'
            
        />
        </FormContainer>
        <ItemList className='itemList' buscarGif = {buscarGif}/>
    </Container>
  )
}

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`