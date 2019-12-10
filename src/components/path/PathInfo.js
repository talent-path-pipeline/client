import React from 'react';
import PropTypes from 'prop-types';
import '../../css/path/PathInfo.scss';

const PathInfo = ({ title, subtitle, subtitle2, image_link }) => (
  <div className="path-info">
    <section className="header-container">
      <div className="image-overlay" />
      <div
        className="header-splash"
        alt="Path Splash"
        style={{ backgroundImage: `url(${image_link})` }}
      />
      <div className="header-text">
        <h1 className="header-title">{title}</h1>
        <h3 className="header-subtitle">{subtitle}</h3>
      </div>
    </section>
    <img className="path-logo" src="./images/crimsond20.png" alt="D20" />
    <h3 className="path-subtitle2">{subtitle2}</h3>
    <hr className="breakline" />
  </div>
);

PathInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitle2: PropTypes.string,
  image_link: PropTypes.string,
};

PathInfo.defaultProps = {
  title: 'The DM Path',
  subtitle: 'Your path to becoming a successfull Dungeon Master!',
  subtitle2: 'Core Coursework',
  image_link: '',
};

export default PathInfo;
