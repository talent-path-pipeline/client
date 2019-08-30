import React from 'react';
import PropTypes from 'prop-types';
import '../../css/path/PathInfo.scss';

const PathInfo = ({ title, description, image_link }) => (
  <div className="path-info">
    <img src={image_link} alt="Path Splash" className="path-splash" />
    <h2 className="title">{title}</h2>
    <p className="description">{description}</p>
  </div>
);

PathInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_link: PropTypes.string,
};

PathInfo.defaultProps = {
  title: 'Software Engineering Path',
  description: 'This is the Full-Stack SE path',
  image_link: '',
};

export default PathInfo;
