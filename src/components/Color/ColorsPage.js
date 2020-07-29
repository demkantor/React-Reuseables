import React, { useState } from 'react';
import './Color.css'

const ColorsPage = () => {

    const [current, setCurrent] = useState('#f3f3f3');
    const [hex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"])

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
                            <button className="btn" onClick={changeColor}>
                                Click Me!
                            </button>
                        </span>
                        
                    </div>
                </section>
        </div>
    );
};

export default ColorsPage;
