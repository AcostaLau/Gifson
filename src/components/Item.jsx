import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ItemContador } from './ItemContador'
import { Spiner } from './Spiner'
export const Item = ({gifs}) => {
  const [mostrar, setMostrar] = useState(false)
  // useEffect realizado para darle tiempo a la api para que me traiga las imagenes
  useEffect(() => {
    setTimeout(() => {
      setMostrar(true)
    }, 3000);
  }, [])

  return (
            <>
              {
                gifs.map((e) => {
                  return(
                  <ContainerCards>
                      <Card style={{ width: '18rem' }}>
                        {
                          mostrar ? <Card.Img variant="top" src={e.url}/> : <Spiner/>
                        }
                      <Card.Body key={e.id}>
                        <Card.Title>{e.title}</Card.Title>
                          <Link to={`/detalle/${e.id}`}><Button>Ver mas</Button></Link>
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