import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';

function LessonPage(props) {
  const { curr_lesson_num, lessons, base_path } = props;
  // const { title, src, description, id } = lessons.find(elem => elem.id === activeId);
  // const { title, src, description, order } = lessons[curr_lesson_num];
  const lesson = lessons[curr_lesson_num];
  const total = lessons.length;

  return (
    <div className="lesson-page">
      <Lesson lesson={lesson} course_size={total} base_path={base_path}/>
      <LessonsPane lessons={lessons} curr_lesson_num={curr_lesson_num} base_path={base_path} />
    </div>
  );
}

LessonPage.propTypes = {
  curr_lesson_num: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  base_path: PropTypes.string.isRequired,
};

export default LessonPage;
