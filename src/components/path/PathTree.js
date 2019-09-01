import React from 'react';
import PropTypes from 'prop-types';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { CourseCard } from '..';

// import 'react-vertical-timeline-component/style.min.css';
import '../../css/path/VerticalTimeline.scss';
import '../../css/path/VerticalTimelineElement.scss';
import '../../css/path/PathTree.scss';

const PathTree = ({ courses }) => (
  // TODO: sort courses by order
  
  <div className="path-tree">
    <VerticalTimeline layout='1-column'>
      {courses.map(course => (
        <VerticalTimelineElement>
          <CourseCard course={course} key={course.order} />
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
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
