import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <nav className="nav-wrapper">
        <div className="container">
          <Link href="#" className="brand-logo" to="/">
            Fresh Chicken
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="badges.html">
                <i class="shopping cart icon" />
              </a>
            </li>
            <li className="user1">
              <Link to="/chickens/add">
                <i className="plus icon" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </nav>
  );
};

export default Nav;
