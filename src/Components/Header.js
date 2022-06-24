import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './css/Header.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={Styles.header}>
      <nav className={`${Styles.nav} container`}>
        <Link className={Styles.logo} to="/dogs">
          <Dogs />
        </Link>
        {data ? (
          <Link className={Styles.login} to="/dogs/login">
            {data.nome}
          </Link>
        ) : (
          <Link className={Styles.login} to="/dogs/login">
            Entrar / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
