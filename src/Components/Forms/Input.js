import React from 'react';
import Styles from './FormsCss/Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={Styles.wrapper}>
      <label htmlFor={name} className={Styles.label}>
        {label}
      </label>
      <input className={Styles.input} type={type} name={name} />
      <p className={Styles.error}>Error</p>
    </div>
  );
};

export default Input;
