import React, {useEffect, useState} from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import axios from 'axios'

const Leaderboard = () => {
    const [users, setUsers] = useState([]);
    const [topFive, setTopFive] = useState([]);
    const [error, setErrors] = useState();

    useEffect(() => {
        axios.get(process.env.REACT_APP_GET_ALL_USER_API_URL)
        .then((response) => {
            console.log(response.data.allUsers)
            setUsers(response.data.allUsers)
            setTopFive(getTopFiveFastestTimes(response.data.allUsers))
        })
        .catch((error) => {
            console.log(error)
            console.log("Error with fetching users")
        })
    })

    const getTopFiveFastestTimes = (userData) => {
        const data = userData
        data.forEach(obj => {
            const timeComponents = obj.escapeTime.split(':').map(Number);
            obj.escapeSeconds = timeComponents[0] * 3600 + timeComponents[1] * 60 + timeComponents[2];
        });
    
        // Sort the objects based on escapeSeconds
        data.sort((a, b) => a.escapeSeconds - b.escapeSeconds);
    
        // Select the top five objects
        const topFive = data.slice(0, 5);
    
        return topFive;
    }

    // Styleing
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
            {
                topFive.map((item, index) => {

                    return (
                        <Card.Text className="font-weight-bold">
                            {index+1}. {item.username} {item.escapeTime}
                        </Card.Text>
                    )
                })
            }

        </Card.Body>
    </Card>
    </>
  )
}

export default Leaderboard