import React from 'react';
import ReactGA from 'react-ga';

const checkValue = event => {
  if (event.target.checked)
    ReactGA.event({ category: "Info", action: "User opened a QandA question"});
  else
    ReactGA.event({ category: "Info", action: "User closed a profile"});
}

const QandA = props =>(
  <div className="container">
    <h2 className="FAQTitle">{props.title}</h2>
    <div className="tabs">
      {props.QuestionsAnswers.map(QA => (
        <div className="tab">
          <input type="checkbox" id={QA.key} onChange={checkValue} />
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
