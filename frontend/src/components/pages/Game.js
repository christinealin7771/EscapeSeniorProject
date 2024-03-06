import React, {useState, useCallback,  useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import axios from "axios";

const Game = () => {

  const gameStyle = {
    paddingTop: "0.5rem",
    justifyContent: "center",
    display: "flex",
    paddingBottom: '2rem',
    // border: '0.2rem solid black',
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



  return (
    <div align="center">
        <h1 style={{ paddingTop: '2.5rem', fontFamily: "'Anton', sans-serif", color:'#FFFFFF'}}>Difficulty: Easy</h1>
        <div style={gameStyle}>
          <Unity unityProvider={unityProvider} style={{ width: '75%', height: '75%' }} />
          
        </div>
        <button style={{marginBottom: "5rem"}} onClick={handleFullScreenClick}>Enter Fullscreen</button>;
       
    </div>
  )
}

export default Game