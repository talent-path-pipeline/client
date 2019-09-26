import React from 'react';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="outerBox">
        <div className="QABox" onClick={e => this.togglePanel(e)}>
          <div className="question">{this.props.title}</div>
          {this.state.open ? <div className="answer">{this.props.children}</div> : null}
        </div>
        <br />
      </div>
    );
  }
}

class QandA extends React.Component {
  state = {
    QuestionsAnswers: [
      {
        key: 1,
        question: 'What is Stonehaven Academy?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 2,
        question: 'Do I need to have experience in DnD?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 3,
        question: 'Do we collect anything from you?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 4,
        question: 'Do I need to buy anything to get started?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 5,
        question: 'How many players can I have as team?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 6,
        question: 'What is your quest?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <h2 className="FAQTitle">Frequently Asked Questions</h2>
        <div className="tabs">
          {this.state.QuestionsAnswers.map(QA => (
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
}
export default QandA;
