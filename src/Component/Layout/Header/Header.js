import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
};

const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
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
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontWeight: 'bold',
};

const boldLinkStyle = {
    ...linkStyle,
    fontWeight: 'bold',
};

const linkHoverStyle = {
    color: '#555',
    fontWeight: 'bold',
};

const dropdownMenuStyle = {
    position: 'fixed',
    top: 'calc(50px + 1em)', // Adjust the spacing as needed
    left: 0,
    width: '100%',
    height: 'calc(50% - 1em)',
    backgroundColor: '#fff',
    zIndex: 999,
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    listStyle: 'none',
    padding: '10px 0',
    margin: 0,
};

const dropdownItemStyle = {
    padding: '10px 20px',
    color: '#000',
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
    borderRadius: '4px',
    border: '0px solid #000',
    backgroundColor: '#ccc',
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'transparent',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
};

const buttonHoverStyle = {
    backgroundColor: '#555',
};

const lineStyle = {
    width: '2px',
    height: '16px',
    backgroundColor: '#000',
};

const Header = () => {
    const [isPagesHovering, setIsPagesHovering] = useState(false);
    const [isOtherHovering, setIsOtherHovering] = useState(false);

    const pages = ["Login", "Register", "Form"];
    const otherItems = ["Pie Charts", "Graphs"];

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
                    <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
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
            </div>
        </header>
    );
}

export default Header;
