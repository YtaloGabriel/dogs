import React from 'react';
import Styles from './FeedCss/FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={Styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={Styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
