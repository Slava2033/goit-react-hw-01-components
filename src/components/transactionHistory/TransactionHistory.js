import React from 'react';
import TabbleHead from './tabbleHead/TabbleHead';
import TabbleLine from './tabbleLine/TabbleLine';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return(
      <table className={styles.transaction__history}>
        <thead>
          <TabbleHead />
        </thead>
        <tbody>
          {
          items.map(el => (
            <TabbleLine key={el.id} type={el.type} amount={el.amount} currency={el.currency}/>
          ))
          }
        </tbody>
      </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}

export default TransactionHistory;