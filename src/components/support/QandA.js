import React from 'react';
import classes from '../../css/support/support.scss';

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
      <div className={classes.QABox}>
        <div className={classes.question} onClick={e => this.togglePanel(e)}>
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className={classes.answer}>{this.props.children}</div>
        ) : null}
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
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 2,
        question: 'Do I need to have experience in DnD?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 3,
        question: 'Do we collect anything from you?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
    ],
  };
  render() {
    return (
      <div>
        {
          this.state.QuestionsAnswers.map(QA => ( 
            <Collapsible key={QA.key} title={QA.question}>
              <div>
                <p>{QA.answer}</p>
              </div>
            </Collapsible>
          ))
        }
      </div>
    );
  }
}
export default QandA;
