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

  // componentDidMount() {
  //   this.getAndSetData();
  // }

  // componentDidUpdate(prevProps) {
  //   const { lesson_id } = this.props;
  //   if (prevProps.lesson_id !== lesson_id) {
  //     this.getAndSetData();
  //   }
  // }

  componentWillUnmount() {
    const { video_has_started } = this.state;
    if (video_has_started) {
      this.video_player_ref.current.internalPlayer.getCurrentTime().then(timestamp => {
        this.handleTimeUpdate(timestamp);
      });
    }
  }

  /**
   * Checks for a user, then tries to get the data for the current/relevant UserLesson from
   * the backend. If there isn't one, creates a new entry in the backend. Then updates state
   * to track the correct UserLesson.
   */
  getAndSetData = () => {
    /* 
      NOTE: for some reason video just updates props but doesn't re-mount when switching 
      between courses and keeping the same lesson # (so currently just first lessons), which
      is why this function needs to be separate and called in both DidUpdate and DidMount
    */
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
  };

  /**
   * Handles the state change and checks required when updating the timestamp to be tracked
   * in the backend as well.
   *
   * Sets state with the provided timestamp, then checks if the video counts as completed.
   * If so it marks the video as completed, and otherwise just updates the backend timestamp
   * @param {number} timestamp the updated timestamp
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
   * Takes in a timestamp, or uses the saved one from state if none is provided, and
   * determines if the video is close enough to be considered completed
   * @param {number} [timestamp] optional timestamp to test against the length/end time
   * @returns {boolean} whether or not the video could be counted as complete
   */
  videoCompleted = timestamp => {
    let { timestamp: curr_time } = this.state;
    curr_time = timestamp || curr_time;
    const { length, end } = this.props;
    const THRESHOLD = 12; // number of seconds within which it counts as completed
    const adjusted_end = (end || length) - THRESHOLD;
    if (curr_time >= adjusted_end) {
      return true;
    }
    return false;
  };

  /**
   * Checks if there is a user, and if there is, uses the userLessonAPI to make a backend
   * update call to mark the current UserLesson row as completed
   */
  markVideoCompleted = () => {
    const user = tokenServices.getToken();
    if (user !== null) {
      const { userlesson_id } = this.state;
      userLessonAPI.updateUserLesson(userlesson_id, { completed: true });
    }
  };

  /**
   * Checks if there is a user, and if there is, uses the userLessonAPI to make a backend
   * update call to set the timestamp of the current UserLesson row to the current timestamp
   */
  updateBackendTimestamp = () => {
    // TODO: don't update if before start or outside end?
    const user = tokenServices.getToken();
    if (user !== null) {
      const { timestamp, userlesson_id } = this.state;
      userLessonAPI.updateUserLesson(userlesson_id, { timestamp: Math.floor(timestamp) });
    }
  };

  /**
   * Function called on YouTube iFrame Play Event. Checks if video has started already,
   * seeks to saved timestamp, updates start record or timestamp
   * @param {Event} event the onPlay event
   */
  onVideoPlay = event => {
    const { video_has_started } = this.state;
    if (!video_has_started) {
      this.getAndSetData();
      // TODO: set up seeking again
      // const { start } = this.props;
      // const { timestamp } = this.state;
      // if (start && timestamp > start) {
      //   event.target.seekTo(timestamp);
      // }
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
