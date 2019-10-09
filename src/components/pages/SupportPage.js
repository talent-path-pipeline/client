import React from 'react';
import QandA from '../support/QandA'
import '../../css/support/support.scss';

class SupportPage extends React.Component{
  state = {
    QuestionsAnswersForSite: [
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
        question: 'Who do I notify if I see an problem on the site?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 6,
        question: 'Are the original creators getting credit and views for the content on this site?',
        answer:
          'Yes, all the videos are linked directly to thier Youtube channels so the original creators will get the views and any monitization that goes along with that. We encourge students to follow / subscribe to these creators to futher support them.',
      },
    ],
    QuestionsAnswersForDnD: [
      {
        key: 7,
        question: 'Who can be a Dungeon Master?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 8,
        question: 'How long can a session last?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 9,
        question: 'What types of dice are needed for a session?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 10,
        question: 'Can I reuse old character sheets?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 11,
        question: 'What happends to my character once they die?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
      {
        key: 12,
        question: 'What are some good beginner campaigns?',
        answer:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus soluta optio repellendus laudantium ad eaque similique. Dignissimos commodi eos expedita, ipsum est cupiditate corporis quibusdam quasi ipsa odio at doloremque?',
      },
    ],
  };
  render(){
    return (
      <div>
        <h1 className="supportTitle">Support Page</h1>
        <QandA QuestionsAnswers={this.state.QuestionsAnswersForSite} title={'Frequently Ask Questions on using this site'}/>
        <br/>
        <QandA QuestionsAnswers={this.state.QuestionsAnswersForDnD} title={'Common Questions on Playing DnD'}/>
    </div>
    )
  }
}

/*
const SupportPage = () => {
  return (
    <div>
      <h1 className="supportTitle">Support Page</h1>
      <QandA/>
    </div>
  )
}
*/


export default SupportPage;
