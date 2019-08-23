import React from 'react'

const LessonInfo = ({ title, desc}) => <div className="lesson-info"><h4>Now playing:</h4><h2>{title || 'Lesson'}</h2><p>{desc || 'No description provided'}</p></div>

export default LessonInfo;