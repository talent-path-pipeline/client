import React, { Component } from 'react'
import LessonLink from './LessonLink';

export default class LessonsPane extends Component {
  constructor(props) {
    super(props);

    this.state ={
      lessons: [
        {
          id: 1,
          title: 'Lesson 1',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 600,
        },
        {
          id: 2,
          title: 'Lesson 2',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 1200,
        },
        {
          id: 3,
          title: 'Lesson 3',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 943,
        },
        {
          id: 4,
          title: 'Lesson 4',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 487,
        },
        {
          id: 5,
          title: 'Lesson 5',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 755,
        },
      ],

    }
  }

  render() {
    const { lessons } = this.state
    return (
      <div>
        <LessonLink/>
        {
          lessons.map( ({id, title, src, length}) => <LessonLink id={id} title={title} src={src} length={length} />)
        }
      </div>
    )
  }
}
