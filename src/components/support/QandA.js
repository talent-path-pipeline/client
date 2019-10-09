import React from 'react';

const QandA = (props) =>{
  return (
    <div className="container">
    <h2 className="FAQTitle">{props.title}</h2>
      <div className="tabs">
        {props.QuestionsAnswers.map(QA => (
          <div class="tab">
            <input type="checkbox" id={QA.key}></input>
            <label class="tab-label" for={QA.key}>{QA.question}</label>
            <div class="tab-content">
              {QA.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QandA;
