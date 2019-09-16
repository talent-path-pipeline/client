import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutInfo.scss';

const AboutInfo = ({ title, subtitle, image_link }) => (
  <div className="about-info">
    <div className="image-container">
      <div className="image-overlay" />
      <img src={image_link} alt="About Splash" className="about-splash" />
    </div>
    <h2 className="title">{title}</h2>
    <img className="about-logo" src="./images/crimsond20.png" alt="Crimson D20 Dice"/>
    <p className="subtitle">{subtitle}</p>
    <hr className="line" />
  </div>
);

AboutInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image_link: PropTypes.string,
};

AboutInfo.defaultProps = {
  title: 'Dungeon Master About',
  subtitle: 'How we are going to make you a successfull DM!',
  image_link: '',
};

export default AboutInfo;
