import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { userInfo } from 'os';
import { tokenServices, userAPI } from '../../utils';
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
    // const user = tokenServices.getToken();
    // if (user !== null) {
    //   console.log(
    //     `Video being watched: ${this.props.video_id} from ${this.props.course_id} by ${user.id}`,
    //   );
    // } else {
    //   console.log(`Video being watched: ${this.props.video_id} by unregistered user`);
    // }
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

  // FIXME: fix YT iframe dimensions
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
  };

  onStateChange = async event => {
    const { id: user_id } = tokenServices.getToken();
    const { lesson_id, course_id } = this.props;
    const { userLessonUuid, videoHasStarted } = this.state;
    const timestamp = Math.floor(event.target.getCurrentTime());

    // state = PLAYING
    if (event.data === 1) {
      this.setState({
        videoHasStarted: true,
      });

      // TODO: User currently only gets credit for completing a lesson if they play the video from the lesson beginning all the way to the end in a single page session. To remove this restriction, take out `timestamp === this.start`.
      if (user_id !== null && userLessonUuid === '' && timestamp === this.start) {
        try {
          const existingUserLesson = await axios.get(
            `${route}/lesson/${lesson_id}/user/${user_id}`,
          );

          if (existingUserLesson.data[0]) {
            this.setState({
              userLessonUuid: existingUserLesson.data[0].uuid,
            });
          } else {
            const newUserLesson = await axios.post(route, {
              userUuid: user_id,
              lessonUuid: lesson_id,
              courseUuid: course_id,
            });
            this.setState({
              userLessonUuid: newUserLesson.data.uuid,
            });
          }
        } catch (err) {
          // TODO: handle error
          console.error(err);
        }
      }
    }

    // state = ENDED

    if (event.data === 0 && videoHasStarted && userLessonUuid) {
      try {
        await axios.patch(`${route}/${userLessonUuid}`, {
          completed: true,
        });
      } catch (err) {
        // TODO: handle error
        console.error(err);
      }
    }
  };

  render() {
    return <div className="lesson-video" id="player" />;
  }
}

LessonVideo.propTypes = {
  video_id: PropTypes.string.isRequired,
  start: PropTypes.number,
  end: PropTypes.number,
  lesson_id: PropTypes.string.isRequired,
  course_id: PropTypes.string.isRequired,
};

LessonVideo.defaultProps = {
  start: undefined,
  end: undefined,
};

export default LessonVideo;

// const trackVideo = () => {
//   const token = tokenServices.getToken();
//   userID = token ? token.id : null;

//   if (userID !== null) {
//     const data = { videoID: lesson.video_id, userID };
//     //-------------------------------------------------------------
//     // For development purposes
//     console.log(
//       `Video being watched: ${lesson.video_id} from ${props.course_title} by ${userID}`,
//     );
//     //-------------------------------------------------------------
//     /*
//     axios
//     .post(`${REACT_APP_SVR_API}/lesson/`, data)
//     .then(response => {
//       console.log(`This is the response: ${response}`)
//     })
//     .catch(error => {
//       try {
//         // Handles errors that are not HTTP specific
//         console.error(error);
//         if (!error.status) {
//           console.error('A network error has occured.');
//         } else if (error.response.status === 400) {
//           console.error('Bad Request');
//         } else if (error.response.status === 500) {
//           console.error('Something bad happended on the server.');
//         } else {
//           console.error('An unknown error has occurred');
//         }
//       } catch (ex) {
//         alert('Something went wrong...');
//         Promise.reject(ex);
//       }
//     });
//      */
//   } else {
//     //-------------------------------------------------------------
//     // For development purposes
//     console.log(`Video being watched: ${lesson.video_id} by unregistered user`);
//     //-------------------------------------------------------------
//   }
// };
