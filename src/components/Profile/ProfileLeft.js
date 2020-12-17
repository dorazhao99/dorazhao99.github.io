import React from 'react';
import { Link } from 'gatsby';
import css from './ProfileLeft.css';

const backgroundOptions = {
  pink: "#EBBEBE",
  blue: "#80BCDD",
  yellow: "#FFD482",
}

const ProfileLeft = props => {
  const { title, color, link, description, image } = props;
  const background = backgroundOptions[color]

  return (
    <div className = "container-left">
      <div className = "imageWrapper">
        <div className = "box" style = {{ backgroundColor: background}}>
          <img className = "boxImage" src = {image} />
        </div>
      </div>
      <div className = "textWrapper-profile">
        <p className = "title">
          {title}
        </p>
        <p className = "description">
          {description}
        </p>
        <a href={link} target="_blank" className = "link-profile"> SEE MORE ⟶ </a>
      </div>
    </div>
  );
};

export default ProfileLeft;
