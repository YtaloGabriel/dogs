import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './css/Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';

const Header = () => {
  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link className={Styles.logo} to="/">
          <Dogs />
        </Link>
        <Link className={Styles.login} to="/login">
          Entrar / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
