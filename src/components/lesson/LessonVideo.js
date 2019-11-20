import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import '../../css/lesson/LessonVideo.scss';

const handleVideoPlay = data => {
  console.log(data);
};

class LessonVideo extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    const { lessonId, title, video_id, start, end } = this.props;
    const opts = {
      title,
      width: '560',
      height: '325',
      playerVars: {
        allowFullScreen: 'allowfullscreen',
        frameBorder: '0',
        start,
        end,
      },
    };

    return (
    // TODO: maybe specify specific size for iframe player so it's not bigger/smaller for different videos?
      <div className="lesson-video">
        {/* <iframe
        title={title}
        width="560"
        height="325"
        allowFullScreen="allowfullscreen"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${video_id}${play_segment}`}
      /> */}

        <YouTube
          videoId={video_id}
          opts={opts}
          onPlay={handleVideoPlay}
        />
      </div>
    );
  };
}

LessonVideo.propTypes = {
  title: PropTypes.string.isRequired,
  video_id: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  lessonId: PropTypes.string.isRequired,
};

LessonVideo.defaultProps = {
  start: undefined,
  end: undefined,
};

export default LessonVideo;
