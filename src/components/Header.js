import React from 'react';
import NavLink from './NavLinks';
import '../Styles/styles.css';


const Header = () => {
    return(
        <div className="navigationMenu">
            <div className="navHero">
                J & R
            </div>
            <ul className="navBtn">
                <NavLink navLink="When & Where"/>
                <NavLink navLink="Our Story"/>
                <NavLink navLink="Registery"/>
                <NavLink navLink="Gallery"/>
            </ul>
        </div>
    )
}

export default Header;