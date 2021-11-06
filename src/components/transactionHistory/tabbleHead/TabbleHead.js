import React from 'react';
import styles from './TabbleHead.module.css'

const TabbleHead = () => {
  return(
    <tr>
      <th className = {styles.head}>Type</th>
      <th className = {styles.head}>Amount</th>
      <th className = {styles.head}>Currency</th>
    </tr>
  )
}

export default TabbleHead;
