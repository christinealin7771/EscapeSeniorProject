import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'

const Leaderboard = () => {
  return (
    <>
    <Card className="text-center" style={{ width: '35rem', backgroundColor: '#FCC490', border: 'none'}}>
        <Card.Body>
            <Card.Title className="font-weight-bold" style={{padding: '20px'}}>
                Leaderboard
            </Card.Title>
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