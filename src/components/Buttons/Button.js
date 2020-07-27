import React from 'react';
import './Button.css';

const Button = ({ color, disabled, icon_back, icon_front, size, text, variant  }) => {
    return (
        <button 
            className={`btn ${color} ${size} ${variant}`} disabled={false || disabled}>
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

