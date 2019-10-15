import React from 'react';
import { LessonNav } from '..';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

const LessonInfo = ({ title, description, order, base_path, course_size }) => (
  <div className="lesson-info">
    <LessonNav order={order} base_path={base_path} course_size={course_size} />
    <h4 id="lesson-playing">Now playing:</h4>
    <h2>{title || 'Lesson'}</h2>
    <hr />
    <p id="lesson-description">{description || 'No description provided'}</p>
  </div>
);

LessonInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default LessonInfo;
