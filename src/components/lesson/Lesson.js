import React from 'react';
import PropTypes from 'prop-types';
import { LessonVideo, LessonInfo } from '..';
import '../../css/lesson/Lesson.scss';

const Lesson = ({ title, src, desc, id }) => (
  <div className='lesson' key={id}>
    <LessonVideo title={title} src={src} />
    <LessonInfo title={title} desc={desc} />
  </div>
);

Lesson.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Lesson;