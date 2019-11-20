import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import '../../css/lesson/LessonVideo.scss';


class LessonVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoHasStarted: false,
    };
  }

  handleVideoPlay = () => {
    console.log('video started');

    this.setState({
      videoHasStarted: true,
    });
  };

  handleVideoPause = () => {
    console.log('video paused');
  };

  handleVideoEnd = () => {
    console.log('video ended');

    // do nothing if video is at end without ever having started
    if (!this.state.videoHasStarted) return;
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
        <YouTube
          videoId={video_id}
          opts={opts}
          onPlay={this.handleVideoPlay}
          onPause={this.handleVideoPause}
          onEnd={this.handleVideoEnd}
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
