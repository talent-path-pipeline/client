import React from 'react';
import PropTypes from 'prop-types';
import '../../css/pages/ErrorPage.scss';

const ErrorPage = ({img, title, desc}) => (
  <div className="error">
    <img className="image" src={img} alt={title} />
    <h1>{title}</h1>
    <h3>{desc}</h3>
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
  desc: 'Page not found',
}

export default ErrorPage;