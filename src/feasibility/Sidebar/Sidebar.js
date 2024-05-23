import React from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faUsers, faEnvelope, faLink, faShieldAlt, faQuran, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare';
import { faListUl } from '@fortawesome/free-solid-svg-icons/faListUl';

const Sidebar = () => {
  const darkMode = useDarkMode(false); // Initialize darkMode state

  const sidebarStyle = {
    minWidth: '250px',
    backgroundColor: darkMode.value ? 'transparent' : 'transparent',
    padding: '15px',
    color: darkMode.value ? '#fff' : '#000',
  };

  const linkStyle = {
    color: darkMode.value ? '#fff' : '#000',
  };
  const iconStyle = {
    marginRight: '20px',
    fontSize: '20px',
};


  return (
    <div style={sidebarStyle}>
      <h2>Sanjay Dutt</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" style={linkStyle}>
          <FontAwesomeIcon icon={faHome} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Home
            </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={linkStyle}>
          <FontAwesomeIcon icon={faCogs} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Scheme</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={linkStyle}>
          <FontAwesomeIcon icon={faPlusSquare} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Create Feasibility</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={linkStyle}>
          <FontAwesomeIcon icon={faListUl} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Feasibility List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={linkStyle}>
          <FontAwesomeIcon icon={faUser} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Accounts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={linkStyle}>
          <FontAwesomeIcon icon={faShieldAlt} style={{ ...iconStyle, color: darkMode.value ? '#FFF' : 'black' }} />
            Privacy</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
