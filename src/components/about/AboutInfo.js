import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutInfo.scss';
import AboutCards from './AboutCards';

const AboutInfo = ({ title, subtitle, image_link }) => (
  <div className="about-info">
    <div className="image-container">
      <div className="image-overlay" />
      <img src={image_link} alt="About Splash" className="about-splash" />
    </div>
    <h2 className="title">{title}</h2>
    <p className="subtitle">{subtitle}</p>
    <hr className="line" />
    <AboutCards/>
  </div>
);

AboutInfo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image_link: PropTypes.string,
};

AboutInfo.defaultProps = {
  title: 'How do we make you an expert Dungeon Master?',
  subtitle: 'About Stonehaven Academy',
  image_link: '',
};

export default AboutInfo;
