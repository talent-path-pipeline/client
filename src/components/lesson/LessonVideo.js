import React from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonVideo.scss';

const LessonVideo = ({ title, video_id }) => (
  // TODO: maybe specify specific size for iframe player so it's not bigger/smaller for different videos?
  <div className="lesson-video">
    <iframe
      title={title}
      allowFullScreen=""
      frameBorder="0"
      src={`https://www.youtube.com/embed/${video_id}`}
    />
  </div>
);

LessonVideo.propTypes = {
  title: PropTypes.string.isRequired,
  video_id: PropTypes.string.isRequired,
};

export default LessonVideo;
