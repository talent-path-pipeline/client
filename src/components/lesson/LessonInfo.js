import React from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

// TODO: add content channel link
// TODO: add description about channel and text from actual video
// TODO: add next and previous lesson buttons
const LessonInfo = ({ title, description }) => (
  <div className="lesson-info">
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
