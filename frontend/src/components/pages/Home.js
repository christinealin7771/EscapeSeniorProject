import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import CarouselPic from '../misc/Carousel'
import Leaderboard from '../misc/Leaderboard'
import placeholder from '../images/PlaceHolder.png'
import './Home.css';


const Home = () => {

  const compButtonStyle = {
    backgroundColor: '#F8A528',
    border: 'none',
    marginTop: '30px',
    fontFamily: "'Anton', sans-serif",
    width: '150px',
    fontSize: '24px',
  };

  return (
  <>
    
  <div class="top-section landing">
      <div class="center">
        <p1 class="landingStatement">CAN YOU MAKE IT OUT WITHOUT GETTING </p1>
      </div>
      <div>
      <p1 class="chomped">CHOMPED?</p1>
      </div>
      <Button as={Link} to="/game" style={compButtonStyle}>Play!</Button>
  </div>

  <div class="bottom-section leaderboard d-flex justify-content-center">
      <Row> 
      <Col style={{paddingRight: '100px'}}>
        <Leaderboard/>
      </Col>

      <Col>
        <img height = '400px' width = '500px' src={placeholder}></img>
      </Col>
    </Row>
  </div>
  </>

  )
}

export default Home