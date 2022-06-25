import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';
import getTrendingGifs from '../API/getTrendingGifs';
import { GifDetail } from './GifDetail';
import '../style.css'
export const TrendingGifs = () => {
    const [trend, setTrend] = useState([]);

    //llama a los gifs mas trend
    useEffect(() => {
       getTrendingGifs().then(gifs => setTrend(gifs))

      }, [])
    return (
    <>
      <h1 className='text-center'>Trending gifs</h1>
      <p className='text-center'>Todos los dias nuevos GIFS!</p>
      <Container className='containerCardsTrending'>
      {
            trend.map((e) => {
                return(
                 
                    <ContainerCards key={e.id} className='trendingCard'>
                      <Card className = 'trendingCardChild'>
                        <Card.Img className='tamanoImagenCard' variant="top" src={e.url}/>
                        <Card.Body className='cuerpoCard' key={e.id}>
                          <Card.Title>{e.title}</Card.Title>
                          <GifDetail imagen={e.url} titulo ={e.title}/>
                        </Card.Body>
                      </Card>
                    </ContainerCards>
                  
                    
                )
            })
        }
      </Container>
       
    </>
  )
}

const ContainerCards = styled.div`
  margin: 2rem;
`