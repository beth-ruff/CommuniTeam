import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-nav">
                <li ><Link to="/events" >Events</Link></li>
                <li ><Link to="/categories" >Categories</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;