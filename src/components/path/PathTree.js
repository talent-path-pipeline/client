import React from 'react';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { CourseCard } from '..';

// import 'react-vertical-timeline-component/style.min.css';
import '../../css/path/VerticalTimeline.scss';
import '../../css/path/VerticalTimelineElement.scss';

const PathTree = ({ courses }) => (
  // TODO: sort courses by order

  <VerticalTimeline layout="1-column" className="path-tree">
    {courses.map(course => (
      <VerticalTimelineElement key={course.slug}>
        <CourseCard course={course} key={course.slug} />
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
);

PathTree.propTypes = {
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

export default PathTree;
