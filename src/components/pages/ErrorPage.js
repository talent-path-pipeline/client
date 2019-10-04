import React from 'react';
import PropTypes from 'prop-types';

const ErrorPage = ({title, desc}) => (
  <div>
    <h1>{title}</h1>
    <h3>{desc}</h3>
  </div>
)

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ErrorPage;