import React from "react";
import PropTypes from "prop-types";
import ProfileListItem from "./profileListItem/ProfileListItem";
import styles from './ProfileList.module.css';

const ProfileList = ({stats}) => {
  return (
    <ul className={styles.stats}>
      {
      Object.keys(stats).map(el =>(
          <ProfileListItem key={el} label={el} quantity={stats[el]}/>
        ))
      }
    </ul>
  );
};

ProfileList.propTypes = {
  stats: PropTypes.object.isRequired
}

export default ProfileList;
