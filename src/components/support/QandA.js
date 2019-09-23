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
      <div>
        <div className={classes.title} onClick={e => this.togglePanel(e)}>
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className={classes.content}>{this.props.children}</div>
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
        question: 'Hello',
        answer: 'Goodbye',
      },
      {
        key: 2,
        question: 'Hello2',
        answer: 'Goodbye2',
      },
      {
        key: 3,
        question: 'Hello3',
        answer: 'Goodbye3',
      },
    ],
  };
  render() {
    return (
      <div>
        <Collapsible key={0} title="TEST TITLE">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio
              repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita,
              ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?
            </p>
          </div>
        </Collapsible>

        {this.state.QuestionsAnswers.map(QA => (
          <Collapsible key={QA.key} title={QA.title}>
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
