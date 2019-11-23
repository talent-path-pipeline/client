import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';
import axios from 'axios';
import TokenServices from '../../utils/tokenServices';
const { REACT_APP_SVR_API } = process.env;

function LessonPage(props) {
  const { curr_lesson_num, lessons, base_path } = props;
  const lesson = lessons[curr_lesson_num];
  const total = lessons.length;
  let userID;
  const trackVideo = () =>{
    const token = TokenServices.getToken();
    userID = token? token.id: null;

    if(userID !== null){
      const data = {videoID: lesson.video_id, userID};
      //-------------------------------------------------------------
      // For development purposes
      console.log(`Video being watched: ${lesson.video_id} from ${props.course_title} by ${userID}`);
      //-------------------------------------------------------------
      /*
    axios
    .post(`${REACT_APP_SVR_API}/lesson/`, data)
    .then(response => {
      console.log(`This is the response: ${response}`)
    })
    .catch(error => {
      try {
        // Handles errors that are not HTTP specific
        console.error(error);
        if (!error.status) {
          console.error('A network error has occured.');
        } else if (error.response.status === 400) {
          console.error('Bad Request');
        } else if (error.response.status === 500) {
          console.error('Something bad happended on the server.');
        } else {
          console.error('An unknown error has occurred');
        }
      } catch (ex) {
        alert('Something went wrong...');
        Promise.reject(ex);
      }
    });
     */
    }else{
    //-------------------------------------------------------------
      // For development purposes
      console.log(`Video being watched: ${lesson.video_id} by unregistered user`);
      //-------------------------------------------------------------
    }
  };
  return (
    <div className="lesson-page">
      {trackVideo()}
      <Lesson lesson={lesson} course_size={total} base_path={base_path} user_id={userID}/>
      <LessonsPane {...props} />
    </div>
  );
}

LessonPage.propTypes = {
  course_title: PropTypes.string.isRequired,
  curr_lesson_num: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      start: PropTypes.number,
      end: PropTypes.number,
      length: PropTypes.number.isRequired,
      video_id: PropTypes.string.isRequired,
      video_title: PropTypes.string.isRequired,
      video_description: PropTypes.string.isRequired,
      channel_id: PropTypes.string.isRequired,
      channel_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  base_path: PropTypes.string.isRequired,
  prev_slug: PropTypes.string,
  next_slug: PropTypes.string,
};

LessonPage.defaultProps = {
  prev_slug: '',
  next_slug: '',
};

export default LessonPage;
