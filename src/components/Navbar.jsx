import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style.css'
import { CartWidget } from './CartWidget'


export const NavBar = () => {
  return (
    <Container>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >GIFSON</Navbar.Brand>
          <Nav className='navbar-display-flex-items'>
            <Link className='navBar-hijos' to='/'>Home</Link>
            <Link className='navBar-hijos' to='/cart'><CartWidget/></Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
    
  )
}


