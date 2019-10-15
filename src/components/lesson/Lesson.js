import React from 'react';
import PropTypes from 'prop-types';
// import YouTube from 'react-youtube';
// https://www.npmjs.com/package/react-youtube
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ title, src, description, order }) => (
  <div className="lesson" key={order}>
    {/* <YouTube videoId={} opts={} onEnd={} /> */}
    <LessonVideo title={title} src={src} />
    <LessonInfo title={title} description={description} />
  </div>
);

Lesson.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default Lesson;
