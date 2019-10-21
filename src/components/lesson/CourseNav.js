import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import '../../css/lesson/CourseNav.scss';

const CourseNav = ({prev_slug, next_slug}) => (
  <div className="lesson-nav">
    { prev_slug
      ? <button type="button" className='btn prev-btn'>
        <Link to={`/courses/${prev_slug}/0`} >← Prev</Link>
      </button>
      : ''}
    { next_slug
      ? <button type="button" className="btn next-btn">
        <Link to={`/courses/${next_slug}/0`}>Next →</Link>
      </button>
      : ''}
  </div>
);

CourseNav.propTypes = {
  prev_slug: PropTypes.string.isRequired,
  next_slug: PropTypes.string.isRequired,
};

export default CourseNav;