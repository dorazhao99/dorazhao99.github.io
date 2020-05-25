import React from 'react'
import css from './ProfileLeft.css';

const ProfileLeft = props => {
  const { title, color, description } = props;
  return (
    <div className = "container">
      <div className = "imageWrapper">
        Hi
      </div>
      <div className = "textWrapper">
        <p className = "title">
          {title}
        </p>
        <p className = "description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProfileLeft;
