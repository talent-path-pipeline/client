import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../css/lesson/LessonVideo.scss';

const { REACT_APP_SVR_API } = process.env;
const route = `${REACT_APP_SVR_API}/userlessons`;
class LessonVideo extends Component {
  constructor(props) {
    super(props);

    const { start } = props;
    this.start = start || 0;

    this.state = {
      videoHasStarted: false,
      userLessonUuid: '',
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

        const existingUserLesson = await axios.get(`${route}/lesson/${lesson_id}/user/${user_id}`);

        if (existingUserLesson.data[0]) {
          console.log('existing entry: ', existingUserLesson);
          this.setState({
            userLessonUuid: existingUserLesson.data[0].uuid,
          });
        } else {
          const newUserLesson = await axios.post(route, {
            userUuid: user_id,
            lessonUuid: lesson_id,
          });
          console.log('new entry: ', newUserLesson);
          this.setState({
            userLessonUuid: newUserLesson.data.uuid,
          });
        }
        console.log('state userLessonUuid: ', this.state.userLessonUuid);
      }
    }

    // state = ENDED
    if (event.data === 0) {
      console.log(`Video ended at ${timestamp}`);

      // TODO: check if user is still logged in and userLessonUuid exists?
      if (this.state.videoHasStarted) {
        console.log('setting completed as true');
        // TODO: set UserLesson.completed to TRUE
        const patchedLesson = await axios.patch(`${route}/${this.state.userLessonUuid}`, {
          completed: true,
        });
        console.log(patchedLesson);
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
