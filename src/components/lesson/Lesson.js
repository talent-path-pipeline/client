import React, { Component } from 'react'
import LessonVideo from './LessonVideo';
import LessonInfo from './LessonInfo';
import { LessonVideo, LessonInfo, LessonsPane } from '..';
import '../../css/lesson/lesson.scss';

export default class Lesson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Lesson 1: HTML 101',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    }
  }

  render() {
    const {title, desc} = this.state
    return (
      <div className='lesson'>
        <LessonVideo />
        <LessonInfo title={title} desc={desc}/>
        <LessonsPane />
      </div>
    )
  }
}
