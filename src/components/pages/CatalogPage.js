import React, { Component } from 'react';
import axios from 'axios';
import { contentAPI } from '../../utils';
import { CatalogList } from '..';
import '../../css/pages/CatalogPage.scss';
import TokenServices from '../../utils/tokenServices';

const { REACT_APP_SVR_API } = process.env;

const getUserID = () => {
  const token = TokenServices.getToken();
  const userID = token ? token.id : null;
  return userID;
};

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_courses: [],
      completed_lessons: [],
    };
    this.all_courses = [];
  }


  componentDidMount() {
    const promises = [
      new Promise(resolve => resolve(this.getCourses())),
      new Promise(resolve => resolve(this.getCompletedLessons())),
    ];

    Promise.all(promises).then(() => {
      console.log('loaded data');
    });
  }

  getCourses = () => {
    contentAPI.getAllNestedCourses().then(contentResp => {
      if (contentResp.data) {
        this.all_courses = contentResp.data;
        this.setState({ curr_courses: contentResp.data });
      }
    });
  }

  getCompletedLessons = () => {
    const userID = getUserID();
    if (userID) {
      axios.get(`${REACT_APP_SVR_API}/userlessons/user/${userID}`)
        .then(response => {
          const completedLessons = response.data.filter(lesson => lesson.completed);
          this.setState( { completed_lessons: completedLessons });
        });
    }
  }

  resetCourses = () => {
    this.setState({ curr_courses: this.all_courses });
  };

  render() {
    const { curr_courses, completed_lessons } = this.state;

    return (
      <div className="catalog-page">
        <header className="catalog-header">
          <h2 className="page-title">Courses</h2>
          {/* TODO: Make search actually work/do something */}
          {/* <input className="course-search" type="text" placeholder="Type to search!" /> */}
        </header>
        <hr className="catalog-line" />
        {/* TODO: <CatalogFilter /> */}
        {curr_courses && curr_courses.length > 0 && (
          <CatalogList courses={curr_courses} completed_lessons={completed_lessons} />
        )}
      </div>
    );
  }
}

export default CatalogPage;
