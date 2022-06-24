import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import Styles from './UserCss/UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('Título');
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/dogs/account':
        setTitle('Minha Conta');
        break;
      case '/dogs/account/stats':
        setTitle('Estatísticas');
        break;
      case '/dogs/account/post':
        setTitle('Postar Foto');
        break;
      default:
        setTitle('Dogs');
    }
  }, [location]);
  return (
    <header className={Styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
