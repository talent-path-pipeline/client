import React, { Component } from 'react';
import CatalogList from './CatalogList';
import '../../css/catalog/CatalogPage.css';

export default class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.modalContainer = React.createRef();

    this.state = {
      selectedCourse: {},
      loading: false,
      courses: [{
        title: 'JavaScript Basics',
        completedCourses: 2,
        totalCourses: 5,
        img: 'https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.javascript.png',
      },{
        title: 'HTML Basics',
        completedCourses: 2,
        totalCourses: 11,
        img: 'https://www.syntaxxx.com/wp-content/uploads/2014/08/html5-logo-600-580x580.jpg',
      },{
        title: 'CSS Basics',
        completedCourses: 2,
        totalCourses: 50,
        img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png',
      },{
        title: 'Intro to Node',
        completedCourses: 2,
        totalCourses: 8,
        img: 'https://ih1.redbubble.net/image.109336634.1604/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.u1.jpg',
      },{
        title: 'Intermediate JS',
        completedCourses: 2,
        totalCourses: 7,
        img: 'https://www.burlingtoncodeacademy.com/wp-content/uploads/2019/03/js-1024x942.png',
      },{
        title: 'Intro to MongoDB and Express',
        completedCourses: 27,
        totalCourses: 27,
        img: '',
      },{
        title: 'The MERN Stack',
        completedCourses: 0,
        totalCourses: 5,
        img: '',
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
        <CatalogList
          courses={courses}
          clickCourse={this.clickCourse}
        />
      </div>
    );
  }
}
