import React from 'react';
import './Button.css';

const Button = ({ icon, size, text, variant  }) => {
    return (
        <button className={`btn ${size} ${variant}`}>{ icon } { text }</button>
    );
};

export default Button;

