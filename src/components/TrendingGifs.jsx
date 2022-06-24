import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import getTrendingGifs from '../API/getTrendingGifs';

export const TrendingGifs = () => {
    const [trend, setTrend] = useState([]);

    //llama a los gifs mas trend
    useEffect(() => {
       getTrendingGifs().then(gifs => setTrend(gifs))

      }, [])
    return (
    <div>
        {
            trend.map((e) => {
                return(
                    <ContainerCards>
                      <Card style={{ width: '25rem', height: '30rem'}}>
                        <Card.Img className='tamanoImagenCard' variant="top" src={e.url}/>
                        <Card.Body className='cuerpoCard' key={e.id}>
                          <Card.Title>{e.title}</Card.Title>
                        </Card.Body>
                      </Card>
                  </ContainerCards>
                )
            })
        }
    </div>
  )
}

const ContainerCards = styled.div`
  margin: 5rem;
`