import React from 'react';
import Image from '../Helper/Image';
import Styles from './FeedCss/FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={Styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={Styles.views}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
