import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { tokenServices, userLessonAPI } from '../../utils';
import '../../css/lesson/LessonVideo.scss';

class LessonVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userlesson_id: '',
      video_has_started: false,
      timestamp: 0,
    };

    this.video_player_ref = React.createRef();
  }

  componentDidMount() {
    // NOTE: for some reason video doesn't re-mount when switching between courses
    // and keeping same lesson # (so currently only possible with first lesson)
    const user = tokenServices.getToken();
    if (user !== null) {
      const { lesson_id: lessonUuid, course_id: courseUuid } = this.props;
      const { id: userUuid } = user;
      userLessonAPI
        .getUserLessonByLessonAndUser(userUuid, lessonUuid)
        .then(async ({ data }) => {
          let userlesson = data;
          // check if userlesson already exists
          if (!data) {
            // if not, make new userlesson table entry
            const newlycreated = await userLessonAPI.createUserLesson({
              userUuid,
              lessonUuid,
              courseUuid,
            });
            userlesson = newlycreated.data;
          }
          // track userlesson
          this.setState({
            userlesson_id: userlesson.uuid,
            timestamp: userlesson.timestamp,
          });
        });
    }
  }

  componentWillUnmount() {
    const { video_has_started } = this.state;
    if (video_has_started) {
      this.video_player_ref.current.internalPlayer.getCurrentTime().then(timestamp => {
        this.handleTimeUpdate(timestamp);
      });
    }
  }

  /**
   * TODO:
   */
  handleTimeUpdate = timestamp => {
    this.setState({ timestamp }, () => {
      if (this.videoCompleted()) {
        this.markVideoCompleted();
      } else {
        this.updateBackendTimestamp();
      }
    });
  };

  /**
   * TODO:
   */
  videoCompleted = timestamp => {
    let { timestamp: curr_time } = this.state;
    curr_time = timestamp || curr_time;
    const { length } = this.props;
    // TODO:

    return false;
  };

  /**
   * TODO:
   */
  markVideoCompleted = () => {
    const user = tokenServices.getToken();
    if (user !== null) {
      const { userlesson_id } = this.state;
      userLessonAPI.updateUserLesson(userlesson_id, { completed: true });
      console.log(`completed video ${this.props.video_id}`);
    }
  };

  /**
   * TODO:
   */
  updateBackendTimestamp = () => {
    const user = tokenServices.getToken();
    if (user !== null) {
      const { timestamp, userlesson_id } = this.state;
      userLessonAPI.updateUserLesson(userlesson_id, { timestamp: Math.floor(timestamp) });
    }
  };

  /**
   * TODO:
   */
  onVideoPlay = event => {
    const { video_has_started, timestamp } = this.state;
    if (!video_has_started) {
      event.target.seekTo(timestamp);
      this.setState({ video_has_started: true });
    } else {
      this.setState({ timestamp: event.target.getCurrentTime() });
    }
  };

  render() {
    const { video_id, start, end } = this.props;
    // console.log(window.location.href);

    return (
      <YouTube
        videoId={video_id}
        opts={{ playerVars: { start, end } }}
        onEnd={this.markVideoCompleted}
        onPlay={this.onVideoPlay}
        onPause={event => this.handleTimeUpdate(event.target.getCurrentTime())}
        className="lesson-video"
        ref={this.video_player_ref}
      />
    );
  }
}

LessonVideo.propTypes = {
  video_id: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  length: PropTypes.number.isRequired,
  lesson_id: PropTypes.string.isRequired,
  course_id: PropTypes.string.isRequired,
};

LessonVideo.defaultProps = {
  start: undefined,
  end: undefined,
};

export default LessonVideo;
