import '../Styles/styles.css';
import React from 'react';
import Hero from './Hero';
import Header from './Header';

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