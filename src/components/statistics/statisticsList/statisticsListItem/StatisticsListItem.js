import React from 'react';
import PropTypes from "prop-types";
import styles from './StatisticsListItem.module.css';

const randomColor = () => ({
  backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16)}
  );

const StatisticsListItem = ({label, percentage}) => {
  return (
    <li style={randomColor()} className={styles.statList__item}>
      <span className={styles.statList__label}>{label}</span>
      <span className={styles.statList__percentage}>{percentage}%</span>
    </li>
  )
}

StatisticsListItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number
}


export default StatisticsListItem;