import React from 'react';
import PropTypes from 'prop-types';
// import YouTube from 'react-youtube';
// https://www.npmjs.com/package/react-youtube
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ lesson, course_size, base_path }) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  lesson ? (
    <div className="lesson" key={lesson.order}>
      <LessonVideo
        title={lesson.title}
        video_id={lesson.video_id}
        start={lesson.start}
        end={lesson.end}
        lessonId={lesson.uuid}
      />
      <LessonInfo lesson={lesson} course_size={course_size} base_path={base_path} />
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
  base_path: PropTypes.string.isRequired,
};

export default Lesson;
