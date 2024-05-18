// src/Footer.js
import React from 'react';

const footerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
};

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Nike, Inc. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
