import React from 'react';
import { COMMENT_POST } from '../../api';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Styles from './PhotoCss/PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  };

  return (
    <form
      className={`${Styles.form} ${single ? Styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={Styles.textarea}
        id="comment"
        name="comment"
        placeholder="Enviar comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={Styles.button}>
        <Send />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
