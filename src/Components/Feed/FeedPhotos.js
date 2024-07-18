import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import Styles from './FeedCss/FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  const fetchPhotos = React.useCallback(async () => {
    const totalPhotos = 6;
    const { url, options } = PHOTOS_GET(page, totalPhotos, user);
    const { response, json } = await request(url, options);
    if (response && response.ok && json.length < totalPhotos) setInfinite(false);
  }, [page, request, setInfinite, user])

  React.useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={`${Styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
