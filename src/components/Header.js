import React from 'react';
import '../Styles/styles.css';


const Header = () => {
    return(
        <div className="navigationMenu">
        <div className="navHero">
            J & R
        </div>
        <div className="navBtn">
            <h2>When & Where<i class="fa fa-chevron-down"></i></h2>
            <h2>Our Story<i class="fa fa-chevron-down"></i></h2>
            <h2>Registry<i class="fa fa-chevron-down"></i></h2>
            <h2>Gallery<i class="fa fa-chevron-down"></i></h2>
        </div>

        </div>
    )
}

export default Header;