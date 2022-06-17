import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import Styles from './PhotoCss/PhotoContent.module.css';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <section className={Styles.photo}>
      <div className={Styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={Styles.details}>
        <div>
          <p className={Styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={Styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={Styles.attributes}>
            <li>{photo.peso} Kg</li>
            <li>
              {photo.idade} {photo.idade === 1 ? 'Ano' : 'Anos'}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </section>
  );
};

export default PhotoContent;
