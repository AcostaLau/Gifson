import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { ItemContador } from './ItemContador'

export const ItemDetailContainer = () => {
  const {idDetail} = useParams()
  return (
    <Container>
        <h1>{idDetail}</h1>
        <ItemContador stock ={10} initial = {1}/>
    </Container>
  )
}
