import React from 'react';
import Styles from './css/Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <Dogs />
      <p>Dogs - 06/2022. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
