import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { contentAPI, userLessonAPI, tokenServices } from '../../utils';
import { AccountSettings, DashboardMenu, ProgressOverview } from '..';
import '../../css/pages/DashboardPage.scss';

class DashboardPage extends Component {
  static propTypes = {
    handleLogOut: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: 'overview',
      started_lessons: [],
      started_courses: [],
      completed_lessons: [],
    };
  }

  componentDidMount() {
    this.getUserLessons();
  }

  /**
   * TODO:
   */
  getUserLessons = () => {
    const user = tokenServices.getToken();
    userLessonAPI.getUserLessonsByUser(user.id).then(response => {
      const userlessons = response.data;
      const completed_lessons = userlessons.filter(lesson => lesson.completed);
      this.setState({ completed_lessons });
      this.getStartedContentData(userlessons);
    });
  };

  /**
   * TODO:
   */
  getStartedContentData = userlessons => {
    const course_ids = this.getUniqueValues(userlessons, 'courseUuid');
    Promise.all([contentAPI.getAllNestedCourses(), contentAPI.getAllLessons()]).then(
      ([courseResp, lessonResp]) => {
        // pick out only the courses that have been started
        const courses = courseResp.data;
        const started_courses = courses.filter(crs => course_ids.includes(crs.uuid));

        // pick out only the lessons that have been started
        const lessons = lessonResp.data;
        const started_lessons = [];
        lessons.forEach(lesson => {
          const curr_ul = userlessons.find(ul => ul.lessonUuid === lesson.uuid);
          if (curr_ul) {
            const { slug: course_slug } = courses.find(
              crs => crs.uuid === curr_ul.courseUuid,
            );
            started_lessons.push({
              ...lesson,
              // add the timestamp, completion status, and course_slug
              timestamp: curr_ul.timestamp,
              completed: curr_ul.completed,
              course_slug,
            });
          }
        });

        this.setState({ started_courses, started_lessons });
      },
    );
  };

  /**
   * Takes an array of objects, and returns the unique values for a given key from all the
   * objects in the array.
   * @param {Array<Object>} data the array of objects to be reduced
   * @param {string} key the key to get values from for each of the objects
   * @returns {any[]} an array of the unique values for the given key from the original objects
   */
  getUniqueValues = (data, key) => {
    const all_ids = data.map(element => element[key]);
    const no_duplicates = new Set(all_ids);
    return [...no_duplicates];
  };

  /**
   * TODO:
   */
  goToSection = section => {
    this.setState({ active: section });
  };

  /**
   * TODO:
   */
  getBodySection = () => {
    const { active, started_courses, started_lessons, completed_lessons } = this.state;

    if (active === 'overview') {
      return (
        <ProgressOverview
          started_lessons={started_lessons}
          completed_lessons={completed_lessons}
          started_courses={started_courses}
        />
      );
    }
    if (active === 'settings') {
      return <AccountSettings />;
    }
    return <div className="dashboard-body">No Body</div>;
  };

  render() {
    const { handleLogOut } = this.props;
    const { active } = this.state;
    const user = tokenServices.getToken();

    return (
      <main className="dashboard">
        <DashboardMenu
          username={user.fullName}
          active={active}
          section_list={{
            overview: 'Progress Overview',
            settings: 'Account Settings',
          }}
          goToSection={this.goToSection}
          handleLogOut={handleLogOut}
        />
        {this.getBodySection()}
      </main>
    );
  }
}

export default DashboardPage;
