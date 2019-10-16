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
    <hr />
    <div id="yt-info">
      {/* link to YT chan, original video name, desc */}
      <p id="yt-chan">
        <span className="title">Creator: </span>
        Youtube channel
      </p>
      <p id="yt-title">
        <span className="title">Original video title: </span>
        Original Youtube Title
      </p>
      <p id="yt-desc">
        <span className="title">Original description: </span>
        Youtube description
      </p>
    </div>
  </div>
);

LessonInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  base_path: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

export default LessonInfo;
