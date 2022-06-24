import React from 'react';
import Styles from './UserCss/UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b),
    );

    setGraph(graphData);
  }, [data]);

  if (data) {
    return (
      <section className={`${Styles.graph} animeLeft`}>
        <div className={`${Styles.total} ${Styles.graphItem}`}>
          <p>Acessos: {total}</p>
        </div>
        <div className={Styles.graphItem}>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: '#fff',
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: '#333',
              },
            }}
          />
        </div>
        <div className={Styles.graphItem}>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph} />
          </VictoryChart>
        </div>
      </section>
    );
  } else {
    return <h3>Poste uma imagem para poder visualizar os dados.</h3>;
  }
};

export default UserStatsGraphs;
