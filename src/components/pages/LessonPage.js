import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';

function LessonPage(props) {
  const { curr_lesson_num, lessons, base_path, course_title } = props;
  // const { title, src, description, id } = lessons.find(elem => elem.id === activeId);
  const { title, src, description, order } = lessons[curr_lesson_num];
  const total = lessons.length;

  return (
    <div className="lesson-page">
      <Lesson
        order={order}
        title={title}
        src={src}
        description={description}
        course_size={total}
        base_path={base_path}
      />
      <LessonsPane
        course_title={course_title}
        lessons={lessons}
        curr_lesson_num={curr_lesson_num}
        base_path={base_path}
      />
    </div>
  );
}

LessonPage.propTypes = {
  course_title: PropTypes.string.isRequired,
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
