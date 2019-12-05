import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutInfo.scss';
import InfoCard from './InfoCard';
import AboutTeam from './AboutTeam';
import { INFO_CARDS } from '../../data';

const AboutInfo = ({ title, subtitle, image_link }) => (
  <div className="about-info">
    <div className="image-container">
      <div className="image-overlay" />
      <img src={image_link} alt="About Splash" className="about-splash" />
    </div>
    <h2 className="title">{title}</h2>
    <p className="subtitle">{subtitle}</p>
    <hr className="line" />
    <section className="info-card-section">
      {INFO_CARDS.map(card_info => (
        <InfoCard card_info={card_info} key={card_info.img_alt} />
      ))}
    </section>
    <p className="subtitle">Meet The Team</p>
    <hr className="line" />
    <AboutTeam />
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
