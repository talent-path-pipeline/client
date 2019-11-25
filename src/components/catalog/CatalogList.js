/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { CatalogCard } from '..';
import '../../css/catalog/CatalogList.scss';

const CatalogList = ({ courses, completed_lessons }) => (
  <div className="list-all-courses">
    {courses ? (
      courses.map(course => {
        const numCompleted = completed_lessons.filter(lesson => lesson.courseUuid === course.uuid);
        return <CatalogCard course={course} key={course.slug} num_completed={numCompleted.length} />;
      })
    ) : (
      <div className="no-courses" />
    )}
  </div>
);

CatalogList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image_link: PropTypes.string,
      order: PropTypes.number,
      lessons: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  completed_lessons: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};

export default CatalogList;
