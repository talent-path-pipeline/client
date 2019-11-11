import React from 'react';
import PropTypes from 'prop-types';
import '../../css/pages/ErrorPage.scss';

const FAIL_OPTIONS = [
  `While trying to disarm the trapped door you snip the wrong wire and are engulfed in a 
    blast of the fire as the trap is triggered. You take 3d6 fire damage and your eyebrows 
    have been singed off.`,
  `As you look around you trying to get your bearings, you decide it's a good idea to stare 
    straight at the sun for a while, and are temporarily blinded.`,
  `While trying to reach forward to calm and pet the bear, you accidentally punch it in 
    the face. Roll for initiative.`,
  `You aim your bow at the orc, steady your arrow, and pull back the string. You pull back 
    a little too far and the string snaps, smacking you in the face for 1d4 damage. 
    The orc laughs.`,
];

const ErrorPage = ({ img_link, title, desc }) => (
  <div className="error-page">
    <img className="error-image" src={img_link} alt={title} />
    <div className="error-text">
      <h1>{title}</h1>
      <h3>{desc}</h3>
      <h4>{FAIL_OPTIONS[Math.floor(Math.random() * FAIL_OPTIONS.length)]}</h4>
    </div>
  </div>
);

ErrorPage.propTypes = {
  img_link: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

ErrorPage.defaultProps = {
  img_link: '/images/critfailoutline.png',
  title: '404: Page Not Found',
  desc: 'You rolled a critical failure!',
};

export default ErrorPage;
