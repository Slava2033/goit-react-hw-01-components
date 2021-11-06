import React from "react";
import PropTypes from "prop-types";
import styles from './ProfileListItem.module.css';

const ProfileListItem = ({label, quantity}) => {
  return (
      <li className={styles.stats__item}>
        <span className={styles.label}>{label}</span>
        <span className={styles.quantity}>{quantity}</span>
      </li>
  );
};

ProfileListItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
}

export default ProfileListItem;
