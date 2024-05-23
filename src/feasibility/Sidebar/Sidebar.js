import React from 'react';

const Sidebar = () => {
  const sidebarStyle = {
    minWidth: '250px',
    backgroundColor: '#f8f9fa',
    padding: '15px',
  };

  return (
    <div style={sidebarStyle}>
      <h2>My Sidebar</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Scheme</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Create Feasibility</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Feasibility List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Accounts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Privacy</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
