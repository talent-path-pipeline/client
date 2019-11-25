import axios from 'axios';

const { REACT_APP_SVR_API } = process.env;

/**
 * Gets the list of all UserLessons pertaining to given user by course_id
 * @param {string} user_id the uuid of the user whose userlessons we want
 * @param {string} course_id the uuid of the course results should be related to
 * @returns {Promise<UserLesson[]>} An Axios promise with the userlesson data
 */
function getUserLessonsByCourse(user_id, course_id) {
  return axios.get(
    `${REACT_APP_SVR_API}/userlessons/user/${user_id}/course/${course_id}`,
  );
}

/**
 * Gets the list of all UserLessons pertaining to given user
 * @param {string} user_id the uuid of the user whose userlessons we want
 * @returns An Axios promise with the userlesson data
 */
function getUserLessonsByUser(user_id) {
  return axios.get(`${REACT_APP_SVR_API}/userlessons/user/${user_id}`);
}

export default {
  getUserLessonsByCourse,
  getUserLessonsByUser,
};
