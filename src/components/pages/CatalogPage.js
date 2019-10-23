import React, { Component } from 'react';
import { contentAPI } from '../../utils';
import { CatalogList } from '..';
import '../../css/pages/CatalogPage.scss';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_courses: [],
    };
    this.all_courses = [];
  }

  componentDidMount() {
    contentAPI.getAllNestedCourses().then(contentResp => {
      this.all_courses = contentResp.data;
      this.setState({ curr_courses: contentResp.data });
    });
  }

  resetCourses = () => {
    this.setState({ curr_courses: this.all_courses });
  };

  render() {
    const { curr_courses } = this.state;

    return (
      <div className="catalog-page">
        <header className="catalog-header">
          <h2 className="page-title">Courses</h2>
          {/* TODO: Make search actually work/do something */}
          {/* <input className="course-search" type="text" placeholder="Type to search!" /> */}
        </header>
        <hr className="catalog-line" />
        {/* TODO: <CatalogFilter /> */}
        <CatalogList courses={curr_courses} />
      </div>
    );
  }
}

export default CatalogPage;
