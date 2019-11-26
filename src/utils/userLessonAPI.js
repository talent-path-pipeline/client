import axios from 'axios';

const { REACT_APP_SVR_API } = process.env;

/**
 * Gets the list of all UserLessons pertaining to given user by course_id
 * @param {string} user_id the uuid of the user whose userlessons we want
 * @param {string} course_id the uuid of the course results should be related to
 * @returns {Promise<UserLesson[]>} An Axios promise with the userlesson data
 */
function getUserLessonsByCourseAndUser(user_id, course_id) {
  // TODO: error handling
  return axios.get(
    `${REACT_APP_SVR_API}/userlessons/user/${user_id}/course/${course_id}`,
  );
}

/**
 * Gets the UserLesson pertaining to given user and lesson
 * @param {string} user_id the uuid of the user whose userlessons we want
 * @param {string} lesson_id the uuid of the course results should be related to
 * @returns An Axios promise with the userlesson data
 */
function getUserLessonByLessonAndUser(user_id, lesson_id) {
  // TODO: error handling
  return axios.get(
    `${REACT_APP_SVR_API}/userlessons/user/${user_id}/lesson/${lesson_id}`,
  );
}

/**
 * Gets the list of all UserLessons pertaining to given user
 * @param {string} user_id the uuid of the user whose userlessons we want
 * @returns {Promise<UserLesson[]>} An Axios promise with the userlesson data
 */
function getUserLessonsByUser(user_id) {
  // TODO: error handling
  return axios.get(`${REACT_APP_SVR_API}/userlessons/user/${user_id}`);
}

/**
 * Gets a specific UserLesson object by ID
 * @param {string} userlesson_id the uuid of the userlessons we want
 * @returns An Axios promise with the userlesson data
 */
function getUserLessonByID(userlesson_id) {
  // TODO: error handling
  return axios.get(`${REACT_APP_SVR_API}/userlessons/${userlesson_id}`);
}

/**
 * Creates a new UserLesson object with the given data
 * @param data an object with the data to be entered, should include at least userUuid and lessonUuid
 * @returns An Axios promise with the newly created userlesson data
 */
function createUserLesson(data) {
  // TODO: error handling
  return axios.post(`${REACT_APP_SVR_API}/userlessons/`, data);
}

/**
 * Creates a new UserLesson object with the given data
 * @param userlesson_id the id of the UserLesson item to be updated
 * @param data an object with the data to be updated
 * @returns An Axios promise with the updated userlesson data
 */
function updateUserLesson(userlesson_id, data) {
  // TODO: error handling
  return axios.patch(`${REACT_APP_SVR_API}/userlessons/${userlesson_id}`, data);
}

export default {
  getUserLessonsByCourseAndUser,
  getUserLessonByLessonAndUser,
  getUserLessonsByUser,
  getUserLessonByID,
  createUserLesson,
  updateUserLesson,
};
