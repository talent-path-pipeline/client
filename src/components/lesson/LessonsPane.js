import React from 'react';
import PropTypes from 'prop-types';
import { LessonLink } from '..';
import '../../css/lesson/LessonsPane.scss';

const LessonsPane = ({ links, activeId }) => (
  <div className='lessons-pane'>
    <h2>Lessons</h2>
    {
      links.map( ({id, title, src, length}) => (
        <LessonLink id={id} title={title} src={src} length={length} key={id} active={id === activeId} />))
    }
  </div>
);

LessonsPane.propTypes = {
  activeId: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
  })).isRequired,
}

export default LessonsPane;
