import React, { Component } from 'react'
import { LessonLink } from '..';

export default class LessonsPane extends Component {
  constructor(props) {
    super(props);

    this.state ={
      lessons: [
        {
          id: 1,
          title: 'Lesson 1: HTML 101',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '30:05',
        },
        {
          id: 2,
          title: 'Lesson 2: Advanced HTML',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '23:16',
        },
        {
          id: 3,
          title: 'Lesson 3: CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '26:32',
        },
        {
          id: 4,
          title: 'Lesson 4: Advanced CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '25:11',
        },
        {
          id: 5,
          title: 'Lesson 5: Best Practices',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '19:34',
        },
      ],

    }
  }

  render() {
    const { lessons } = this.state
    return (
      <div className='lessons-pane'>
        {
          lessons.map( ({id, title, src, length}) => <LessonLink id={id} title={title} src={src} length={length} key={id} />)
        }
      </div>
    )
  }
}
