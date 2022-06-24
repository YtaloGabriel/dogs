import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Styles from './LoginCss/LoginForm.module.css';
import StylesBtn from '../Forms/FormsCss/Button.module.css';
import Head from '../Helper/Head';

// Função geral da parte de login do formulário
const LoginForm = () => {
  const username = useForm('');
  const password = useForm('');

  const { userLogin, error, loading } = React.useContext(UserContext);

  // Verificar existência de usuário e, caso exista, pegar seu token.
  const handleLogin = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={Styles.form} onSubmit={handleLogin}>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Senha" type="password" {...password} />
        {loading ? (
          <Button disabled text="Carregando..." />
        ) : (
          <Button text="Entrar" />
        )}
        <Error error={error && 'Dados incorretos.'} />
      </form>
      <Link className={Styles.lost} to="/login/lost">
        Perdeu a Senha?
      </Link>
      <div className={Styles.create}>
        <h2 className={Styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={StylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
