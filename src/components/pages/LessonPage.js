import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';

const LessonPage = props => {
  const { curr_lesson_num, lessons, course_slug } = props;
  const lesson = lessons[curr_lesson_num];

  return (
    <div className="lesson-page">
      <Lesson lesson={lesson} course_size={lessons.length} course_slug={course_slug} />
      <LessonsPane {...props} />
    </div>
  );
};

LessonPage.propTypes = {
  course_title: PropTypes.string.isRequired,
  curr_lesson_num: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired,
      start: PropTypes.number,
      end: PropTypes.number,
      length: PropTypes.number.isRequired,
      video_id: PropTypes.string.isRequired,
      video_title: PropTypes.string.isRequired,
      video_description: PropTypes.string.isRequired,
      channel_id: PropTypes.string.isRequired,
      channel_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  course_slug: PropTypes.string.isRequired,
  prev_slug: PropTypes.string,
  next_slug: PropTypes.string,
};

LessonPage.defaultProps = {
  prev_slug: '',
  next_slug: '',
};

export default LessonPage;
