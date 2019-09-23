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
        <div className="QABox">
          <div className="question" onClick={e => this.togglePanel(e)}>
            {this.props.title}
          </div>

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
    ],
  };
  render() {
    return (
      <div>
        <h2>Frequently Asked Questions</h2>
        {this.state.QuestionsAnswers.map(QA => (
          <Collapsible key={QA.key} title={QA.question}>
            <div>
              <p>{QA.answer}</p>
            </div>
          </Collapsible>
        ))}
      </div>
    );
  }
}
export default QandA;
