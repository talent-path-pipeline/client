import React from 'react';

const LessonVideo = ({title, src, time = 0}) => <div className="lesson-video">
  {/* <video controls>
    <track kind="captions" />
    <source src={src} currentTime={time} />
  </video> */}
  <iframe title={title} allowFullScreen="" frameBorder="0" height="600" width="900" src="https://www.youtube.com/embed/UB1O30fR-EE"  />
</div>

export default LessonVideo;
