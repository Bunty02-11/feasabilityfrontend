import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const AreaStatement2 = ({ onNext, onBack }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [organization, setOrganization] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeStep, setActiveStep] = useState(0);

    const darkMode = useDarkMode(false); // Initialize darkMode state

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        // console.log('Password:', password);
        onNext();
        onBack();
    };

    const styles = darkMode.value ? darkModeStyles : lightModeStyles; // Select styles based on dark mode

    return (
        <>
            <div style={{ ...containerStyle, ...styles.containerStyle }}>
                <h3 style={{ ...titleStyle1, ...styles.titleStyle1 }}>
                    Area Statement 2
                </h3>

                <form onSubmit={handleSubmit} style={{ ...formStyle, ...styles.formStyle }}>
                    <input
                        type="text"
                        placeholder="Area of the Plot*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Less: RG Area*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Net Area*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nos. of tenements required as per density (650/Hectare)*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nos. of society office required*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Balwadi, Welfare + 2 other Amenity*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Total Required Tenements & Amenity*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />

                    <div style={{ ...buttonContainerStyle, ...styles.buttonContainerStyle }}>
                        <button
                            onClick={onBack}
                            style={{ ...buttonStyle1, ...styles.buttonStyle1 }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHoverStyle.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = styles.buttonStyle.backgroundColor}
                        >
                            Previous
                        </button>
                        <button
                            onClick={onNext}
                            style={{ ...buttonStyle, ...styles.buttonStyle }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHoverStyle.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = styles.buttonStyle.backgroundColor}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
};

// Inline CSS styles for light mode
const containerStyle = {
    fontFamily: 'Noto Sans, sans-serif', // Change font family to Noto Sans
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
    position: 'relative', // Make container relative for absolute positioning of the logo
};

const titleStyle1 = {
    fontFamily: "'Noto Sans', sans-serif", // Change font family to Noto Sans
    marginBottom: '30px', // Adjust margin as needed
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '850px',
    fontSize: '24px',
};

const formStyle = {
    width: '600px', // Adjust the width as needed
    height: 'auto',
    display: 'flex', // Added for flexbox layout
    flexDirection: 'column', // Keep elements in column
    marginRight: '450px',
};

const inputStyle = {
    width: '100%',
    height: '60px',
    padding: '10px',
    marginBottom: '25px',
    border: '1px solid',
    borderRadius: '10px',
    boxSizing: 'border-box',
    fontFamily: "'Noto Sans', sans-serif", // Change font family to Noto Sans
    fontWeight: 'regular',
};

const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Align button to the right
};

const buttonStyle = {
    height: '50px',
    width: '120px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    marginTop: '0px',
};
const buttonStyle1 = {
    height: '50px',
    width: '120px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '25px',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    marginTop: '0px',
    marginRight: '380px'
};

// Styles for light mode
const lightModeStyles = {
    containerStyle: {
        backgroundColor: 'Transparent',
    },
    titleStyle1: {
        color: '#000',
    },
    formStyle: {},
    inputStyle: {
        borderColor: '#000',
    },
    buttonStyle: {
        backgroundColor: '#000',
        color: '#fff',
    },
    buttonStyle1: {
        backgroundColor: '#000',
        color: '#fff',
    },
    buttonHoverStyle: {
        backgroundColor: '#555',
    },
    buttonContainerStyle: {},
};

// Styles for dark mode
const darkModeStyles = {
    containerStyle: {
        backgroundColor: 'transparent',
    },
    titleStyle1: {
        color: '#fff',
    },
    formStyle: {},
    inputStyle: {
        borderColor: '#fff',
        backgroundColor: '#000',
        color: '#fff',
    },
    buttonStyle: {
        backgroundColor: '#fff',
        color: '#000',
    },
    buttonStyle1: {
        backgroundColor: '#fff',
        color: '#000',
    },
    buttonHoverStyle: {
        backgroundColor: '#bbb',
    },
    buttonContainerStyle: {},
};

export default AreaStatement2;
