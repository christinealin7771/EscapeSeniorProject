import React, {useState, useCallback,  useEffect} from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import axios from "axios";

const Game = () => {

  const [username, setUsername] = useState();
  const [escapeTime, setEscapeTime] = useState();


  const gameStyle = {
    paddingTop: "0.5rem",
    justifyContent: "center",
    display: "flex",
    paddingBottom: '5rem',
    // border: '0.2rem solid black',
  }

  const { addEventListener, removeEventListener, unityProvider } = useUnityContext({
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

  const updateUserEscapeTime = useCallback((username, userEscapeTime) => {
    console.log(username)
    console.log(userEscapeTime)
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



  return (
    <div align="center">
        <h1 style={{ paddingTop: '2.5rem'}}>Difficulty: Easy</h1>
        <div style={gameStyle}>
          {/* Make the compression format Gzip before building and check decompression fallback */}
          <Unity unityProvider={unityProvider} style={{ width: '75%', height: '75%' }} />
        </div>
       
    </div>
  )
}

export default Game