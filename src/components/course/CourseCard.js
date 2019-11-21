import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProgressBar } from '..';

import '../../css/course/CourseCard.scss';

const CourseCard = ({ course }) => {
  // TODO: actually get this from the back end
  const completed = 0;
  return (
    <Link to={`/courses/${course.slug}`} className="course-card">
      <div
        className="course-image"
        style={{ backgroundImage: `url(./images/${course.image_name})` }}
        alt={course.title}
      />
      <div className="course-info">
        <div className="course-text">
          <h4 className="course-title">{course.title}</h4>
          <p className="course-description">{course.description}</p>
        </div>
        <ProgressBar value={completed} max={course.lessons.length} label="Lessons" />
      </div>
    </Link>
  );
};

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
