import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Senha" type="password" {...password} />
        <Button text="Entrar" />
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
