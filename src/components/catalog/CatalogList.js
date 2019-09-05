/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import dataIsotope from 'isotope-layout';
// Components
import CatalogCard from './CatalogCard';
import '../../css/catalog/CatalogList.scss';

export default class CatalogList extends Component {
  static propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    clickCourse: PropTypes.func.isRequired,
  };

  // ===============================================================
  // Render

  render() {
    const { courses, clickCourse } = this.props;
    // TODO: Add picture title progress

    return (
      <div
        id="list-all-courses"
        data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 200 } }'
      >
        {courses.map(course => {
          const cardClass = `course-item ${course.categories}`;
          return (
            <CatalogCard class={cardClass} course={course} clickCourse={clickCourse} />
          );
        })}
      </div>
    );
  }
}
