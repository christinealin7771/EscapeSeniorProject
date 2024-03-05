import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const footerStyle = {
        position: 'relative', // Changed position to relative
        width: '100%',
        height: '50px',
        backgroundColor: '#002657',
        color: '#FFFFFF',
        alignItems: 'center',
        paddingLeft: '20px', // Add left padding to align the text to the left
        marginTop: 'auto', // Push the footer to the bottom of the container
    };

    return (
        <div style={footerStyle}>
            <Container>
                <p>2024</p>
            </Container>
        </div>
    );
}

export default Footer;
