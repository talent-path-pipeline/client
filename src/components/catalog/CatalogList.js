/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { CatalogCard } from '..';
import '../../css/catalog/CatalogList.scss';

const CatalogList = ({ courses }) => (
  <div className="list-all-courses">
    {courses ? (
      courses.map(course => <CatalogCard course={course} key={course.slug} />)
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
};

export default CatalogList;
