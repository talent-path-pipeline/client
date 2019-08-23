import React from 'react'

const LessonLink = ({title, src, length}) => <div className='lesson-link' key={title}>
  <div className="link" ><p>{title}</p>
    <p>{length}</p></div>
</div>

export default LessonLink;
