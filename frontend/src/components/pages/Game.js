import React, {useState, useCallback,  useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import axios from "axios";
import Footer from '../Footer';
import { Dropdown, Container, Form, Row, Col, } from 'react-bootstrap'

const Game = () => {

  const gameStyle = {
    paddingTop: "2rem",
    justifyContent: "center",
    paddingBottom: '1rem',
  }

  const [username, setUsername] = useState();
  const [escapeTime, setEscapeTime] = useState();

  const { addEventListener, removeEventListener, requestFullscreen, unityProvider } = useUnityContext({
    loaderUrl: "/Build/Assembly-CSharp.loader.js",
    dataUrl: "/Build/Assembly-CSharp.data.unityweb",
    frameworkUrl: "/Build/Assembly-CSharp.framework.js.unityweb",
    codeUrl: "/Build/Assembly-CSharp.wasm.unityweb",
  });

  const handleCreateUser = useCallback((username) => {
    setUsername(username)
    axios.post(process.env.REACT_APP_CREATE_USER_API_URL, {username: username})
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
    console.log(username)
  }, []);

const handleFullScreenClick =()=> {
    requestFullscreen(true);
  }

  const updateUserEscapeTime = useCallback((username, userEscapeTime) => {
    setUsername(username)
    setEscapeTime(userEscapeTime)
    console.log(username)
    console.log(userEscapeTime)
  }, []);

  useEffect(() => {
    addEventListener("StartGame", handleCreateUser);
    return () => {
      removeEventListener("StartGame", handleCreateUser);
    };
  }, [addEventListener, removeEventListener, handleCreateUser]);

  useEffect(() => {
    addEventListener("EndGame", updateUserEscapeTime);
    return () => {
      removeEventListener("EndGame", updateUserEscapeTime);
    };
  }, [addEventListener, removeEventListener, updateUserEscapeTime]);

  const [Difficulty, setDifficulty] = useState(null);

  const handleSelect = (eventKey) => {
    setDifficulty(eventKey);
  };

  return (
    <>
    <div align="center">
        <h1 style={{ paddingTop: '2.5rem', fontFamily: "'Anton', sans-serif", color:'#FFFFFF'}}>Difficulty:</h1>
        <Dropdown onSelect={handleSelect} data-bs-theme="dark">
          <Dropdown.Toggle variant="secondary">
          {Difficulty || 'Select Difficulty'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
            <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
            <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    
    <Container>
    <Row className="justify-content-center">
    <Col xs={12} sm={12} md={10} lg={8}>
    <div style={gameStyle}>
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
    </Col>

    <Col xs={12} sm={12} md={10} lg={4} style={{paddingTop:'2rem', paddingBottom:'3rem'}}>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={17} placeholder="For your escape plan..." />
        </Form.Group>
      </Form>
    </Col>
    </Row>
    </Container>
    <button style={{marginBottom: "5rem"}} onClick={handleFullScreenClick}>Enter Fullscreen</button>;
    </div>
   

    <Footer/>
    </>
  )
}

export default Game