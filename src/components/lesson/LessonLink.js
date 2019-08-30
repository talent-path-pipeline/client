import React from 'react';
import PropTypes from 'prop-types';

const formatTime = seconds => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor(seconds % 3600 / 60);
  const s = Math.floor(seconds % 3600 % 60);

  const hStr = h > 0 ? `${h}:` : '';
  const mStr = `${m < 10 ? '0':'' }${m}:`
  const sStr = `${s < 10 ? '0':'' }${s}`

  return `${hStr}${mStr}${sStr}`;
}

const LessonLink = ({ title, src, length, active }) => (
  <div className='lesson-link'>
    {
      active
        ?  (
          <div className="active-video">
            <p>{title}</p>
            <p>{formatTime(length)}</p>
          </div>
        )
        : (
          <div className="link">
            <a href={src}>{title}</a>
            <p>{formatTime(length)}</p>
          </div>
        )
    }
  </div>
);


LessonLink.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
}

export default LessonLink;
