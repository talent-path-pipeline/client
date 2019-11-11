import axios from 'axios';

const { REACT_APP_SVR_API } = process.env;

/**
 * Gets the list of all path objects, containing nested course and lesson data
 * @returns An Axios promise with the path data
 */
function getAllNestedPaths() {
  return axios.get(`${REACT_APP_SVR_API}/nested-data`);
}

/**
 * Gets the list of all course objects independent of paths, containing nested lesson data
 * @returns An Axios promise with the course data
 */
function getAllNestedCourses() {
  return axios.get(`${REACT_APP_SVR_API}/nested-data/course/all`);
}

export default {
  getAllNestedPaths,
  getAllNestedCourses,
};
