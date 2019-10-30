import React from 'react';
import { LessonNavBar } from '..';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

const LessonInfo = ({ lesson, base_path, course_size }) => {
  const {
    title,
    description,
    order,
    video_id,
    channel_name,
    channel_id,
    video_title,
    video_description,
  } = lesson;
  const base_link = `/courses/${base_path}/`;
  const prevPath = order > 0 ? `${base_link}${order - 1}` : undefined;
  const nextPath = order < course_size - 1 ? `${base_link}${order + 1}` : undefined;
  return (
    <div className="lesson-info">
      <LessonNavBar
        className="lesson-nav"
        order={order}
        base_path={base_path}
        course_size={course_size}
        prev_path={prevPath}
        next_path={nextPath}
      />
      <h4 className="lesson-playing">Now Playing:</h4>
      <h2>{title || 'Lesson'}</h2>
      <hr />
      <p className="lesson-description">{description || 'No description provided'}</p>
      <hr />
      <div className="yt-info">
        <h3 className="subheader">YouTube credits:</h3>
        <p className="yt-chan">
          <span className="title">Creator: </span>
          <a
            href={`https://www.youtube.com/channel/${channel_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {channel_name || 'YouTube Channel'}
          </a>
        </p>
        <p className="yt-title">
          <span className="title">Video Title: </span>
          <a
            href={`https://www.youtube.com/watch?v=${video_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video_title || 'Original YouTube Video'}
          </a>
        </p>
        <p className="yt-desc">
          <span className="title">Video Description: </span>
          {video_description || 'YouTube Description'}
        </p>
      </div>
    </div>
  );
};

LessonInfo.propTypes = {
  lesson: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    order: PropTypes.number.isRequired,
    start: PropTypes.number,
    end: PropTypes.number,
    video_id: PropTypes.string.isRequired,
    video_title: PropTypes.string.isRequired,
    video_description: PropTypes.string.isRequired,
    channel_id: PropTypes.string.isRequired,
    channel_name: PropTypes.string.isRequired,
  }).isRequired,
  base_path: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

export default LessonInfo;
