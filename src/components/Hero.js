import React from 'react';
import CountDown from './CountDown';
import '../Styles/styles.css';


const Hero = () => {
    return(
        <div>
            {/*Navigation will go here*/}
            <h1 className="heroTitle">Janesy <span>&</span> Robert</h1>
            <CountDown />
        </div>
    )
}

export default Hero;