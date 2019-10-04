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
  img: 'https://i.pinimg.com/474x/b2/a0/e3/b2a0e338f85f31a4a068276e662d8ff8.jpg',
  title: '404 Error',
  desc: 'Page not found',
}

export default ErrorPage;