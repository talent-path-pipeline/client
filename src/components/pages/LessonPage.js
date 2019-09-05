import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';

function LessonPage(props) {
  const { curr_lesson_num, lessons } = props;
  // const { title, src, description, id } = lessons.find(elem => elem.id === activeId);
  const { title, src, description, order } = lessons[curr_lesson_num];

  return (
    <div className="lesson-page">
      <Lesson order={order} title={title} src={src} description={description} />
      <LessonsPane lessons={lessons} curr_lesson_num={curr_lesson_num} />
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
};

export default LessonPage;
