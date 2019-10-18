import React from 'react';
import { LessonNav } from '..';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

const getVideoURL = embedLink => embedLink.replace('embed/', 'watch?v=');

const LessonInfo = ({ lesson, base_path, course_size }) => {
  const {title, description, order, src, yt_chan_name, yt_chan_src, yt_title, yt_desc} = lesson;

  return (
    <div className="lesson-info">
      <LessonNav order={order} base_path={base_path} course_size={course_size} />
      <h4 id="lesson-playing">Now playing:</h4>
      <h2>{title || 'Lesson'}</h2>
      <hr />
      <p id="lesson-description">{description || 'No description provided'}</p>
      <hr />

      <div id="yt-info">
        <h3 className="subheader">Youtube credits</h3>
        <p id="yt-chan">
          <span className="title">Creator: </span>
          <a href={yt_chan_src} target="_blank" rel="noopener noreferrer">{yt_chan_name || 'YouTube Channel goes here'}</a>
        </p>
        <p id="yt-title">
          <span className="title">Video title: </span>
          <a href={getVideoURL(src)} target="_blank" rel="noopener noreferrer">{yt_title || 'Original YouTube Video'}</a>
        </p>
        <p id="yt-desc">
          <span className="title">Video Description: </span>
          {yt_desc || 'YouTube description goes here'}
        </p>
      </div>
    </div>
  );
};

LessonInfo.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    yt_chan_name: PropTypes.string.isRequired,
    yt_chan_src: PropTypes.string.isRequired,
    yt_title: PropTypes.string.isRequired,
    yt_desc: PropTypes.string.isRequired,
  }).isRequired,
  base_path: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

export default LessonInfo;
