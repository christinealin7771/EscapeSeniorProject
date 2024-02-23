import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {

  const gameStyle = {
    paddingTop: "0.5rem",
    justifyContent: "center",
    display: "flex",
    paddingBottom: '5rem',
    // border: '0.2rem solid black',
  }

  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/escapeRoomUnity.loader.js",
    dataUrl: "/Build/escapeRoomUnity.data.unityweb",
    frameworkUrl: "/Build/escapeRoomUnity.framework.js.unityweb",
    codeUrl: "/Build/escapeRoomUnity.wasm.unityweb",
  });

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