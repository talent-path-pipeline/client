import React from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutInfo.scss';
import AboutCards from './AboutCards';
import AboutTeam from './AboutTeam';
import QandA from '../support/QandA';

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
    <AboutTeam/>
    <p className="subtitle">Specials Thanks To</p>
    <hr className="line" />
    <QandA
      questions_answers={special_thanks_list}
    />
  </div>
);

const special_thanks_list = [
  {
    key: 1,
    question: 'YouTube',
    answer: `Thank you for giving us videos!`,
  },
  {
    key: 2,
    question: `Sam's Girlfriend`,
    answer: `Thank you for putting your time into helping build the curriculum!`,
  },
  {
    key: 3,
    question: 'Stranger Things',
    answer: `Thank you for bringing DnD back to the mainstream and inspiring a new generation of DnD players!`,
  },
  {
    key: 4,
    question:
      'Kanye West',
    answer: `Thank you for blessing this world with dope shoes!  Yeezy... please sponsor us.`,
  },
];

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
