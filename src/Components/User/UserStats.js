import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  const getStats = React.useCallback(async () => {
    const { url, options } = GET_STATS();
    await request(url, options);
  }, [request])

  React.useEffect(() => {
    getStats();
  }, [getStats]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
