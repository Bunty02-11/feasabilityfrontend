import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Toggle = ({ checked, onChange }) => {
    return (
        <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', color: checked ? '#ffffff' : '#000000' }}>
            <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
            <span style={{ margin: '0 8px', fontSize: '25px' }}>{checked ? '🌚' : '🌞'}</span>
        </label>
    );
};

const Header = () => {
    const [isPagesHovering, setIsPagesHovering] = useState(false);
    const [isOtherHovering, setIsOtherHovering] = useState(false);

    const darkMode = useDarkMode(false);

    useEffect(() => {
        if (darkMode.value) {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        } else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
    }, [darkMode.value]);

    const pages = [
        { name: "Login", link: "/login" },
        { name: "Register", link: "/register" },
        { name: "Feasibility", link: "/feasibility" },
        { name: "Table", link: "/table" }
    ];
    const otherItems = ["Pie", "Charts", "Graphs"];

    const headerStyle = {
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: darkMode.value ? '#fff' : '#000',
    };

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

    return (
        <header style={headerStyle}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center text-md-left">
                        <div style={logoStyle}>Feasibility</div>
                    </Col>
                    <Col xs={12} md={4} className="d-none d-md-block">
                        <nav>
                            <ul className="d-flex justify-content-center list-unstyled mb-0">
                                <li className="mx-3">
                                    <a
                                        href="#dashboard"
                                        style={boldLinkStyle}
                                        onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                        onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li
                                    className="mx-3 position-relative"
                                    onMouseEnter={() => setIsPagesHovering(true)}
                                    onMouseLeave={() => setIsPagesHovering(false)}
                                >
                                    <a
                                        style={linkStyle}
                                        onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                        onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                    >
                                        Pages
                                    </a>
                                    {isPagesHovering && (
                                        <ul style={{ ...dropdownMenuStyle, display: 'block' }}>
                                            {pages.map((page, index) => (
                                                <li key={index}>
                                                    <Link to={page.link} style={dropdownItemStyle}>{page.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                <li
                                    className="mx-3 position-relative"
                                    onMouseEnter={() => setIsOtherHovering(true)}
                                    onMouseLeave={() => setIsOtherHovering(false)}
                                >
                                    <a
                                        href="#other"
                                        style={boldLinkStyle}
                                        onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                        onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                    >
                                        Other
                                    </a>
                                    {isOtherHovering && (
                                        <ul style={{ ...dropdownMenuStyle, display: 'block' }}>
                                            {otherItems.map((item, index) => (
                                                <li key={index}>
                                                    <a href="#other" style={dropdownItemStyle}>{item}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                                <li className="mx-3">
                                    <a
                                        href="#layout"
                                        style={boldLinkStyle}
                                        onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                        onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                                    >
                                        Layout
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end align-items-center mt-3 mt-md-0">
                        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
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
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
