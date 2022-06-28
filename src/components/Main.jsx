import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import '../style.css'
import { Link } from 'react-router-dom'

export const Main = () => {
    
  return (
    <HeaderContainer id='home'>
        <Container>
            <HeaderContainerElements>
                <Row>
                    <Col sm={12} md={8} xl={8}>
                        <ContainerTituloParrafo className=''>
                            <H1Header>La mejor App para que puedas encontrar tus gifs preferidos</H1Header>
                            <ParrafoHeader>Hace click para iniciar!</ParrafoHeader>
                            <Link to='/buscar-gifs'><button className='botonEmpezar'>Empezar</button></Link>
                        </ContainerTituloParrafo>                    
                    </Col>
                    <Col sm={12} md={4} xl={4}>
                        <ImgMain className='imgMain' src="https://i.imgur.com/KDUSxvL.gif" alt="happy boy" />
                    </Col>
                    
                    
                </Row>
                
            </HeaderContainerElements>
            
        </Container>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
    background-color:#2a2f33;
    height: 100vh;
`
const HeaderContainerElements = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    height: 80vh;
`
const ContainerTituloParrafo = styled.div`
    padding: 2rem;
`
const H1Header = styled.h1`
    color: #ffff;
    font-size: 3rem
`
const ParrafoHeader = styled.p`
    color: #ffff;
    font-size: 1.5rem;
`
const ImgMain = styled.img`
    height: 15rem;
    box-shadow: 8px 9px 49px 12px rgba(217,176,255,1);
    -webkit-box-shadow: 8px 9px 49px 12px rgba(217,176,255,1);
    -moz-box-shadow: 8px 9px 49px 12px rgba(217,176,255,1);
`