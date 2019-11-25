import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ProgressBar } from '..';
import { userLessonAPI, tokenServices } from '../../utils';

import '../../css/course/CourseCard.scss';

class CourseCard extends Component {
  static propTypes = {
    course: PropTypes.shape({
      uuid: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image_link: PropTypes.string,
      lessons: PropTypes.arrayOf(PropTypes.object),
      slug: PropTypes.string,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.checkAndSetCompleted();
  }

  // NOTE: this is prone to lots of requests, probably should be changed to be loaded in App and passed down, like the way CatalogPage does it
  checkAndSetCompleted = () => {
    const { course } = this.props;
    const user = tokenServices.getToken();
    if (user) {
      userLessonAPI.getUserLessonsByCourse(user.id, course.uuid).then(response => {
        const completed_lessons = response.data.filter(lesson => lesson.completed);
        this.setState({ completed: completed_lessons.length });
      });
    }
  };

  render() {
    const { course } = this.props;
    const { completed } = this.state;

    return (
      <Link to={`/courses/${course.slug}`} className="course-card">
        <div
          className="course-image"
          style={{ backgroundImage: `url(./images/${course.image_name})` }}
          alt={course.title}
        />
        <div className="course-info">
          <div className="course-text">
            <h4 className="course-title">{course.title}</h4>
            <p className="course-description">{course.description}</p>
          </div>
          <ProgressBar value={completed} max={course.lessons.length} label="Lessons" />
        </div>
      </Link>
    );
  }
}

export default CourseCard;
