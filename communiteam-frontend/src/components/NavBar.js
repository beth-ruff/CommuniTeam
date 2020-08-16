import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-nav">
                <li ><Link to="/categories" >Categories</Link></li>
                <li ><Link to="/events/new" >Add an Event</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;