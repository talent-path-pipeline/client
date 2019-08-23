import React from 'react'

const LessonInfo = ({ title, desc}) => <div className="lesson-info"><h3>{title || 'Lesson'}</h3><p>{desc || 'No description provided'}</p></div>

export default LessonInfo;