import React from 'react';
import DeveloperAbout from '../misc/DeveloperAbout';
import Red from "./../images/Red.png";
import Escape from "./../images/escape.png";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer';

const About = () => {
  
  return (
    <>
    <Container>
      <div align="center">
        <h1 style={{ paddingTop: '2.5rem', paddingBottom: '0.5rem', color: '#FFFFFF'}}> About the Developers </h1>
        <p style={{ maxWidth: '40rem', fontSize: "1.3rem", color: '#FFFFFF'}}>
          This game and website were made for UF's Senior Project class in the Department of Computer Science. Here are the Developers!
        </p>
        <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={2}>
            <DeveloperAbout name={"Christine Lin"} funFact={"Chicken Nugget"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <DeveloperAbout name={"Joseph Fleming"} funFact={"McChicken"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <DeveloperAbout name={"Kelly Chen"} funFact={"Big Mac"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <DeveloperAbout name={"Moojin Ahn"} funFact={"Potato"} pic={Red}/>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <DeveloperAbout name={"Radoslav Savenkov"} funFact={"Sandwich"} pic={Red}/>
          </Col>
        </Row>

        <hr style={{ width: '70%', height: '10%',marginTop: '4rem', color: '#FFFFFF'}}></hr>

        <h1 style={{ paddingTop: '2rem', paddingBottom: '0.5rem', color: '#FFFFFF'}}> About the Game</h1>

        <Row className="justify-content-center">
          <Col xs={12} md={6} style={{ margin: '20px' }}>
            <img src={Escape} style={{ width: '100%' }}/>
          </Col>
          <Col xs={12} md={8} style={{ margin: '20px' }}>
            <p style={{ fontSize: "30px", textAlign: 'center', color: '#FFFFFF'}}>
              This game is powered by Unity and linked with React to this website. 
              Aspects of the website may be more than what they seem.
            </p>
            <p style={{ fontSize: "30px", textAlign: 'center', color:'#F8A528'}}>
              Can YOU make it to the end in the fastest time possible?
            </p>
            <p> {""} </p>
          </Col>
        </Row>
      </div>
    </Container>

    <Footer/>
    </>
  );
};

export default About;
