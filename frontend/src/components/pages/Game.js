import React, {useState, useCallback,  useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import axios from "axios";
import Footer from '../Footer';
import { Dropdown, Container, Form, Row, Col, Tab, Tabs, Button } from 'react-bootstrap'
import TextBox from '../misc/textBox';
import Calculator from '../misc/Calculator';
import './Game.css'
import Converter from '../misc/Converter';
import ModalInfo from '../misc/Information';
import { Hourglass } from 'react-loader-spinner'

const Game = () => {

  const gameStyle = {
    paddingTop: "2rem",
    paddingBottom: '5rem',
  };
  
  const [username, setUsername] = useState();
  const [escapeTime, setEscapeTime] = useState();

  const { addEventListener, removeEventListener, requestFullscreen, unityProvider } = useUnityContext({
    loaderUrl: "/Build/Assembly-CSharp.loader.js",
    dataUrl: "/Build/Assembly-CSharp.data.unityweb",
    frameworkUrl: "/Build/Assembly-CSharp.framework.js.unityweb",
    codeUrl: "/Build/Assembly-CSharp.wasm.unityweb",
    streamingAssetsUrl: "streamingassets",
  });

  const handleFullScreenClick =()=> {
    requestFullscreen(true);
  }

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

  const updateUserEscapeTime = useCallback((username, userEscapeTime) => {
    setUsername(username)
    setEscapeTime(userEscapeTime)
    console.log(username)
    console.log(userEscapeTime)
    axios.put(process.env.REACT_APP_UPDATE_ESCAPE_TIME, {username: username, escapeTime: userEscapeTime})
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })

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

  const [key, setKey] = useState('Notepad');

  const handleSelect = (eventKey) => {
    setDifficulty(eventKey);
  };

  return (
    <>
    <div align="center">
        <h1 style={{ paddingTop: '2.5rem', fontFamily: "'Anton', sans-serif", color:'#000000'}}>Escape if you can!</h1>
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} sm={12} md={10} lg={9}>
                <div style={{ position: 'absolute', top: '60%', left: '30%', zIndex: -1 }}>
                  <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={["rgb(48, 86, 132)", '#72a1ed']}
                  />
                   <h2>Loading Game...</h2>
                  </div>

                  <div style={gameStyle}>
                      <Unity unityProvider={unityProvider} style={{width: '100%', height: '100%', zIndex: 1}}  />
                  </div>

                <Button onClick={handleFullScreenClick} style={{backgroundColor:"rgb(48, 86, 132)", border:'none', marginTop:'-120px'}}>Enter Fullscreen</Button>

                </Col>
                
                <Col xs={8} sm={8} md={8} lg={3} style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
                <ModalInfo/>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 custom-tabs"
                    >
                        <Tab eventKey="Notepad" title="Notepad">
                            <TextBox />
                        </Tab>
                        <Tab eventKey="Calculator" title="Calculator">
                            <Calculator />
                        </Tab>
                        <Tab eventKey="Converter" title="Converter">
                            <Converter />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>

      {/* <button style={{marginBottom: "5rem"}} onClick={handleFullScreenClick}>Enter Fullscreen</button> */}
    </div>

    <Footer/>
    </>
  )
}

export default Game