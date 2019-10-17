import React from 'react';
import PropTypes from 'prop-types';
// import YouTube from 'react-youtube';
// https://www.npmjs.com/package/react-youtube
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ lesson, course_size, base_path }) => (
  <div className="lesson" key={lesson.order}>
    <LessonVideo title={lesson.title} src={lesson.src} />
    <LessonInfo lesson={lesson} course_size={course_size} base_path={base_path} />
  </div>
);

Lesson.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  course_size: PropTypes.number.isRequired,
  base_path: PropTypes.string.isRequired,
};

export default Lesson;
