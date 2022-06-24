import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import Styles from './LoginCss/Login.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;

  return (
    <section className={Styles.login}>
      <div className={Styles.forms}>
        <Routes>
          <Route path="/dogs/" element={<LoginForm />} />
          <Route path="/dogs/create" element={<LoginCreate />} />
          <Route path="/dogs/lost" element={<LoginPasswordLost />} />
          <Route path="/dogs/reset" element={<LoginPasswordReset />} />
          <Route path="/dogs/*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
