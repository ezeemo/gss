// src/components/Logo.js
import React from 'react';
import gssLogo from '../assets/gss.png'; // Adjust path

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src={gssLogo} 
        alt="Global Source Solution Logo" 
        style={{ height: '40px' }} // Adjust size
      />
      <span style={{ 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#2d3748' 
      }}>
        Global Source Solution
      </span>
    </div>
  );
};

export default Logo;