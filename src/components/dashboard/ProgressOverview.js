import React from 'react';
import PropTypes from 'prop-types';
import { CatalogList, LessonList } from '..';
import { tokenServices } from '../../utils';
import '../../css/dashboard/ProgressOverview.scss';

const ProgressOverview = ({ started_courses, started_lessons, completed_lessons }) => {
  let user = tokenServices.getToken();
  if (!user) {
    user = { fullName: 'Anon', id: 'No User ID' };
  }

  const finished = [];
  const only_started = [];
  started_lessons.forEach(lesson => {
    const done = completed_lessons.find(cl => cl.lessonUuid === lesson.uuid);
    if (done) {
      finished.push(lesson);
    } else {
      only_started.push(lesson);
    }
  });

  return (
    <div className="dashboard-body">
      <h1 className="dashboard-header">{`Welcome, ${user.fullName}`}</h1>
      <section className="dashboard-chunk courses">
        <hr className="dashboard-line" />
        <h3 className="dashboard-subheader">Your Courses:</h3>
        <CatalogList courses={started_courses} completed_lessons={completed_lessons} />
      </section>
      <section className="dashboard-chunk lessons">
        <hr className="dashboard-line" />
        <h3 className="dashboard-subheader">Your Started Lessons:</h3>
        <LessonList lesson_list={only_started} />
      </section>
      <section className="dashboard-chunk lessons">
        <hr className="dashboard-line" />
        <h3 className="dashboard-subheader">Your Completed Lessons:</h3>
        <LessonList lesson_list={finished} />
      </section>
    </div>
  );
};

ProgressOverview.propTypes = {
  started_courses: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image_link: PropTypes.string,
      order: PropTypes.number,
      lessons: PropTypes.arrayOf(PropTypes.object),
    }),
  ).isRequired,
  started_lessons: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      start: PropTypes.number,
      end: PropTypes.number,
      length: PropTypes.number.isRequired,
      order: PropTypes.number.isRequired,
      completed: PropTypes.bool,
      timestamp: PropTypes.number.isRequired,
      course_slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  completed_lessons: PropTypes.arrayOf(
    PropTypes.shape({
      courseUuid: PropTypes.string.isRequired,
      lessonUuid: PropTypes.string,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default ProgressOverview;
