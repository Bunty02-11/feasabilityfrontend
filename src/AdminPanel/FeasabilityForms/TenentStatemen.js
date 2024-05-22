import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import React, { useState } from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const Tenentstatement = ({ onNext }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const [organization, setOrganization] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({ username: '', code: '' });

    const darkMode = useDarkMode(false); // Initialize darkMode state



    const handleChange = (e, field) => {
        const { value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        setFormData(formData);
        // console.log('Password:', password);
        onNext();
    };

    const styles = darkMode.value ? darkModeStyles : lightModeStyles; // Select styles based on dark mode

    return (
        <>
            <div style={{ ...containerStyle, ...styles.containerStyle }}>
                <h3 style={{ ...titleStyle1, ...styles.titleStyle1 }}>
                    Tenent Statement
                </h3>

                <form onSubmit={handleSubmit} style={{ ...formStyle, ...styles.formStyle }}>
                    <input
                        type="text"
                        placeholder="Area of the Plot*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.code}
                        onChange={(e) => handleChange(e, 'code')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Less: RG Area*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Net Area*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nos. of tenements required as per density (650/Hectare)*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nos. of society office required*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Balwadi, Welfare + 2 other Amenity*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Total Required Tenements & Amenity*"
                        style={{ ...inputStyle, ...styles.inputStyle }}
                        value={formData.username}
                        onChange={(e) => handleChange(e, 'username')}
                        required
                    />

                    <div style={{ ...buttonContainerStyle, ...styles.buttonContainerStyle }}>
                        <button
                            style={{ ...buttonStyle, ...styles.buttonStyle }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHoverStyle.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = styles.buttonStyle.backgroundColor}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
            {/* <div style={containerStyle1}>
                <canvas id="myCanvas" width="200" height="200"></canvas>

                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Area of the plot:</strong> {formData.code}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Less: RG Area:</strong> {formData.username}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Net Area:</strong> {formData.username}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Nos. of tenements required as per density (650/Hectare):</strong> {formData.username}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Nos. of society office required:</strong> {formData.username}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Balwadi, Welfare +2 other Amenity:</strong> {formData.username}</p>
                <p style={{ ...formStyle1, ...styles.formStyle1 }} ><strong>Total Required Tenements & Amenity:</strong> {formData.username}</p>
            </div> */}
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

const containerStyle1 = {
    paddingtop: '0.2em',
    paddingbottom: '0.2em',
    margin: '1in',
    height: '100%',
    width: '500px',
    position: 'absolute',
    top: '150px',
    right: '180px',
    backgroundColor: 'transparent', // Adjust background color based on dark mode
    color: 'black', // Adjust text color based on dark mode
    paddingTop: '80px',
    // border: '4px solid'
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

const formStyle1 = {
    border: '2px solid #7876cd',
    height: '50px',
    paddingLeft: '6px',
    paddingTop: '12px',
    fontSize: '14px'

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

const buttonHoverStyle = {
    backgroundColor: '#555',
};

// Styles for light mode
const lightModeStyles = {
    containerStyle: {
        backgroundColor: 'Transparent',
    },
    containerStyle1: {
        backgroundColor: 'Transparent',
    },
    titleStyle1: {
        color: '#000',
    },
    formStyle: {},
    formStyle1: {
        color: '#000'
    },
    inputStyle: {
        borderColor: '#000',
    },
    buttonStyle: {
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
    containerStyle1: {
        backgroundColor: 'transparent',
    },
    titleStyle1: {
        color: '#fff',
    },
    formStyle1: {
        color: '#fff'
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
    buttonHoverStyle: {
        backgroundColor: '#bbb',
    },
    buttonContainerStyle: {},
};

export default Tenentstatement;
