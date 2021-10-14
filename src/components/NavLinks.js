import React from 'react';

const NavLink = props => {
    return (
        <div>
            <li className="navLink">
                {props.navLink}
            </li>
            <i className="fa fa-chevron-down"></i>
        </div>
    )
}

export default NavLink;