import React, { useState } from 'react';
import Button from './Button';
import './Button.css';

const ButtonsPage = () => {

    const [disabled, setDisabled] = useState(false)

    return (
        <div className="btns-wrapper">
            <h1 className="title">Buttons Page</h1>
            <section>
                <div className="section-title">Colors</div>
                <div className="btn-container">
                    <Button 
                        text={'default'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'default'} />" )}
                         />
                    <Button 
                        text={'primary'}
                        color={'primary'} 
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'primary'} color={'primary'}  />" )}
                        />
                    <Button 
                        text={'secondary'}
                        color={'secondary'}
                        disabled= {disabled ? true : false} 
                        onClick={()=>alert( "<Button text={'secondary'} color={'secondary'}  />" )}
                        />
                    <Button 
                        text={'success'}
                        color={'success'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'success'} color={'success'}  />" )} 
                        />
                    <Button 
                        text={'danger'}
                        color={'danger'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'danger'} color={'danger'}  />" )} 
                        />
                    <Button 
                        text={'warning'}
                        color={'warning'}
                        disabled= {disabled ? true : false} 
                        onClick={()=>alert( "<Button text={'warning'} color={'warning'}  />" )}
                        />
                    <Button 
                        text={'info'}
                        color={'info'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'info'} color={'info'}  />" )} 
                        />
                    <Button 
                        text={'light'}
                        color={'light'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'light'} color={'light'}  />" )}
                        />
                    <Button 
                        text={'dark'}
                        color={'dark'}
                        disabled= {disabled ? true : false}
                        onClick={()=>alert( "<Button text={'dark'} color={'dark'}  />" )}
                        />
                    <div className="switch" onClick={()=>setDisabled(!disabled)}>
                        <span className="material-icons">
                            {disabled ?
                            "toggle_on"
                            :
                            "toggle_off"
                            }
                        </span>
                        disabled
                    </div>
                    
                </div>
                <div className="section-title">Sizes</div>
                <div className="btn-container-lg">
                    <Button 
                        text={'small'}
                        color={'primary'} 
                        size={'sm'} 
                        onClick={()=>alert( "<Button text={'small'} color={'primary'}  size={'sm'} />" )}
                        />
                    <Button 
                        text={'default'}
                        color={'primary'}  
                        size={'md'} 
                        onClick={()=>alert( "<Button text={'default'} color={'primary'}  size={'md'} />" )}
                        />
                    <Button 
                        text={'large'}
                        color={'primary'} 
                        size={'lg'} 
                        onClick={()=>alert( "<Button text={'large'} color={'primary'}  size={'lg'} />" )}
                        />
                </div>
                <div>
                    <Button 
                        text={'block level'}
                        color={'primary'} 
                        size={'block'} 
                        onClick={()=>alert( "<Button text={'block level'} color={'primary'}  size={'block'} />" )}
                        />
                </div>
                <div className="section-title">Variants</div>
                <div className="btn-container">
                    <Button 
                        text={'outline'} 
                        variant={'outline'}
                        onClick={()=>alert( "<Button text={'outline'} variant={'outline'} />" )}
                        />
                </div>
                <div className="section-title">Icons</div>
                <div className="btn-container-lg">
                    <Button 
                        text={'icon in front'}
                        color={'primary'}
                        size={'lg'}
                        icon_front={'shopping_cart'} 
                        onClick={()=>alert( "<Button text={'icon in front'} color={'primary'}  size={'lg'} icon_front={'shopping_cart'}  />" )}
                        />
                    <Button 
                        text={'icon in back'}
                        color={'primary'}
                        size={'lg'}
                        icon_back={'shopping_cart'} 
                        onClick={()=>alert( "<Button text={'icon in back'} color={'primary'}  size={'lg'} icon_back={'shopping_cart'}  />" )}
                        />
                </div>
                <div className="section-title">Legend</div>
                <p className="legend-block">
                    {"text={''}"}
                    {" options: any text you want to display"}
                </p>
                <p className="legend-block">
                    {"color={''}"}
                    {" options: primary, secondary, success, danger, "}
                </p>
                <p className="legend-block">
                    {"size={''}"}
                    {" options: sm, md, lg, block "}
                </p>
                <p className="legend-block">
                    {"variant={''}"}
                    {" options: outline "}
                </p>
                <p className="legend-block">
                    {"icon_back={''} or icon_front={''}"}
                    {" options: anything in material icons list "}
                </p>
            </section>
        </div>
    );
};

export default ButtonsPage;
