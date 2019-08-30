import React from 'react';
import PropTypes from 'prop-types';

const LessonLink = ({ title, src, length, active }) => (
  <div className='lesson-link'>
    {
      active
        ?        (<div className="active-video">
          {title}
          <p>{length}</p>
        </div>)
        :        (<div className="link">
          <a href={src}>{title}</a>
          <p>{length}</p>
        </div>)
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
