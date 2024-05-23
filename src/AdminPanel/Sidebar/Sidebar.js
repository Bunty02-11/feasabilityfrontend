import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faUsers, faEnvelope, faLink, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode';
import { Container, Row, Col } from 'react-bootstrap';

const Sidebar = () => {
    const darkMode = useDarkMode(false);

    const headingStyle = {
        fontWeight: '400',
    };

    const ulStyle = {
        listStyleType: 'none',
        padding: '0',
        marginTop: '30px',
    };

    const liStyle = {
        padding: '10px 0',
    };

    const linkStyle = {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        fontWeight: '500',
        height: '100%',
    };

    const iconStyle = {
        marginRight: '20px',
        fontSize: '20px',
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={3} style={{ backgroundColor: darkMode.value ? '#000' : '#fff', color: darkMode.value ? '#FFF' : 'black', paddingTop: '20px' }}>
                    <h2 style={headingStyle}>My Sidebar</h2>
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <a href="#home" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faHome} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Home
                            </a>
                        </li>
                        <li style={liStyle}>
                            <a href="#services" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faCogs} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Scheme
                            </a>
                        </li>
                        <li style={liStyle}>
                            <a href="#clients" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faUsers} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Create Feasibility
                            </a>
                        </li>
                        <li style={liStyle}>
                            <a href="#contact" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faEnvelope} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Feasibility List
                            </a>
                        </li>
                        <li style={liStyle}>
                            <a href="#linked" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faLink} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Accounts
                            </a>
                        </li>
                        <li style={liStyle}>
                            <a href="#privacy" style={{ ...linkStyle, color: darkMode.value ? '#FFF' : 'black' }}>
                                <FontAwesomeIcon icon={faShieldAlt} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
                                Privacy
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Sidebar;
