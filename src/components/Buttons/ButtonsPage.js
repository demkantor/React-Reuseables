import React from 'react';
import Button from './Button';
import './Button.css';

const ButtonsPage = () => {
    return (
        <div className="btns-wrapper">
            <h1 className="title">Buttons Page</h1>
            <section>
                <div className="btn-container">
                    <Button 
                        text={'hello'}
                        color={'primary'} 
                        size={'sm'} />
                    <Button 
                        text={'hello'}
                        color={'primary'}  
                        size={'md'} />
                    <Button 
                        text={'hello'}
                        color={'primary'} 
                        size={'lg'} />
                    <Button 
                        value={'hello'} />
                    <Button>This one</Button>
                </div>
                <div className="container">
                    
                </div>
                <div className="container">
                    <Button 
                        text={'hello'} />
                </div>
                <div className="container">
                    <Button 
                        text={'hello'} />
                </div>
            </section>
        </div>
    );
};

export default ButtonsPage;
