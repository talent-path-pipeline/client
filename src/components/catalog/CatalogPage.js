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
        courseName: 'JavaScript Basics'
      },{
        courseName: 'HTML Basics'
      },{
        courseName: 'CSS Basics'
      },{
        courseName: 'Intro to Node'
      },{
        courseName: 'Intermediate JS'
      },{
        courseName: 'Intro to MongoDB and Express'
      },{
        courseName: 'The MERN Stack'
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
