import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../css/course/CourseCard.scss';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <Link to={`/courses/${course.slug}`}>
      <img
        className="image"
        src={`./images/${course.image_name}`}
        alt="Course Thumbnail"
      />
      <div className="course-info">
        <h4 className="title">{course.title}</h4>
        <p className="description">{course.description}</p>
        {/* TODO: <ProgressBar value={completed} max={course.lessons.length} label="Lessons" /> */}
      </div>
    </Link>
  </div>
);

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image_link: PropTypes.string,
    lessons: PropTypes.arrayOf(PropTypes.object),
    slug: PropTypes.string,
  }).isRequired,
};

export default CourseCard;
