import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Username:', username);
        // console.log('Password:', password);
    };

    return (
        <>
            <div style={containerStyle1}>
                <img
                    src={'https://masterbundles.com/wp-content/uploads/2022/03/1-nike-logo-design-%E2%80%93-history-meaning-and-evolution.png'}
                    alt="Logo"
                    style={logoStyle}
                />
            </div>
            <div style={containerStyle}>
                <h1 style={titleStyle}>
                    Enter your email to join us or sign <br /> in.
                </h1>
                <h3 style={titleStyle1}>
                    India
                </h3>
                
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input
                        type="text"
                        placeholder="Username"
                        style={inputStyle}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    {/* <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> */}
                    <div style={buttonContainerStyle}>
                        <button
                            style={buttonStyle}
                            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

// Inline CSS styles
const containerStyle = {
    fontFamily: 'Noto Sans, sans-serif', // Change font family to Noto Sans
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
    position: 'relative', // Make container relative for absolute positioning of the logo
};

const containerStyle1 = {
    fontFamily: 'Noto Sans, sans-serif', // Change font family to Noto Sans
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '450px',
    height: 'auto',
    width: 'auto',
    position: 'relative',
    marginTop: '70px', // Make container relative for absolute positioning of the logo
};

const logoStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
    verticalAlign: 'middle',
};

const titleStyle = {
    fontFamily: "'Noto Sans', sans-serif", // Change font family to Noto Sans
    color: '#000',
     // Adjust margin as needed // Ensure title is centered
    display: 'flex',
    alignItems: 'center',
};

const titleStyle1 = {
    fontFamily: "'Noto Sans', sans-serif", // Change font family to Noto Sans
    color: '#000',
    marginBottom: '50px',// Adjust margin as needed // Ensure title is centered
    marginTop: '-10px',
    display: 'flex',
    alignItems: 'center',
    marginRight: '450px'
};

const formStyle = {
    width: '500px', // Adjust the width as needed
    height: '300px',
    display: 'flex', // Added for flexbox layout
    flexDirection: 'column', // Keep elements in column
};

const inputStyle = {
    width: '100%',
    height: '60px',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #000',
    borderRadius: '4px',
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
    backgroundColor: '#000',
    borderRadius: '25px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    alignItems: 'center',
    marginTop: '100px',
};

const buttonHoverStyle = {
    backgroundColor: '#555',
};

export default LoginForm;
