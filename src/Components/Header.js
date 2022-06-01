import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './css/Header.module.css';

const Header = () => {
  return (
    <header className={Styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
