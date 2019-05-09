import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from './logo.png';

const Header = () => (
  <header className="header">
    <nav className="header__menu">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Logo" />
      </Link>
    </nav>
  </header>
);

export default Header;
