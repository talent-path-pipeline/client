import React from 'react';
import PropTypes from 'prop-types';
import '../../css/pages/ErrorPage.scss';

const ErrorPage = ({img, title, desc}) => (
  <div className="error">
    <div className="error-container">
      {/* <img className="image" src={img} alt={title} /> */}
      <img src="/images/critical-failure.jpg" alt={title}/>
      <div className="error-text">
        <h1>{title}</h1>
        <h3>{desc}</h3>
        <h4>"While trying to disarm the trapped door you snip the wrong wire and are engulfed in a blast of the fire as the trap is triggered.
           You take 3d6 damage and your eyebrows have been singed off."</h4>
      </div>
    </div>
  </div>
)

ErrorPage.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

ErrorPage.defaultProps = {
  img: 'https://rpgrunkleplaysgames.files.wordpress.com/2017/04/art-mco-critical-failure.jpg',
  title: '404 Error',
  desc: 'You rolled a critical failure!',
}

export default ErrorPage;