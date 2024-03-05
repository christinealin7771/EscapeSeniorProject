import React from 'react';
import { Card, Button, Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import CarouselPic from '../misc/Carousel';
import Leaderboard from '../misc/Leaderboard';
import placeholder from '../images/PlaceHolder.png';
import Footer from '../Footer';
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
      <div className="top-section landing">
        <div className="center">
          <p1 className="landingStatement">CAN YOU MAKE IT OUT WITHOUT GETTING </p1>
        </div>
        <div>
          <p1 className="chomped">CHOMPED?</p1>
        </div>
        <Button as={Link} to="/game" style={compButtonStyle}>Play!</Button>
      </div>

      <div className="bottom-section leaderboard">
        <Container>
          <Row className="justify-content-center"> 
            <Col xs={12} md={6} style={{ marginTop: '50px'}} > 
              <div className="text-center"> 
                <Leaderboard />
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} style={{ marginTop: '50px', minHeight: '300px' }}> 
              <img style={{ width: '100%'}} src={placeholder} alt="Placeholder Image" />
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Home;
