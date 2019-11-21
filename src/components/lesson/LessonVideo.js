import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import YouTube from 'react-youtube';
import '../../css/lesson/LessonVideo.scss';


class LessonVideo extends Component {
  constructor(props) {
    super(props);

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

  loadVideo = () => {
    const { video_id } = this.props;
    this.player = new window.YT.Player(`player`, {
      videoId: video_id,
      events: {
        onReady: this.onPlayerReady,
      },
    });
  }

  onPlayerReady = event => {
    console.log(event.target);
  };

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
      <div className="lesson-video" id="player">
        {/* <YouTube
          videoId={video_id}
          opts={opts}
          onPlay={this.handleVideoPlay}
          onPause={this.handleVideoPause}
          onEnd={this.handleVideoEnd}
        /> */}
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
