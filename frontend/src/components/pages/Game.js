import React, {useState, useCallback,  useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import axios from "axios";

const Game = () => {

  const gameStyle = {
    paddingTop: "0.5rem",
    justifyContent: "center",
    display: "flex",
    paddingBottom: '5rem',
    // border: '0.2rem solid black',
  }

  const [username, setUsername] = useState();
  const [escapeTime, setEscapeTime] = useState();

  const { addEventListener, removeEventListener, unityProvider } = useUnityContext({
    loaderUrl: "/Build/escapeRoomUnity.loader.js",
    dataUrl: "/Build/escapeRoomUnity.data.unityweb",
    frameworkUrl: "/Build/escapeRoomUnity.framework.js.unityweb",
    codeUrl: "/Build/escapeRoomUnity.wasm.unityweb",
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
       
    </div>
  )
}

export default Game