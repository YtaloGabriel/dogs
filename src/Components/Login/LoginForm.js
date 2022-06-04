import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

// Função geral da parte de login do formulário
const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  const { userLogin } = React.useContext(UserContext);

  // Verificar existência de usuário e, caso exista, pegar seu token.
  const handleLogin = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
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
