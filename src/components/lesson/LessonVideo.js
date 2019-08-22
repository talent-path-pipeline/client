import React from 'react';

export const LessonVideo = ({title, src, time = 0}) => <div>
  {/* <video controls>
    <track kind="captions" />
    <source src={src} currentTime={time} />
  </video> */}
  <iframe title={title} allowFullScreen="" frameBorder="0" height="315" src={ `${src}?start=${time}`|| `http://www.youtube.com/embed/UkWd0azv3fQ`} width="420" />
</div>

