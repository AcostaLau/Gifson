import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { GifDetail } from './GifDetail'
import { Spiner } from './Spiner'
import '../style.css'
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
                      <Card style={{ width: '25rem', height: '30rem'}}>
                        {
                          mostrar ? <Card.Img className='tamanoImagenCard' variant="top" src={e.url}/> : <Spiner/>
                        }
                        <Card.Body className='cuerpoCard' key={e.id}>
                          <Card.Title>{e.title}</Card.Title>
                          <GifDetail imagen={e.url} titulo ={e.title}/>
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
  margin: 5rem;
`