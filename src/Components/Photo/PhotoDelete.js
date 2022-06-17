import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Styles from './PhotoCss/PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm('Tem certeza que deseja apagar a foto?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button className={Styles.delete} disabled>
          Excluindo...
        </button>
      ) : (
        <button className={Styles.delete} onClick={handleClick}>
          Excluir
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
