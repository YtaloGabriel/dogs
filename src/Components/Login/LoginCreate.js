import React from 'react';
import { USER_CREATE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const createUser = async (event) => {
    event.preventDefault();
    const { url, options } = USER_CREATE({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };

  return (
    <section className="animeLeft">
      <Head title="Criar Conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={createUser}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled text="Cadastrando..." />
        ) : (
          <Button text="Cadastrar" />
        )}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
