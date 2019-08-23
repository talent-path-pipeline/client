import React from 'react'

const LessonLink = ({title, src, length}) => <div>
  <a href={src}><h3>{title}</h3>
    <p>{length}</p></a>
</div>

export default LessonLink;
