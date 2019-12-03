import axios from 'axios';

const { REACT_APP_SVR_API } = process.env;

/**
 * Gets the list of all path objects, containing nested course and lesson data
 * @returns {Promise<Path[]>} An Axios promise with the path data
 */
function getAllNestedPaths() {
  return axios.get(`${REACT_APP_SVR_API}/nested-data`);
}

/**
 * Gets the list of all course objects independent of paths, containing nested lesson data
 * @returns {Promise<Course[]>} An Axios promise with the course data
 */
function getAllNestedCourses() {
  return axios.get(`${REACT_APP_SVR_API}/nested-data/course/all`);
}

/**
 * Gets the list of all lesson objects independent of course, containing all data
 * @returns {Promise<Lesson[]>} An Axios promise with the lesson data
 */
function getAllLessons() {
  return axios.get(`${REACT_APP_SVR_API}/lessons`);
}

export default {
  getAllNestedPaths,
  getAllNestedCourses,
  getAllLessons,
};
