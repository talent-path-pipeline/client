/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/catalog/CatalogList.css';

export default class CatalogList extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickCourse: PropTypes.func.isRequired,
  };

  // ===============================================================
  // Render

  render() {
    const { courses, clickCourse, } = this.props;

    return (
      <div id="list-all-courses">
        {courses.map(course => (
          <div
            id="course-item"
            key={course.courseName}
            role="button"
            tabIndex={0}
            onClick={() => clickCourse(course)}
            onKeyPress={e => {
              if (e.key === 'Enter') clickCourse(course);
            }}
          >
            <div
              className="img-fluid"
            >{course.courseName}</div>
          </div>
        ))}
      </div>
    );
  }
}
