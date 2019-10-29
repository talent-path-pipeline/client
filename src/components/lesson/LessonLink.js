import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonLink.scss';

const formatTime = time => {
  let h;
  let m;
  let s;

  if (typeof time === 'number') {
    h = Math.floor(time / 3600);
    m = Math.floor((time % 3600) / 60);
    s = Math.floor((time % 3600) % 60);
  } else {
    // this is the date format the YouTube API uses: "PT3H9M7S"
    const timeStr = time.slice(2, time.length - 1);
    let msStr;
    // TODO: this breaks if there are no hours
    [h, msStr] = timeStr.split('H');
    [m, s] = msStr.split('M');
  }

  const hStr = h > 0 ? `${h}:` : '';
  const mStr = `${m < 10 ? '0' : ''}${m}:`;
  const sStr = `${s < 10 ? '0' : ''}${s}`;

  return `${hStr}${mStr}${sStr}`;
};

const LessonLink = ({ title, length, order, active, base_path }) => {
  const TagType = active ? 'p' : Link;
  return (
    <TagType to={`/courses/${base_path}/${order}`} className="lesson-link">
      {title}
      <span className="video-length">{formatTime(length)}</span>
    </TagType>
  );
};

LessonLink.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  length: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  base_path: PropTypes.string.isRequired,
};

export default LessonLink;
