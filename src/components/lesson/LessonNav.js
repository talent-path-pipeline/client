import React from 'react';
import '../../css/lesson/LessonNav.scss';

const LessonNav = props => (
  <div className="lesson-nav">
    {/* <p style={{color: 'black'}}>Lesson Nav buttons go here</p> */}
    <button className='prev-btn btn'>← Prev</button>
    <button className="next-btn btn">Next →</button>
  </div>
);

export default LessonNav;