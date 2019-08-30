import React, { Component } from 'react'
import { Lesson, LessonsPane } from '..';
import '../../css/lesson/Lesson.scss';

export default class LessonPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeId: 2,
      lessons: [
        {
          id: 1,
          title: 'Lesson 1: HTML 101',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 23603,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 2,
          title: 'Lesson 2: Advanced HTML',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 33404,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 3,
          title: 'Lesson 3: CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 47532,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 4,
          title: 'Lesson 4: Advanced CSS',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 6434,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
        {
          id: 5,
          title: 'Lesson 5: Best Practices',
          src: 'http://www.youtube.com/embed/UkWd0azv3fQ',
          length: 12754,
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
        },
      ],
    }
  }

  render() {
    const {activeId, lessons } = this.state;
    const { title, src, desc, id} = lessons.find(elem => elem.id === activeId);

    return (
      <div>
        <Lesson id={id} title={title} src={src} desc={desc} />
        <LessonsPane links={lessons} activeId={activeId} />
      </div>
    )
  }
}
