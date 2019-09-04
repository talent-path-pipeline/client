import React from 'react';
import PropTypes from 'prop-types';
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';

function LessonPage(props)  {
  const {activeId, lessons } = props;
  const { title, src, desc, id} = lessons.find(elem => elem.id === activeId);

  return (
    <div className="lesson-page">
      <Lesson id={id} title={title} src={src} desc={desc} />
      <LessonsPane links={lessons} activeId={activeId} />
    </div>
  )
}

LessonPage.propTypes  = {
  activeId: PropTypes.number.isRequired,
  lessons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
}


export default LessonPage;

