import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import Styles from './PhotoCss/PhotoContent.module.css';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <section className={Styles.photo}>
      <div className={Styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={Styles.details}>
        <div>
          <p className={Styles.author}>
            <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
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
