import React from 'react';

const OurStory = props => {
    return(
        <div className="OS_Section">
            <h1>{props.sectionTitle}</h1>
            <div className="OS_content">
                <div className="OS_HeroImg"
                style={{
                    backgroundImage: 'url(images/ourStoryHero.jpg)',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}
                ></div>
                <p className="OS_Descript"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque rerum fugit, sunt accusamus debitis optio, ab 
                    blanditiis dolorem fuga reprehenderit 
                    cupiditate et saepe vitae dolor eos, porro vero voluptatem itaque.
                </p>
            </div>
        </div>
    );
};

export default OurStory;
