import React, { Component } from 'react'
import { Lesson, LessonsPane } from '..';
import '../../css/lesson/Lesson.scss';

export default class LessonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 2,
      lessons: [
        {
          id: 1,
          title: 'Lesson 1: HTML 101',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '30:05',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 2,
          title: 'Lesson 2: Advanced HTML',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '23:16',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 3,
          title: 'Lesson 3: CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '26:32',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 4,
          title: 'Lesson 4: Advanced CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '25:11',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 5,
          title: 'Lesson 5: Best Practices',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: '19:34',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
      ],
    }
  }

  render() {
    const {id, lessons } = this.state;
    const lesson = lessons.find(elem => elem.id === id);
    return (
      <div>
        <Lesson lesson={lesson} />
        <LessonsPane links={lessons} activeId={id} />
      </div>
    )
  }
}
