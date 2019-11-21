import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutInfo.scss';
import AboutCards from './AboutCards';
import AboutTeam from './AboutTeam';
import QandA from '../support/QandA';
// helpers
import teamObject from '../../data/memberInfo';
import thanksObject from '../../data/thanksInfo';

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
    <p className="subtitle">Meet The Team</p>
    <hr className="line" />
    <AboutTeam memberObject={teamObject}/>
    <p className="subtitle">Specials Thanks To</p>
    <hr className="line" />
    <AboutTeam memberObject={thanksObject}/>
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
