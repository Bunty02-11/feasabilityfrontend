import React, { useState } from 'react';

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
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
    gap: '30px',
    position: 'relative',
};

const linkStyle = {
    color: '#000',
    textDecoration: 'none',
    transition: 'color 0.3s',
    fontWeight: 'bold',
};

const ProfileHeader = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const handleMouseEnter = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeave = () => {
        setHoveredLink(null);
    };

    const getLinkStyle = (link) => {
        if (hoveredLink === link) {
            return { ...linkStyle, color: '#555' }; // Change '#f00' to your desired hover color
        }
        return linkStyle;
    };

    return (
        <header style={headerStyle}>
            <div style={navContainerStyle}>
                <nav>
                    <ul style={navLinksStyle}>
                        <li>
                            <a
                                href="#dashboard"
                                style={getLinkStyle('dashboard')}
                                onMouseEnter={() => handleMouseEnter('dashboard')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a
                                href="#pages"
                                style={getLinkStyle('pages')}
                                onMouseEnter={() => handleMouseEnter('pages')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Pages
                            </a>
                        </li>
                        <li>
                            <a
                                href="#other"
                                style={getLinkStyle('other')}
                                onMouseEnter={() => handleMouseEnter('other')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Other
                            </a>
                        </li>
                        <li>
                            <a
                                href="#layout"
                                style={getLinkStyle('layout')}
                                onMouseEnter={() => handleMouseEnter('layout')}
                                onMouseLeave={handleMouseLeave}
                            >
                                Layout
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default ProfileHeader;
