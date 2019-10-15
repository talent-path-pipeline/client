import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonNav.scss';

const LessonNav = ({order, base_path, course_size}) => (
  <div className="lesson-nav">
    { order !== 0
      ? <button type="button" className='btn'>
        <Link to={`/courses/${base_path}/${order - 1}`} >← Prev</Link>
      </button>
      : ''}
    { order !== course_size - 1
      ? <button type="button" className="btn">
        <Link to={`/courses/${base_path}/${order + 1}`}>Next →</Link>
      </button>
      : ''}
  </div>
);

LessonNav.propTypes = {
  order: PropTypes.number.isRequired,
  base_path: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

export default LessonNav;