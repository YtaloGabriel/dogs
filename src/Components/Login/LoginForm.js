import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

// Função geral da parte de login do formulário
const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  // Fazer o feth diretamente caso exista token no localstorage
  React.useEffect(() => {
    const pickToken = window.localStorage.getItem('token');
    if (pickToken) getUser(pickToken);
  }, []);

  // Pegar dados do usuário a partir do token
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
  };

  // Verificar existência de usuário e, caso exista, pegar seu token.
  const handleLogin = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      window.localStorage.setItem('token', json.token);

      getUser(json.token);
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
