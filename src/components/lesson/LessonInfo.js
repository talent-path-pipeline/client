import React from 'react';
import { LessonNavBar, YouTubeInfo } from '..';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonInfo.scss';

const LessonInfo = ({ lesson, course_slug, course_size }) => {
  const { title, description, order } = lesson;
  const base_link = `/courses/${course_slug}/`;
  const prev_path = order > 0 ? `${base_link}${order - 1}` : undefined;
  const next_path = order < course_size - 1 ? `${base_link}${order + 1}` : undefined;
  return (
    <div className="lesson-info">
      <LessonNavBar className="lesson-nav" prev_path={prev_path} next_path={next_path} />
      <h4 className="lesson-playing">Now Playing:</h4>
      <h2>{title || 'Lesson'}</h2>
      <hr className="breakline" />
      <p className="lesson-description">{description || 'No description provided'}</p>
      <hr className="breakline" />
      <YouTubeInfo lesson={lesson} />
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
    length: PropTypes.number.isRequired,
    video_id: PropTypes.string.isRequired,
    video_title: PropTypes.string.isRequired,
    video_description: PropTypes.string.isRequired,
    channel_id: PropTypes.string.isRequired,
    channel_name: PropTypes.string.isRequired,
  }).isRequired,
  course_slug: PropTypes.string.isRequired,
  course_size: PropTypes.number.isRequired,
};

export default LessonInfo;
