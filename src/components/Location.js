import React from 'react';
import CountDown from './CountDown';

const Location = props => {
    return(
        <div>
                <div className="locationSection">
                    <div className="locationBd"></div>
                    <h1 className="locationTitle">{props.sectionTitle}</h1>
                    <div className="eventDateCont">
                        <CountDown />
                        <div className="eventCard">
                        <ul>
                            <h3>Upon Arrival</h3>
                            <li>Valet is present</li>
                            <li>Entrance Through Main House</li>
                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8417110149653!2d-80.31231228498216!3d25.6101755837058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c5c50d865ed3%3A0x9bd96a7baf4f5cd9!2sThalatta%20Estate!5e0!3m2!1sen!2sus!4v1634222022670!5m2!1sen!2sus" width="350" height="150" style={{border:0}}allowfullscreen="true" loading="lazy"></iframe>
                        <p>17301 Old Cutler Rd, Palmetto Bay, FL 33157</p>
                        </div>
                    </div>
                    <div className="bgBanner">Janesy & Rob are having a celebration</div>
                </div>
        </div>

    )
};

export default Location;