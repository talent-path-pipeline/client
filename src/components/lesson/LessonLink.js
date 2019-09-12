import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../../css/lesson/LessonLink.scss';

const formatTime = seconds => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hStr = h > 0 ? `${h}:` : '';
  const mStr = `${m < 10 ? '0' : ''}${m}:`;
  const sStr = `${s < 10 ? '0' : ''}${s}`;

  return `${hStr}${mStr}${sStr}`;
};

const LessonLink = ({ title, length, order, active, base_path }) => (
  <div className="lesson-link">
    {/* TODO: this can probably be consolidated */}
    {active ? (
      <div className="active-video">
        <p>{title}
          <span className="video-length">{formatTime(length)}</span>
        </p>
      </div>
    ) : (
      <div className="link">
        <Link to={`/${base_path}/${order}`}>{title}<span className="video-length">{formatTime(length)}</span></Link>
      </div>
    )}
  </div>
);

LessonLink.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  base_path: PropTypes.string.isRequired,
};

export default LessonLink;
