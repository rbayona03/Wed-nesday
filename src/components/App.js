import '../Styles/styles.css';
import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Location from './Location';
import OurStory from './OurStory';

const App = () => {
    return(
        <div >
            <Header />
            <div className="heroBody">
                <Hero />
            </div>
            <Location sectionTitle="When & Where"/>
            <OurStory sectionTitle="Our Story"/>
        </div>
    )
}

export default App;