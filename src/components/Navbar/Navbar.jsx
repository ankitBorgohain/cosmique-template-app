import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/cosmique-template-app"><h1 className="Navbar-logo">
       Cosmique
      </h1></NavLink>
      <ul className='Navbar-items '>
        <li><a>Get today's Horoscope</a></li>
        <li>|</li>
        <li><a>Live Feed</a></li>
      </ul>

    </header>
  );
};

export default Navbar;