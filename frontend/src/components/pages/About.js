import React from 'react';
import DeveloperAbout from '../misc/DeveloperAbout';
import Red from "./../images/Red.png";
import Escape from "./../images/escape.png";
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  
  return (
    <Container>
      <div align="center">
        <h1 style={{ paddingTop: '2.5rem', paddingBottom: '0.5rem', fontWeight: 'bold' }}> About the Developers </h1>
        <p style={{ maxWidth: '40rem', fontSize: "1.3rem"}}>
          This game and website were made for UF's Senior Project class in the Department of Computer Science. Here are the Developers!
        </p>
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={4}>
            <DeveloperAbout name={"Christine Lin"} funFact={"Chicken Nugget"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <DeveloperAbout name={"Joseph Fleming"} funFact={"McChicken"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <DeveloperAbout name={"Kelly Chen"} funFact={"Big Mac"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <DeveloperAbout name={"Moojin Ahn"} funFact={"Potato"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
            <DeveloperAbout name={"Radoslav Savenkov"} funFact={"Sandwich"} pic={Red}/>
          </Col>
        </Row>

        <hr className="text-dark bg-dark" style={{width:'40%', marginTop: '4rem' }}/>

        <h1 style={{ paddingTop: '3rem', paddingBottom: '0.5rem', fontWeight: 'bold' }}> About the Game</h1>

        <Row className="align-items-center" style={{paddingBottom: '10rem'}}>
          <Col xs={12} md={6}>
            <img src={Escape} alt="Game Screenshot" className="img-fluid" style={{ maxWidth: '100%' }}/>
          </Col>
          <Col xs={12} md={6}>
            <p style={{ fontSize: "1.5rem", textAlign: 'left'}}>
              This game is powered by Unity and linked with React to this website. 
              Aspects of the website may be more than what they seem.
              Can you make it to the end in the fastest time possible?
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
