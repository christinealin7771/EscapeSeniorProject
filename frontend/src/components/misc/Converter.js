import React, { useState } from 'react';
import "./Calculator.css";
import {Container, Form, Row, Button} from "react-bootstrap"

const Converter = () => {

    const [decimal, setDecimal] = useState('');
    const [binary, setBinary] = useState('');

    const BinToDecimal = () => {
        const decimalNum = parseInt(binary, 2);
        if (!isNaN(decimalNum)) {
            setDecimal(decimalNum.toString());
        } else {
            setDecimal('Invalid Input');
        }
    };

  return (
    <>
    <Container style={{backgroundColor: '#90AACB', borderRadius: '1rem', padding: '1rem', height:'58vh'}}>

            <Form style={{marginTop:'40px'}}>

            <h3>Binary to Decimal Convertor</h3>
            <Form.Control
                type="text"
                value={binary}
                onChange={(e) => setBinary(e.target.value)}
                placeholder="Enter a binary number"
                style={{marginTop:'20px'}}
            />

            <Button onClick={BinToDecimal} style={{backgroundColor:"rgb(48, 86, 132)", border:'none', marginTop:'20px', marginBottom:'20px'}}>Convert</Button>

            <h4>Decimal equivalent:</h4>
            <h5>{decimal}</h5>
            </Form>


    </Container>

    </>
  )
}

export default Converter