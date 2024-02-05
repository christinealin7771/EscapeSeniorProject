import React from 'react'
import Card from 'react-bootstrap/Card';

const DeveloperAbout = ({name, funFact, pic}) => {

    const cardStyle = {
        width: '20rem',
        margin: '1rem',
        // border: '0.2rem solid black',
    }


  return (
    <div>
        <Card style={cardStyle} >
            <Card.Img variant="top" src={pic}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                4th Year Computer Science Major
                {funFact}
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default DeveloperAbout