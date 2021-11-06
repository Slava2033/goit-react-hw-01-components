import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabbleLine.module.css';

let i = 0;
const Color = () => {
  i++;
  return(i%2===0 ? {backgroundColor : 'rgb(241, 192, 217)'} : {backgroundColor : 'rgb(78, 41, 60)'})
}

const TabbleLine = ({type,amount,currency}) => {
  return(
    <tr style={Color()} >
      <td className = {styles.line}>{type}</td>
      <td className = {styles.line}>{amount}</td>
      <td className = {styles.line}>{currency}</td>
    </tr>
  )
}

TabbleLine.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
}

export default TabbleLine;