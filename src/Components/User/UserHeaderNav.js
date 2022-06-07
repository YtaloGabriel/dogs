import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as Photos } from '../../Assets/feed.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import Styles from './UserCss/UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={Styles.nav}>
      <NavLink to="/account" end>
        <Photos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && 'Estatísticas'}
      </NavLink>
      <button onClick={userLogout}>
        <Exit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
