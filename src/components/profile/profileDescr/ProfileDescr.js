import React from 'react';
import styles from './ProfileDescr.module.css';
import {checkImg} from '../../helpers/checkImg.js';

const ProfileDescr = ({user: {name, tag, location, avatar}}) => {
  return (
    <div className={styles.profile__description}>
      <img src={checkImg(avatar)} alt="user avatar" className={styles.profile__avatar} />
      <p className={styles.profile__name}>{name}</p>
      <p className={styles.profile__tag}>@{tag}</p>
      <p className={styles.profile__location}>{location}</p>
    </div>
  )
}


export default ProfileDescr;