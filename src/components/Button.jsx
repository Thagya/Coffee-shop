import React from 'react';
import '../styles/Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, icon }) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
};

export default Button;