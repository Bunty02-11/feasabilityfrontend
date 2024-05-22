import React, { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

const Toggle = ({ checked, onChange }) => {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer', color: checked ? '#ffffff' : '#000000' }}>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      <span style={{ margin: '0 8px' }}>{checked ? '🌚' : '🌞'}</span>
    </label>
  );
};

const DarkMode = () => {
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

  return (
    <div style={{ fontSize: '40px', position: 'fixed' , bottom: '50px', right: '0px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '20px', backgroundColor: darkMode.value ? 'transparent' : 'transparent', zIndex: '9999' }}>
      <div style={{ marginRight: '10px' }}>
        <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      </div>
      <button
        type="button"
        onClick={darkMode.disable}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          color: darkMode.value ? '#ffffff' : '#000000'
        }}
      >
      </button>
      <button
        type="button"
        onClick={darkMode.enable}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '24px',
          marginLeft: '10px',
          marginTop: '10px',
          color: darkMode.value ? '#ffffff' : '#000000'
        }}
      >
      </button>
    </div>
  );
};

export default DarkMode;
