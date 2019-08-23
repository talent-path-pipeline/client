import React, { Component } from 'react'
import LessonVideo from './LessonVideo';
import LessonInfo from './LessonInfo';
import LessonsPane from './LessonsPane';

export default class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'My First Lesson',
      desc: 'placeholder',
    }
  }

  render() {
    const {title, desc} = this.state
    return (
      <div>
        <LessonVideo />
        <LessonInfo title={title} desc={desc}/>
        <LessonsPane />
      </div>
    )
  }
}
