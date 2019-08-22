import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/catalog/CatalogCard.css';

export default class CatalogCard extends Component {
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
  static propTypes = {
    course: PropTypes.object.isRequired,
    clickCourse: PropTypes.func.isRequired,
  };

  // ===============================================================
  // Handlers
    /**
     * TODO: Handle route when course is clicked
     * @param {Object} selectedCourse the object containing the data for the course to be displayed
     */
  clickCourse = selectedCourse => {
    console.log(selectedCourse);
  };
  componentDidMount(){
    console.log('Component did mount');
    console.log(this.props.course);
    this.setState({
      course: {
        title: this.props.course.title,
        completedCourses: this.props.course.completedCourses,
        totalCourses: this.props.course.totalCourses,
        img: this.props.course.img,
      },
    });
  }

  // ===============================================================
  // Render

  render() {
    const { course, clickCourse } = this.props;

    return (
      <div
        id="course-item"
        key={this.state.course.title}
        role="button"
        tabIndex={0}
        onClick={() => clickCourse(this.state.course.title)}
        onKeyPress={e => {
          if (e.key === 'Enter') clickCourse(this.state.course.title);
        }}
      >

        <img className="course-image" src={this.state.course.img} alt='courseImage'/>
        <p className="course-title">{this.state.course.title}</p>
        <p className="course-progress">{this.state.course.completedCourses} of {this.state.course.totalCourses} lessons completed</p>
      </div>
    );
  }
}
