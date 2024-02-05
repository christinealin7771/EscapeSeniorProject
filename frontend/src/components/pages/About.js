import React from 'react'
import DeveloperAbout from '../misc/DeveloperAbout'
import Red from "./../images/Red.png"
import Escape from "./../images/escape.png"

const About = () => {
  
  const cardStyle = {
    justifyContent: "center",
    display: "flex",
  };

  const containerStyle = {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto auto auto",
    columnGap: "5px",
    paddingTop: '2rem',
    paddingBottom: '10rem'

  }

  return (

    <div align = "center">
      <h1 style={{ paddingTop: '2.5rem', paddingBottom: '0.5rem', fontWeight: 'bold' }}> About the Developers </h1>
      <p style={{ width: '40rem', fontSize: "1.3rem"}}>
        This game and website were made for UF's Senior Project class in the Department of Computer Science. Here are the Developers!
      </p>
      <div style={cardStyle} >
        <DeveloperAbout name = {"Christine Lin"} funFact = {"Chicken Nugget"} pic = {Red}/>
        <DeveloperAbout name = {"Joseph Fleming"} funFact = {"McChicken"} pic = {Red}/>
        <DeveloperAbout name = {"Kelly Chen"} funFact = {"Big Mac"} pic = {Red}/>
        <DeveloperAbout name = {"Moojin Ahn"} funFact = {"Potato"} pic = {Red}/>
        <DeveloperAbout name = {"Radoslav Savenkov"} funFact = {"Sanwhich"} pic = {Red}/>
      </div>

      <hr class="text-dark bg-dark" style={{width:'40%', marginTop: '4rem' }}></hr>

      <h1 style={{ paddingTop: '3rem', paddingBottom: '0.5rem', fontWeight: 'bold' }}> About the Game</h1>

      <div style={containerStyle}>
        <div>
          <img src={Escape} style={{width: '50rem'}}/>
        </div>
        <div>
          <p style={{ width: '50rem', fontSize: "2rem", textAlign: 'left'}}>
            This game is powered by Unity and linked with React to this website. 
            Aspects of the website may be more then what they seems.
            Can you make it to the end in the fastest time possible?
          </p>
        </div>
      </div>


    </div>
  )
}

export default About