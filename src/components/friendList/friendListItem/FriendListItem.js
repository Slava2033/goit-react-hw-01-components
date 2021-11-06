import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import {checkImg} from '../../helpers/checkImg.js';

const styleColor = (param) => ({
  backgroundColor: param ? 'green' : 'red'
})

const FriendListItem = ({avatar, name, isOnline}) => {
  return(
    <li className={styles.list__item}>
      <span className={styles.list__status} style={styleColor(isOnline)}>{isOnline}</span>
      <img className={styles.list__avatar} src={checkImg(avatar)} alt=''/>
      <p className={styles.list__name}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;