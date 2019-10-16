import React from 'react';

const QandA = props =>(
  <div className="container">
    <h2 className="FAQTitle">{props.title}</h2>
    <div className="tabs">
      {props.QuestionsAnswers.map(QA => (
        <div className="tab">
          <input type="checkbox" id={QA.key} />
          <label className="tab-label" htmlFor={QA.key}>{QA.question}</label>
          <div className="tab-content">
            {QA.answer}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default QandA;
