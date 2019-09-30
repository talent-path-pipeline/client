import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProgressBar } from '..';
import '../../css/catalog/CatalogCard.scss';

const CatalogCard = ({ course }) => {
  // TODO: once connected to back-end, get number of completed lessons
  const completed = 0;
  return (
    <Link to={`/${course.slug}`} className="catalog-card">
      <div
        className="course-image"
        alt={course.title}
        style={{ backgroundImage: `url(${course.image_link})` }}
      />
      <div className="course-info">
        <h4 className="course-title">{course.title}</h4>
        <p className="course-description">{course.description}</p>
        <ProgressBar value={completed} max={course.lessons.length} label="Lessons" />
      </div>
    </Link>
  );
};

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
