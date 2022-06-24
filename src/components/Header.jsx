import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { NavBar } from './Navbar'
import '../style.css'

export const Header = () => {
    
  return (
    <HeaderContainer id='home'>
        <NavBar/>
        <Container>
            <HeaderContainerElements>
                <ContainerTituloParrafo>
                    <H1Header>La mejor pagina para que puedas encontrar tus gifs preferidos</H1Header>
                    <ParrafoHeader>Busca tus GIFS preferidos!</ParrafoHeader>
                </ContainerTituloParrafo>
                <img src="https://i.imgur.com/KDUSxvL.gif" alt="happy boy" />
            </HeaderContainerElements>
        </Container>
    </HeaderContainer>
  )
}
const HeaderContainer = styled.div`
    background-color:#2a2f33;
`
const HeaderContainerElements = styled.div`
    display: flex;
    padding: 2rem;
`
const ContainerTituloParrafo = styled.div`
    width: 40rem;
`
const H1Header = styled.h1`
    color: #ffff;
    font-size: 3rem
`
const ParrafoHeader = styled.p`
    color: #ffff;
    font-size: 1.5rem;
`