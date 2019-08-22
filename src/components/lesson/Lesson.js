import React, { Component } from 'react'
import { LessonVideo } from './LessonVideo';
import { LessonInfo } from './LessonInfo';
import { LessonsPane} from './LessonsPane';

export default class Lesson extends Component {
  render() {
    return (
      <div>
        <LessonVideo />
        <LessonInfo />
        <LessonsPane />
      </div>
    )
  }
}
