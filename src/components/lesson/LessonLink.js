import React from 'react'

export const LessonLink = ({title, src, length}) => <div>
  <a href={src}><h3>{title}</h3>
    <p>{length}</p></a>
</div>
