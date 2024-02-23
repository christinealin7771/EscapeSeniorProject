import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'

const Leaderboard = () => {
    const cardColor = {
        background:'#3043AB',
        width: '410px', 
        border: '8px solid #D5D6D6',
        borderRadius: '50px',
        fontSize: '26px',
        fontFamily: "'Anton', sans-serif",
        color: '#D5D6D6',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const box = {
        width: '300px',
        height: '80px',
        background:' #D5D6D6',
        border: '8px solid #D5D6D6',
        borderRadius: '50px',
        fontSize: '40px',
        fontFamily: "'Anton', sans-serif",
        fontStyle: 'italic',
        color: '#333F84',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: '-30px',
        textAlign: 'center',
    }

  return (
    <>

    <Card style={cardColor}>

        <div style={box}>
        <p>LEADERBOARD</p>
        </div>

        <Card.Body>
            <Card.Text className="font-weight-bold">
                1. Bobby   00:00:00
            </Card.Text>
            <Card.Text className="font-weight-bold">
                2. Bobby   00:00:00
            </Card.Text>
            <Card.Text className="font-weight-bold">
                3. Bobby   00:00:00
            </Card.Text>
            <Card.Text className="font-weight-bold">
                4. Bobby   00:00:00
            </Card.Text>
            <Card.Text className="font-weight-bold">
                5. Bobby   00:00:00
            </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}

export default Leaderboard