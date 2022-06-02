import React from 'react';
import Styles from './FormsCss/Button.module.css';

const Button = ({ text, ...props }) => {
  return (
    <button {...props} className={Styles.button}>
      {text}
    </button>
  );
};

export default Button;
