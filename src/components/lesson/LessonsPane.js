import React from 'react';
import PropTypes from 'prop-types';
import { LessonLink } from '..';
import '../../css/lesson/LessonsPane.scss';
import LessonNavBar from './LessonNavBar';

// TODO: add next and previous course buttons
const LessonsPane = ({ course_title, lessons, curr_lesson_num, base_path, prev_slug, next_slug }) => (
  <div className="lessons-pane">
    <h2>
      <LessonNavBar className="course-nav" prev_path={prev_slug ? `/courses/${prev_slug}/0`: undefined} next_path={next_slug ? `/courses/${next_slug}/0` : undefined} />
      {course_title}
</h2>
    {lessons.map(({ order, title, length }) => (
      <LessonLink
        key={order}
        order={order}
        title={title}
        length={length}
        base_path={base_path}
        active={order === curr_lesson_num}
      />
    ))}
  </div>
);

LessonsPane.propTypes = {
  course_title: PropTypes.string.isRequired,
  curr_lesson_num: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
    }),
  ).isRequired,
  base_path: PropTypes.string.isRequired,
  prev_slug: PropTypes.string,
  next_slug: PropTypes.string,
};

LessonsPane.defaultProps = {
  prev_slug: undefined,
  next_slug: undefined,
};
export default LessonsPane;
