import React from 'react';
import PropTypes from 'prop-types';
import { LessonLink } from '..';
import '../../css/lesson/LessonsPane.scss';

const LessonsPane = ({ lessons, curr_lesson_num, path }) => (
  <div className="lessons-pane">
    <h2>Lessons</h2>
    {lessons.map(({ order, title, src, length }) => (
      <LessonLink
        order={order}
        title={title}
        src={src}
        length={length}
        key={order}
        path={path}
        active={order === curr_lesson_num}
      />
    ))}
  </div>
);

LessonsPane.propTypes = {
  curr_lesson_num: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
    }),
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default LessonsPane;
