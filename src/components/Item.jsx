import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { ItemContador } from './ItemContador'

export const Item = ({gifs}) => {
  console.log(gifs)
    
  return (
            <>
              {
                gifs.map((e) => {
                  return(
                  <ContainerCards>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={e.url}/>
                      <Card.Body key={e.id}>
                        <Card.Title>{e.title}</Card.Title>
                          <ItemContador stock ={10} initial = {1}/>
                      </Card.Body>
                    </Card>
                  </ContainerCards>
                    
        
                  )
                })
              }
            </>
    
  )
}

const ContainerCards = styled.div`
  margin: 30px;
`