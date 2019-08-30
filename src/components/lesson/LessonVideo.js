import React from 'react';
import PropTypes from 'prop-types';

const LessonVideo = ({ title, src }) => <div className="lesson-video">
  <iframe title={title} allowFullScreen="" frameBorder="0"  src={src}  />
</div>

LessonVideo.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default LessonVideo;
