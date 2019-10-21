import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonNavBar.scss';

const LessonNavBar = ({prev_path, next_path, className}) => (
  <div className={`lesson-nav-bar ${className}`}>
    { prev_path
      ? <button type="button" className='btn prev-btn'>
        <Link to={prev_path} >← Prev</Link>
      </button>
      : ''}
    { next_path
      ? <button type="button" className="btn next-btn">
        <Link to={next_path}>Next →</Link>
      </button>
      : ''}
  </div>
);

LessonNavBar.propTypes = {
  prev_path: PropTypes.string,
  next_path: PropTypes.string,
  className: PropTypes.string.isRequired,
};

LessonNavBar.defaultProps = {
  prev_path: undefined,
  next_path: undefined,
};

export default LessonNavBar;