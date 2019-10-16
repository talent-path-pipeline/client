import React from 'react';
import PropTypes from 'prop-types';
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ title, src, description, order, course_size, base_path }) => (
  <div className="lesson" key={order}>
    <LessonVideo title={title} src={src} />
    <LessonInfo title={title} order={order} description={description} course_size={course_size} base_path={base_path} />
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
