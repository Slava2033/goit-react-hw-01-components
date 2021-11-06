import React from 'react';
import StatisticsListItem from './statisticsListItem/StatisticsListItem';
import PropTypes from "prop-types";
import styles from './StatisticsList.module.css';

const StatisticsList = ({stats}) => {
  return (
    <ul className={styles.statList}>
      {
        stats.map(el => (
          <StatisticsListItem key={el.id} label={el.label} percentage={el.percentage}/>
        ))
      }
    </ul>
  )
}

StatisticsList.propTypes = {
  stats: PropTypes.array
}

export default StatisticsList;