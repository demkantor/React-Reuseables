import React from 'react';
import './Button.css';

const Button = ({ color, icon, size, text, variant  }) => {
    return (
        <button className={`btn ${color} ${size} ${variant}`}>{ icon } { text }</button>
    );
};

export default Button;

