import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const Header = () => {
    const [isPagesHovering, setIsPagesHovering] = useState(false);
    const [isOtherHovering, setIsOtherHovering] = useState(false);

    const darkMode = useDarkMode(false); // Initialize darkMode state

    const pages = ["Login", "Register", "Form"];
    const otherItems = ["Pie", "Charts", "Graphs"];

    // Define styles with conditional dark mode styling
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: darkMode.value ? '#fff' : '#000',
    };

    const navContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    };

    const navLinksStyle = {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        position: 'relative',
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
        backgroundColor: darkMode.value ? '#000' : '#fff',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        listStyle: 'none',
        padding: '10px 0',
        margin: 0,
        display: 'none',
    };

    const dropdownItemStyle = {
        padding: '10px 20px',
        color: darkMode.value ? '#fff' : '#000',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'center', // Center align text
    };

    const searchContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
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
            <div style={logoStyle}>Feasability</div>
            <div style={navContainerStyle}>
                <nav>
                    <ul style={navLinksStyle}>
                        <li>
                            <a href="#dashboard"
                                style={boldLinkStyle}
                                onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Dashboard
                            </a>
                        </li>
                        <li
                            onMouseEnter={() => setIsPagesHovering(true)}
                            onMouseLeave={() => setIsPagesHovering(false)}
                            style={{ position: 'relative' }}
                        >
                            <a href="#pages"
                                style={linkStyle}
                                onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Pages
                            </a>
                            {isPagesHovering && (
                                <ul style={{ ...dropdownMenuStyle, display: 'block' }}>
                                    {pages.map((page, index) => (
                                        <li key={index}>
                                            <a href="#pages" style={dropdownItemStyle}>{page}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => setIsOtherHovering(true)}
                            onMouseLeave={() => setIsOtherHovering(false)}
                            style={{ position: 'relative' }}
                        >
                            <a href="#other"
                                style={boldLinkStyle}
                                onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
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
                        <li>
                            <a href="#layout"
                                style={boldLinkStyle}
                                onMouseEnter={(e) => e.target.style.color = linkHoverStyle.color}
                                onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
                                Layout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={searchContainerStyle}>
                <div style={{ position: 'relative' }}>
                    <input type="text" placeholder="Search..." style={inputStyle} />
                    <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', color: darkMode.value ? '#000' : '#fff' }} />
                </div>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                    Login
                </button>
                <div style={lineStyle}></div>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
                    Join Us
                </button>
                {/* Add a button to toggle dark mode */}
            </div>
        </header>
    );
}

export default Header;
