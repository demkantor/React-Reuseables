import React, { useState, useEffect } from 'react';
import './Color.css'

const ColorsPage = () => {

    const [current, setCurrent] = useState('#f3f3f3');
    const [hex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]);
    const [myTheme, setMyTheme] = useState('light');

    useEffect(() => {
        const loadTheme = async () => {
            const theme = localStorage.getItem('theme');
            if (theme) {
                document.body.classList.add(theme);
                setMyTheme(theme);
            }
        };

        loadTheme();
    }, []);

    const changeColor = () => {
        let hexValue = '#';
        for(let i = 0; i<6; i++) {
            hexValue += hex[getRandom()];
        };
        document.getElementById('color').style.backgroundColor = hexValue;
        setCurrent(hexValue);
    };

    const getRandom = () => {
        const randomColor = Math.floor(Math.random() * hex.length);
        return randomColor;
    };

    const darkButton = () => {
        document.body.classList.replace('light-theme', 'dark-theme');
        document.querySelector('.navbar').classList.replace('dark-theme', 'light-theme');
        let links = document.querySelectorAll('.navbar__link');
        links.forEach(link => link.classList.replace('dark-theme', 'light-theme'));
        localStorage.setItem('theme', 'dark-theme');
        setMyTheme('dark');
    };

    const lightButton = () => {
        document.body.classList.replace('dark-theme', 'light-theme');
        document.querySelector('.navbar').classList.replace('light-theme', 'dark-theme');
        let links = document.querySelectorAll('.navbar__link');
        links.forEach(link => link.classList.replace('light-theme', 'dark-theme'));
        localStorage.setItem('theme', 'light-theme');
        setMyTheme('light');
    };

    return (
        <div id="color" className="color-page">
            <h1 className="title">Colors Themes Page</h1>
            <section>
                    <div className="container">
                        <h2 className="subtitle">
                            Background Color: &nbsp;
                            <span className="color">
                                {current}
                            </span>
                        </h2>
                        <span className="inline-container">
                            For a random background
                            <button className="btn primary" onClick={changeColor}>
                                Click Me!
                            </button>
                        </span>
                    </div>
                    <div className="container">
                        <h2 className="subtitle">
                            Current Theme: &nbsp;
                            <span className="color">
                                {myTheme}
                            </span>
                        </h2>
                        <span className="inline-container">
                            Click To Change Current Theme
                            <button className="btn light" onClick={lightButton}>
                                Light Theme
                            </button>
                            <button className="btn dark" onClick={darkButton}>
                                Dark Theme
                            </button>
                        </span>
                    </div>
                </section>
        </div>
    );
};

export default ColorsPage;
