import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const footerStyle = {
        position: 'relative',
        width: '100%',
        height: '50px',
        backgroundColor: '#002657',
        color: '#FFFFFF',
        alignItems: 'center',
        paddingLeft: '20px', 
        paddingTop: '10px',
        margin: '0 auto',
        textAlign: 'center', 
    };

    return (
        <div style={footerStyle}>
            <Container>
                <p>University of Florida 2024 </p>
            </Container>
        </div>
    );
}

export default Footer;
