import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../css/catalog/CatalogCard.scss';

export default class CatalogCard extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    clickCourse: PropTypes.func.isRequired,
    slug: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.modalContainer = React.createRef();

    this.state = {
      course: {
        title: '',
        completedCourses: '',
        totalCourses: '',
        img: '',
      },
    };
  }

  // ===============================================================
  // Handlers
  componentDidMount(){
    const { course } = this.state;
    this.setState({
      course: {
        title: course.title,
        completedCourses: course.completedCourses,
        totalCourses: course.totalCourses,
        img: course.img,
      },
    });
  }

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
      const { course, clickCourse, slug } = this.props;

      return (
        <div
          id="course-card"
          key={course.title}
          role="button"
          tabIndex={0}
          onClick={() => clickCourse(course.title)}
          onKeyPress={e => {
            if (e.key === 'Enter') clickCourse(course.title);
          }}
        >
          <Link to={`/${slug}`}>
            <img className="course-image" src={course.img} alt='courseImage'/>
            <p className="course-title">{course.title}</p>
            <p className="course-progress">{course.completedCourses} of {course.totalCourses} lessons completed</p>
          </Link>


        </div>
      );
    }
}
