import React, { Component } from 'react';
import { userLessonAPI, contentAPI, tokenServices } from '../../utils';
import { CatalogList } from '..';
import '../../css/pages/CatalogPage.scss';

const getUserID = () => {
  const token = tokenServices.getToken();
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
    // Promise.all([
    //   new Promise(resolve => resolve(this.getCourses())),
    //   new Promise(resolve => resolve(this.getCompletedLessons())),
    // ]).then(() => {
    //   console.log('loaded data');
    // });
    this.getCourses();
    this.getCompletedLessons();
  }

  getCourses = () => {
    contentAPI.getAllNestedCourses().then(contentResp => {
      if (contentResp.data) {
        this.all_courses = contentResp.data;
        this.setState({ curr_courses: contentResp.data });
      }
    });
  };

  getCompletedLessons = () => {
    const user_id = getUserID();
    if (user_id) {
      userLessonAPI.getUserLessonsByUser(user_id).then(response => {
        const completed_lessons = response.data.filter(lesson => lesson.completed);
        this.setState({ completed_lessons });
      });
    }
  };

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
