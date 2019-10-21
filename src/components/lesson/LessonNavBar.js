import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonNavBar.scss';

const LessonNavBar = ({order, base_path, course_size}) => (
  <div className="lesson-nav">
    { order
      ? <button type="button" className='btn prev-btn'>
        <Link to={`/courses/${base_path}/${order - 1}`} >← Prev</Link>
      </button>
      : ''}
    { order < course_size - 1
      ? <button type="button" className="btn next-btn">
        <Link to={`/courses/${base_path}/${order + 1}`}>Next →</Link>
      </button>
      : ''}
  </div>
);

LessonNavBar.propTypes = {
  order: PropTypes.number,
  base_path: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

LessonNavBar.defaultProps = {
  order: undefined,
};

export default LessonNavBar;