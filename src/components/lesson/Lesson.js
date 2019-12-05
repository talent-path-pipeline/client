import React from 'react';
import PropTypes from 'prop-types';
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ lesson, course_size, course_slug }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  lesson ? (
    <div className="lesson" key={lesson.order}>
      <LessonVideo
        title={lesson.title}
        video_id={lesson.video_id}
        start={lesson.start}
        end={lesson.end}
        length={lesson.length}
        lesson_id={lesson.uuid}
        course_id={lesson.courseUuid}
      />
      <LessonInfo lesson={lesson} course_size={course_size} course_slug={course_slug} />
    </div>
  ) : (
    <div className="no-lesson" />
  );

Lesson.propTypes = {
  lesson: PropTypes.shape({
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
  }).isRequired,
  course_size: PropTypes.number.isRequired,
  course_slug: PropTypes.string.isRequired,
};

export default Lesson;
