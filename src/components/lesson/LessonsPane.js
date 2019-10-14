import React from 'react';
import PropTypes from 'prop-types';
import { LessonLink } from '..';
import '../../css/lesson/LessonsPane.scss';

// TODO: add next and previous course buttons
const LessonsPane = ({ course_title, lessons, curr_lesson_num, base_path }) => (
  <div className="lessons-pane">
    <h2>{course_title}</h2>
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
      length: PropTypes.number.isRequired,
    }),
  ).isRequired,
  base_path: PropTypes.string.isRequired,
};

export default LessonsPane;
