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
        progress: '',
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
    this.setState({
      course: {
        title: this.props.course.title,
        progress: this.props.course.progress,
        img: this.props.course.img,
      },
    });
  }

  // ===============================================================
  // Render

  render() {
    const { course, clickCourse } = this.props;

    return (
      <div className='catalog-card'>
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
          <div className="img-fluid">{this.state.course.title}</div>
        </div>

      </div>
    );
  }
}
