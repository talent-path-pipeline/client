import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProgressBar } from '..';
import '../../css/dashboard/LessonCard.scss';

const LessonCard = ({ lesson }) => {
  let value = 0;
  if (lesson.completed) {
    value = lesson.length;
  } else {
    value = lesson.start ? lesson.timestamp - lesson.start : lesson.timestamp;
  }

  return (
    <Link to={`/courses/${lesson.course_slug}/${lesson.order}`} className="lesson-card">
      <h4 className="lesson-title">{lesson.title}</h4>
      <p className="lesson-description">{lesson.description}</p>
      <ProgressBar value={value} max={lesson.length} label="%" />
    </Link>
  );
};

LessonCard.propTypes = {
  lesson: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    start: PropTypes.number,
    end: PropTypes.number,
    length: PropTypes.number.isRequired,
    order: PropTypes.number.isRequired,
    completed: PropTypes.bool,
    timestamp: PropTypes.number.isRequired,
    course_slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default LessonCard;
