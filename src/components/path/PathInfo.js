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
    {/* TODO: update d20 image to one of the right color at least */}
    <img className="path-logo" src="./images/crimsond20.png" alt="D20" />
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
  title: 'Dungeon Master Path',
  subtitle: 'Your path to becoming a successfull DM!',
  image_link: '',
};

export default PathInfo;
