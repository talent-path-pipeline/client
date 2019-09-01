import React from 'react';
import PropTypes from 'prop-types';
import '../../css/path/PathInfo.scss';

const PathInfo = ({ title, subtitle, image_link }) => (
  <div className="path-info">
    <div className="image-container">
      <div className="image-overlay" />
      <img src={image_link} alt="Path Splash" className="path-splash" />
    </div>
    <h2 className="title">{title}</h2>
    <img className="path-logo" src="./images/crimsond20.png" alt="Crimson D20 Dice"/>
    <p className="subtitle">{subtitle}</p>
    <hr className="line" />
  </div>
);

PathInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image_link: PropTypes.string,
};

PathInfo.defaultProps = {
  title: 'Software Engineering Path',
  subtitle: 'This is the Full-Stack SE path',
  image_link: '',
};

export default PathInfo;
