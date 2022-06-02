import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input label="Usuário" type="text" />
        <Input label="Senha" type="password" />
        <Button text="Entrar" />
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
