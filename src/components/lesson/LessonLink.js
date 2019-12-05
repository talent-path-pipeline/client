import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonLink.scss';

const formatTime = time => {
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = Math.floor((time % 3600) % 60);

  const hStr = h > 0 ? `${h}:` : '';
  const mStr = `${m < 10 ? '0' : ''}${m}:`;
  const sStr = `${s < 10 ? '0' : ''}${s}`;

  return `${hStr}${mStr}${sStr}`;
};

const LessonLink = ({ title, length, order, active, course_slug }) => {
  const TagType = active ? 'p' : Link;
  return (
    <TagType
      to={`/courses/${course_slug}/${order}`}
      className="lesson-link"
      onClick={ReactGA.event({
        category: 'Navigation',
        action: 'User clicked on a lesson link',
      })}
    >
      {title}
      <span className="video-length">{formatTime(length)}</span>
    </TagType>
  );
};

LessonLink.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  course_slug: PropTypes.string.isRequired,
};

export default LessonLink;
