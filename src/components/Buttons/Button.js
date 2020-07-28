import React from 'react';
import './Button.css';

const Button = ({ 
    color, 
    disabled, 
    icon_back, 
    icon_front,
    name,
    onClick, 
    size, 
    text,
    type,
    value,
    variant  
}) => {

    return (
        <button 
            className={`btn ${color} ${size} ${variant}`} 
            disabled={false || disabled}
            name={name}
            onClick={onClick}
            type={type}
            value={value}>
                <span className="material-icons">
                    { icon_front }
                </span> 
                { text }
                <span className="material-icons">
                    { icon_back }
                </span> 
            </button>
    );
};

export default Button;

