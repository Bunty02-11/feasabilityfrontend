// src/Footer.js
import React from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const Footer = () => {
    const darkMode = useDarkMode(false); // Initialize darkMode with default false

    const footerStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
        marginTop: '200px',
        transition: 'background-color 0.3s, color 0.3s',
        borderTop: `2px solid ${darkMode.value ? '#fff' : '#000'}` // Upper border style
    };

    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 Nike, Inc. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
