import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import NotFound from '../NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

const User = () => {
  const { data } = React.useContext(UserContext);

  if (data) {
    return (
      <section className="container">
        <Head title="Minha Conta" />
        <UserHeader />
        <Routes>
          <Route path="/dogs/" element={<Feed user={data.id} />} />
          <Route path="/dogs/post" element={<UserPhotoPost />} />
          <Route path="/dogs/stats" element={<UserStats />} />
          <Route path="/dogs/*" element={<NotFound />} />
        </Routes>
      </section>
    );
  } else {
    return null;
  }
};

export default User;
