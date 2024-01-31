import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import {Navbar, Nav, Button, Container} from 'react-bootstrap'

import Home from './pages/Home'
import Game from './pages/Game'
import About from './pages/About'

const Header = () => {

  const navBarBackColor = {
    backgroundColor: '#0052CC',
  };

  const compButtonStyle = {
    backgroundColor: '#FF6800',
    marginRight: '10px',
  };

  const navBarTextColor = {
    color: '#ffffff',
    marginLeft: '10px',
  };

  return (
  <>
    <Router> 

    {/* Navigation bar */}
    <div>
      <Navbar expand="lg" style={navBarBackColor}>
        <Navbar.Brand as={Link} to="/home" style={navBarTextColor}>Escape the Senior Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto">
                <Button as={Link} to="/home" style={compButtonStyle}>Home</Button>
                <Button as={Link} to="/game" style={compButtonStyle}>Game</Button>
                <Button as={Link} to="/about" style={compButtonStyle}>About</Button>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>

    {/* Routes to components */}
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/game" element={<Game/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  
    </Router>
  </>
  )
}

export default Header