import React from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

const LessonInfo = ({ title, desc}) => (
  <div className="lesson-info">
    <h4 id="lesson-playing">Now playing:</h4>
    <h2>{title || 'Lesson'}</h2>
    <hr />
    <p id="lesson-description">{desc || 'No description provided'}</p>
  </div>
);

LessonInfo.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default LessonInfo;