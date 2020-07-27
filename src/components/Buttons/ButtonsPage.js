import React from 'react';
import Button from './Button';
import './Button.css';

const ButtonsPage = () => {
    return (
        <div className="btns-wrapper">
            <h1 className="title">Buttons Page</h1>
            <section>
                <div className="section-title">Colors</div>
                <div className="btn-container">
                    <Button 
                        text={'default'}
                         />
                    <Button 
                        text={'primary'}
                        color={'primary'} 
                        />
                    <Button 
                        text={'secondary'}
                        color={'secondary'}  
                        />
                    <Button 
                        text={'success'}
                        color={'success'}  
                        />
                    <Button 
                        text={'danger'}
                        color={'danger'}  
                        />
                    <Button 
                        text={'warning'}
                        color={'warning'}  
                        />
                    <Button 
                        text={'info'}
                        color={'info'}  
                        />
                    <Button 
                        text={'light'}
                        color={'light'}  
                        />
                    <Button 
                        text={'dark'}
                        color={'dark'}  
                        />
                </div>
                <div className="section-title">Sizes</div>
                <div className="btn-container-lg">
                    <Button 
                        text={'small'}
                        color={'primary'} 
                        size={'sm'} />
                    <Button 
                        text={'default'}
                        color={'primary'}  
                        size={'md'} />
                    <Button 
                        text={'large'}
                        color={'primary'} 
                        size={'lg'} />
                </div>
                <div>
                    <Button 
                        text={'block level'}
                        color={'primary'} 
                        size={'block'} />
                </div>
                <div className="section-title">Variants</div>
                <div className="btn-container">
                    <Button 
                        text={'hello'} 
                        variant={'outline'}/>
                </div>
                <div className="section-title">Icons</div>
                <div className="btn-container-lg">
                    <Button 
                        text={'icon in front'}
                        color={'primary'}
                        size={'lg'}
                        icon_front={'shopping_cart'} />
                    <Button 
                        text={'icon in back'}
                        color={'primary'}
                        size={'lg'}
                        icon_back={'shopping_cart'} />
                </div>
                <div className="section-title">Legend</div>
                <p>
                    {"text={''}"}
                    {" options: any text you want to display"}
                </p>
                <p>
                    {"color={''}"}
                    {" options: primary, secondary, success, danger, "}
                </p>
                <p>
                    {"size={''}"}
                    {" options: sm, md, lg, block "}
                </p>
            </section>
        </div>
    );
};

export default ButtonsPage;
