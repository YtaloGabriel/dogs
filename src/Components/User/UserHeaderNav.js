import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as Photos } from '../../Assets/feed.svg';
import { ReactComponent as AddPhoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import Styles from './UserCss/UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${Styles.mobileButton} ${
            mobileMenu && Styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? Styles.navMobile : Styles.nav} ${
          mobileMenu && Styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
