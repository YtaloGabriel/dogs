import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import Styles from './UserCss/UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('Título');
  const location = useLocation();
  console.log(location);

  React.useEffect(() => {
    switch (location.pathname) {
      case '/account':
        setTitle('Minha Conta');
        break;
      case '/account/stats':
        setTitle('Estatísticas');
        break;
      case '/account/post':
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
