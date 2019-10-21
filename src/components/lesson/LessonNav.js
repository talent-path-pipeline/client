import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonNav.scss';

const LessonNav = ({prev_path, next_path}) => (
  <div className="lesson-nav">
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

LessonNav.propTypes = {
  prev_path: PropTypes.string.isRequired,
  next_path: PropTypes.string.isRequired,
};

export default LessonNav;