import React from 'react';
import PropTypes from 'prop-types';
import { LessonCard } from '..';
import '../../css/dashboard/LessonList.scss';

const LessonList = ({ lesson_list }) => (
  <div className="list-lessons">
    {lesson_list && lesson_list.length > 0 ? (
      lesson_list.map(lesson => <LessonCard lesson={lesson} key={lesson.slug} />)
    ) : (
      <div className="no-lessons">No Lessons!</div>
    )}
  </div>
);

LessonList.propTypes = {
  lesson_list: PropTypes.arrayOf(
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
};

export default LessonList;
