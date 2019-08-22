import React from 'react';
import PropTypes from 'prop-types';

const CourseCard = ({ course }) => (
  <div className="course-card">
    <img src={course.image_link} alt="Course Thumbnail" height="100" width="100" />
    <h4 className="title">{course.title}</h4>
    <p className="description">{course.description}</p>
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
