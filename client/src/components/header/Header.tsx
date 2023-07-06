import React from 'react';
import './Header.css'
import Logo from '../../assets/main_logo.png';
import {Link} from 'react-router-dom'
const Header =() => {
    return (
        <div className="header">
            <img src={Logo} alt="" 
            className="logo"/>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>About Us</li>
            </ul>
        </div>
    )
}
export default Header;