import React from 'react';
import PropTypes from 'prop-types';
import { LessonLink } from '..';
import '../../css/lesson/LessonsPane.scss';
import LessonNavBar from './LessonNavBar';

const LessonsPane = ({
  course_title,
  lessons,
  curr_lesson_num,
  course_slug,
  prev_slug,
  next_slug,
}) => (
  <div className="lessons-pane">
    <h2>
      <LessonNavBar
        className="course-nav"
        prev_path={prev_slug ? `/courses/${prev_slug}` : ''}
        next_path={next_slug ? `/courses/${next_slug}` : ''}
      />
      {course_title}
    </h2>
    {lessons.map(({ order, title, length }) => (
      <LessonLink
        key={order}
        order={order}
        title={title}
        length={length}
        course_slug={course_slug}
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
      length: PropTypes.number.isRequired,
    }),
  ).isRequired,
  course_slug: PropTypes.string.isRequired,
  prev_slug: PropTypes.string,
  next_slug: PropTypes.string,
};

LessonsPane.defaultProps = {
  prev_slug: '',
  next_slug: '',
};
export default LessonsPane;
