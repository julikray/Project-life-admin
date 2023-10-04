import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className='navbar'>
            <div className='navlogo'><img src='./favicon.ico' alt='logo' /> </div>
            <div >
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    onClick={() => setIsMobile(false)}>
                
                    <li ><a href="/">Home</a></li>
                    <li ><a href="/">Content</a></li>
                    <li ><a href="/">Purpose</a></li>
                    <li ><a href="/">About-Creators</a></li>
                </ul>
            </div>
            <button className='toggle-button' onClick={() => setIsMobile(!isMobile)} >
                {isMobile ? ( <FontAwesomeIcon icon={faTimes} /> ) : (  <FontAwesomeIcon icon={faBars} /> )}
            </button>
        </div>
    );
}

export default Header;
