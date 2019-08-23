import React from 'react';
import PropTypes from 'prop-types';
import { CourseCard } from '..';
import '../../css/path/PathTree.scss';

const PathTree = ({ courses }) => (
  // TODO: sort courses by order
  <div className="path-tree">
    {courses.map(course => (
      <CourseCard course={course} key={course.order} />
    ))}
  </div>
);

PathTree.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image_link: PropTypes.string,
      order: PropTypes.number,
      lessons: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
};

export default PathTree;
