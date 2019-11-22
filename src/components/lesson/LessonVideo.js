import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/LessonVideo.scss';

class LessonVideo extends Component {
  constructor(props) {
    super(props);

    const { start } = props;
    this.start = start || 0;

    this.state = {
      videoHasStarted: false,
    };
  }

  componentDidMount() {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      this.loadVideo();
    }
  }

  // TODO: fix YT iframe dimensions
  loadVideo = () => {
    const { video_id, start, end } = this.props;
    this.player = new window.YT.Player(`player`, {
      videoId: video_id,
      width: '560',
      height: '325',
      playerVars: {
        start,
        end,
      },
      events: {
        onStateChange: this.onStateChange,
      },
    });
  }

  onStateChange = async event => {
    const { user_id, lesson_id } = this.props;
    const timestamp = Math.floor(event.target.getCurrentTime());
    console.log(event.data);

    // state = PLAYING
    if (event.data === 1) {
      console.log(`Video started at ${timestamp}`);

      this.setState({
        videoHasStarted: true,
      });

      if (user_id !== null && timestamp === this.start) {
        // TODO: add UserLesson entry if not exist
        console.log('create userlesson entry');
        console.log(`userId: ${user_id}`);
        console.log(`lessonId: ${lesson_id}`);
      }
    }

    // state = ENDED
    if (event.data === 0) {
      console.log(`Video ended at ${timestamp}`);

      if (this.state.videoHasStarted) {
        // TODO: set UserLesson.completed to TRUE
      }
    }
  };

  render () {
    return (
    // TODO: maybe specify specific size for iframe player so it's not bigger/smaller for different videos?
      <div className="lesson-video" id="player" />
    );
  };
}

LessonVideo.propTypes = {
  title: PropTypes.string.isRequired,
  video_id: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  lesson_id: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
};

LessonVideo.defaultProps = {
  start: undefined,
  end: undefined,
};

export default LessonVideo;
