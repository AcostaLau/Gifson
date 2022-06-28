import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'


export const NavBar = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >GIFSON</Navbar.Brand>
          <Nav className='navbar-display-flex-items'>
            <Link className='navBar-hijos' to='/' >Home</Link>
            <Link className='navBar-hijos' to='/buscar-gifs'>GIFS</Link>
            <Link className='navBar-hijos' to='/trending'>Trendings</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    
  )
}