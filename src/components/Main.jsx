import React from 'react'
import { Button, Container } from 'react-bootstrap'
import styled from 'styled-components'
import '../style.css'
import { Link } from 'react-router-dom'

export const Main = () => {
    
  return (
    <HeaderContainer id='home'>
        <Container>
            <HeaderContainerElements>
                <ContainerTituloParrafo>
                    <H1Header>La mejor App para que puedas encontrar tus gifs preferidos</H1Header>
                    <ParrafoHeader>Hace click para iniciar!</ParrafoHeader>
                    <Link to='/buscar-gifs'><button className='botonEmpezar'>Empezar</button></Link>
                </ContainerTituloParrafo>
                <ImgMain className='imgMain' src="https://i.imgur.com/KDUSxvL.gif" alt="happy boy" />
            </HeaderContainerElements>
            
        </Container>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
    background-color:#2a2f33;
    height: 92.9vh;
`
const HeaderContainerElements = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    height: 80vh;
`
const ContainerTituloParrafo = styled.div`
    width: 40rem;
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