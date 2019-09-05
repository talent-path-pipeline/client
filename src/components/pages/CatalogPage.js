import React, { Component } from 'react';
import { CatalogFilter, CatalogList } from '..';

import '../../css/pages/CatalogPage.scss';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.modalContainer = React.createRef();

    this.state = {
      selectedCourse: {},
      loading: false,
      courses: [{
        title: 'D&D: Starter Kit',
        categories: 'basics beginner starting',
        completedCourses: 2,
        totalCourses: 6,
        img: './images/starter-kit.png',
      },{
        title: 'HTML Basics',
        categories: 'basics html frontend',
        completedCourses: 2,
        totalCourses: 11,
        img: 'https://www.syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg',
      },{
        title: 'CSS Basics',
        categories: 'basics css frontend',
        completedCourses: 2,
        totalCourses: 50,
        img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
      },{
        title: 'Intro to Node',
        categories: 'basics node js frontend backend',
        completedCourses: 2,
        totalCourses: 8,
        img: 'http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png',
      },{
        title: 'Intermediate JS',
        categories: 'intermediate js frontend backend',
        completedCourses: 2,
        totalCourses: 7,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbGmrvzeMAaR1rHzBx8pezeEZUbX-6T-Po9er1v4TTC69MRbi',
      },{
        title: 'Intro to MongoDB and Express',
        categories: 'basics mongodb express backend',
        completedCourses: 27,
        totalCourses: 27,
        img: 'https://cacm.acm.org/system/assets/0002/7119/042117_Theodo_MongoDB.large.jpg?1492791427&1492791427',
      },{
        title: 'The MERN Stack',
        categories: 'intermediate mongodb express react node js frontend backend',
        completedCourses: 0,
        totalCourses: 5,
        img: 'https://cdn.worldvectorlogo.com/logos/react.svg',
      }],
    };
  }

  // ===============================================================
  // Handlers
  /**
     * TODO: Handle route when course is clicked
     * @param {Object} selectedCourse the object containing the data for the course to be displayed
     */
  clickCourse = selectedCourse => {
    console.log(selectedCourse);
  };

  // ===============================================================
  // Render

  render() {
    const {
      courses,
    } = this.state;

    return (
      <div className="catalog-page">
        <div id="catalog-header">
          <h2 id="filterHeader">Courses</h2>
          <input id="course-search" type="text" placeholder="Type to search!" />
        </div>
        <section className="filter-container">
          <CatalogFilter/>
        </section>
        <section className="course-container">
          <CatalogList
            courses={courses}
            clickCourse={this.clickCourse}
          />
        </section>
      </div>
    );
  }
}