import React from 'react';
import StatisticsList from './statisticsList/StatisticsList';
import PropTypes from "prop-types";
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) => {

  return(
      <section className={styles.statistics}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <StatisticsList stats={stats} />
      </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}


export default Statistics;