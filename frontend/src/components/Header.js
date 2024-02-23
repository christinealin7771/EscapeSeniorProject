import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import logo from './images/lockLogo.png'

const Header = () => {

  const navBarBackColor = {
    background:'linear-gradient(to right,#2B00FF, #74461A)',
  };

  const compButtonStyle = {
    color: '#ffffff',
    marginRight: '40px',
    border: 'none',
    marginTop: '10px',
    fontSize: '23px',
    fontFamily: "'Anton', sans-serif",
    marginBottom: '10px',
  };

  const navBarText = {
    color: '#ffffff',
    marginLeft: '40px',
    fontFamily: "'Anton', sans-serif",
    fontSize: '23px',
    marginTop: '10px',
    marginBottom: '10px',
  };  

  return (
  <>
    <div>
      <Navbar expand="lg" style={navBarBackColor} >
        <Navbar.Brand as={Link} to="/" style={navBarText}>
          <img
                alt=""
                src={logo}
                width="60"
                height="60"
            />{' '}
          Escape the Senior Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/" style={compButtonStyle}>Home</Nav.Link>
                <Nav.Link as={Link} to="/game" style={compButtonStyle}>Game</Nav.Link>
                <Nav.Link as={Link} to="/about" style={compButtonStyle}>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  </>
  )
}

export default Header