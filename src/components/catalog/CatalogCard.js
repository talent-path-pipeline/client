import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProgressBar } from '..';
import '../../css/catalog/CatalogCard.scss';
import { tokenServices } from '../../utils';

const CatalogCard = ({ course, num_completed }) => (
  <Link to={`/courses/${course.slug}`} className="catalog-card">
    <div
      className="course-image"
      alt={course.title}
      style={{ backgroundImage: `url(./images/${course.image_name})` }}
    />
    <div className="course-info">
      <h4 className="course-title">{course.title}</h4>
      <p className="course-description">{course.description}</p>
      {tokenServices.getToken() ? (
        <ProgressBar value={num_completed} max={course.lessons.length} label="Lessons" />
      ) : (
        ''
      )}
    </div>
  </Link>
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
  num_completed: PropTypes.number.isRequired,
};

export default CatalogCard;
