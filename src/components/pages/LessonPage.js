import React, { Component } from 'react'
import { Lesson, LessonsPane } from '..';
import '../../css/pages/LessonPage.scss';
import DUMMY_DATA from '../lesson/DUMMYDATA.js';

export default class LessonPage extends Component {
  constructor(props) {
    super(props);

    this.state = DUMMY_DATA;
  }

  render() {
    const {activeId, lessons } = this.state;
    const { title, src, desc, id} = lessons.find(elem => elem.id === activeId);

    return (
      <div className="lesson-page">
        <Lesson id={id} title={title} src={src} desc={desc} />
        <LessonsPane links={lessons} activeId={activeId} />
      </div>
    )
  }
}
