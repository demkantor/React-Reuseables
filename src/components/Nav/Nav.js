import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeNav = () => {
        setIsOpen(false);
        document.querySelector('.navbar').classList.remove('nav-open');
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        document.querySelector('.navbar').classList.toggle('nav-open');
    };


    return (
        <div id="nav" className="navbar dark-theme">
            <button className="nav-menu dark-theme" onClick={toggleOpen}>

                {isOpen
                ?
                <span className="material-icons">
                    menu
                </span> 
                :
                <span className="material-icons">
                    menu_open
                </span> 
                }
                
            </button>
            <Link to="/" className="navbar__link dark-theme" onClick={closeNav}>
                Home
                <span className="material-icons">
                    home
                </span>   
            </Link>
            <Link to="/colors" className="navbar__link dark-theme" onClick={closeNav}>
                Color Themes
                <span className="material-icons">
                    color_lens
                </span>   
            </Link>
            <Link to="/buttons" className="navbar__link dark-theme" onClick={closeNav}>
                Buttons
                <span className="material-icons">
                    smart_button
                </span>   
            </Link>
            <Link to="/inputs" className="navbar__link dark-theme" onClick={closeNav}>
                Inputs
                <span className="material-icons">
                    keyboard
                </span>   
            </Link>
            
        </div>
    );
};

export default Nav;
