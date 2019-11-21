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

  componentWillUnmount() {
    const timestamp = this.player.getCurrentTime();
    console.log(`Leaving page with video at ${timestamp}`);
    if (timestamp > 0 && this.state.videoHasStarted) {
      console.log(`Updating UserLesson.timestamp to ${timestamp}`);
    // TODO: update UserLesson.timestamp to current video time
    }
  }

  loadVideo = () => {
    const { video_id } = this.props;
    this.player = new window.YT.Player(`player`, {
      videoId: video_id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onStateChange,
      },
    });
  }

  onPlayerReady = event => {
    console.log(event.target);
  };

  onStateChange = event => {
    console.log(event.data);

    // state = PLAYING
    if (event.data === 1) {
      console.log(`Video started at ${event.target.getCurrentTime()}`);

      this.setState({
        videoHasStarted: true,
      });

      // TODO: add UserLesson entry if not exist
    }

    // state = PAUSED
    if (event.data === 2) {
      console.log(`Video paused at ${event.target.getCurrentTime()}`);
    }

    // state = ENDED
    if (event.data === 0) {
      console.log(`Video ended at ${event.target.getCurrentTime()}`);


      if (this.state.videoHasStarted) {
        // TODO: set UserLesson.completed to TRUE
      }
    }
  };

  handleVideoPause = () => {
    console.log('player: ', this.player);
  };

  render () {
    const { lessonId, title, video_id, start, end } = this.props;
    // const opts = {
    //   title,
    //   width: '560',
    //   height: '325',
    //   playerVars: {
    //     allowFullScreen: 'allowfullscreen',
    //     frameBorder: '0',
    //     start,
    //     end,
    //   },
    // };

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
