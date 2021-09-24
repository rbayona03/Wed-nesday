import React from 'react';
import '../Styles/styles.css';


const Header = () => {
    return(
        <div className="navigationMenu">
        <div className="navHero">
            J & R
        </div>
        <div className="navBtn">
            <h2>When & Where<i className="fa fa-chevron-down"></i></h2>
            <h2>Our Story<i className="fa fa-chevron-down"></i></h2>
            <h2>Registry<i className="fa fa-chevron-down"></i></h2>
            <h2>Gallery<i className="fa fa-chevron-down"></i></h2>
        </div>
        </div>
    )
}

export default Header;