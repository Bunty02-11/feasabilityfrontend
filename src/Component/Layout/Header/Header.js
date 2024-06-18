// Header.js
import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { Container, Row, Col } from 'react-bootstrap';
import { SessionContext } from '../../../Context';

const Toggle = ({ checked, onChange }) => {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', color: checked ? '#ffffff' : '#000000' }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ margin: '0 8px', fontSize: '25px' }}>{checked ? '🌚' : '🌞'}</span>
    </label>
  );
};

const Header = () => {
  const { sessionId, setSessionId } = useContext(SessionContext);
  const [isPagesHovering, setIsPagesHovering] = useState(false);
  const [isOtherHovering, setIsOtherHovering] = useState(false);

  const darkMode = useDarkMode(false);
  const navigate = useNavigate();


  useEffect(() => {
    if (darkMode.value) {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [darkMode.value]);

  const reloadHomePage = () => {
    // window.location.reload();
    navigate('/');
  };

  // const pages = [
  //   { name: "Login", link: "/login" },
  //   { name: "Register", link: "/register" },
  //   { name: "Feasibility", link: "/feasibility" },
  //   { name: "Table", link: "/table" },
  // ];
  // const otherItems = ["Pie", "Charts", "Graphs"];

  const headerStyle = {
    backgroundColor: darkMode.value ? '#000' : '#fff',
    color: darkMode.value ? '#fff' : '#000',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    transition: 'background-color 0.3s, color 0.3s',
    padding: '10px 0',
    marginBottom: '-47px',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: darkMode.value ? '#fff' : '#000',  };

  const linkStyle = {
    color: darkMode.value ? '#fff' : '#000',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontWeight: '500',
  };

  const boldLinkStyle = {
    ...linkStyle,
    fontWeight: '500',
  };

  const linkHoverStyle = {
    color: darkMode.value ? '#bbb' : '#555',
    fontWeight: '500',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: darkMode.value ? '#fff' : '#000',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    listStyle: 'none',
    padding: '10px 0',
    margin: 0,
    display: 'none',
    zIndex: 1,
  };

  const dropdownItemStyle = {
    padding: '10px 20px',
    color: darkMode.value ? '#000' : '#fff',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    zIndex: 1,
  };

  const inputStyle = {
    padding: '5px 10px',
    fontSize: '16px',
    borderRadius: '30px',
    border: '0px solid #000',
    backgroundColor: darkMode.value ? '#fff' : '#ccc',
    color: darkMode.value ? '#fff' : '#000',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: darkMode.value ? '#fff' : '#000',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#555',
  };

  const lineStyle = {
    width: '2px',
    height: '16px',
    backgroundColor: darkMode.value ? '#fff' : '#000',
  };

  const clearSessionData = () => {
    setSessionId(null);
  };


  const handleLogout = async (e) => {
    e.preventDefault();
    

    try {
        const response = await axios.post(`http://localhost:3000/api/auth/logout/${sessionId}`);

        console.log('Response from server:', response);

        if (response.status === 200) {
            console.log('Logout successful');
            // Perform any additional actions needed after logout
            // For example, clearing session data, navigating to a login page, etc.
            clearSessionData(); // Replace with actual method to clear session data
            navigate('/login'); // Redirect to login page or any other appropriate page
        } else {
            console.error('Logout failed:', response.statusText);
        }
    } catch (error) {
        console.error('There was an error logging out!', error);
    }
};



  return (
    <header style={headerStyle}>
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center text-md-start">
            <div style={logoStyle} onClick={reloadHomePage}>Feasibility</div>
          </Col>
          <Col xs={12} md={4} className="d-none d-md-block">
          </Col>
          <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
            <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            {sessionId ? (
              <button
                style={buttonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                onClick={handleLogout}
              >
                <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                Logout
              </button>
            ) : (
              <Link to="/login" className="mx-2">
                <button
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                  Login
                </button>
              </Link>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
