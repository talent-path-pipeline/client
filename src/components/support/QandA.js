import React from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';

const checkValue = event => {
  if (event.target.checked)
    ReactGA.event({ category: 'Info', action: 'User opened a QandA question'});
  else
    ReactGA.event({ category: 'Info', action: 'User closed a profile'});
};

const QandA = ({ title, questions_answers }) => (
  <div className="container">
    <h2 className="FAQTitle">{title}</h2>
    <div className="tabs">
      {questions_answers.map(QA => (
        <div className="tab" key={QA.key}>
          <input type="checkbox" id={QA.key} onChange={checkValue} />
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label className="tab-label" htmlFor={QA.key}>
            {QA.question}
          </label>
          <div className="tab-content">{QA.answer}</div>
        </div>
      ))}
    </div>
  </div>
);

QandA.propTypes = {
  title: PropTypes.string.isRequired,
  questions_answers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      question: PropTypes.string,
      answer: PropTypes.string,
    }),
  ).isRequired,
};

export default QandA;
