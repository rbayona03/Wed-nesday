import '../Styles/styles.css';
import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Location from './Location';
import CountDown from './CountDown';

const App = () => {
    return(
        <div >
            <Header />
            <div className="heroBody">
            <Hero />
            </div>
        </div>
    )
}

export default App;