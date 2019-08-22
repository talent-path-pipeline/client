/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components
import CatalogCard from './CatalogCard';
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
    // TODO: Add picture title progress

    return (
      <div id="list-all-courses">
        {courses.map(course => (
          <CatalogCard
          course={course}
          clickCourse={clickCourse}
        />
        ))}
      </div>
    );
  }
}
