import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/catalog/CatalogCard.scss';

const CatalogCard = ({ course }) => (
  <div className="course-card">
    <Link to={`/${course.slug}`}>
      <img className="course-image" src={course.image_link} alt={course.title} />
      <p className="course-title">{course.title}</p>
      {/* TODO: calculate progress and display a progress bar component
      <p className="course-progress">
        {course.completedCourses} of {course.totalCourses} lessons completed
      </p> */}
    </Link>
  </div>
);

CatalogCard.propTypes = {
  course: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image_link: PropTypes.string,
    order: PropTypes.number,
    lessons: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default CatalogCard;
