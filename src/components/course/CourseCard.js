import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../css/course/CourseCard.scss'

const CourseCard = ({ course }) => (
  <div className="course-card">
    <Link to={`/${course.title.toLowerCase()}`}>
      <img className="image" src={course.image_link} alt="Course Thumbnail" />
      <div className="course-info">
        <h4 className="title">{course.title}</h4>
        <p className="description">{course.description}</p>
      </div>
    </Link>
    {/* TODO: progress bar calculation */}
  </div>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image_link: PropTypes.string,
    lessons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CourseCard;
