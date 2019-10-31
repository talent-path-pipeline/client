import React from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonVideo.scss';

const LessonVideo = ({ title, video_id, start, end }) => {
  const valid_start = start !== undefined && start > 0;
  const valid_end = end !== undefined && end > start;
  const either = valid_start || valid_end ? '?' : '';
  const both = valid_start && valid_end ? '&' : '';
  const startStr = valid_start ? `start=${start}` : '';
  const endStr = valid_end ? `end=${end}` : '';
  const play_segment = `${either}${startStr}${both}${endStr}`;

  return (
    // TODO: maybe specify specific size for iframe player so it's not bigger/smaller for different videos?
    <div className="lesson-video">
      <iframe
        title={title}
        width="560"
        height="325"
        allowFullScreen="allowfullscreen"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${video_id}${play_segment}`}
      />
    </div>
  );
};

LessonVideo.propTypes = {
  title: PropTypes.string.isRequired,
  video_id: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
};

LessonVideo.defaultProps = {
  start: undefined,
  end: undefined,
};

export default LessonVideo;
