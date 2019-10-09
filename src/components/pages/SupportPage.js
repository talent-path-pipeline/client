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
          'Stonehaven Academy is a web application dedicated towards educating and promoting Dungeons and Dragons to the public. We provide courses to better prepare new players or as a refresher for veterans.',
      },
      {
        key: 2,
        question: 'Do I need to have experience in DnD?',
        answer:
          'Nope. Dnd requires no previous experience for playing. All that requires is a group of friends to play with.',
      },
      {
        key: 3,
        question: 'Do we collect anything from you?',
        answer:
          'We do not collect anything from you. Our app is designed to provide you the resouces to get started playing. Some of our resources do use third party services such as Youtube.',
      },
      {
        key: 4,
        question: 'Do I need to buy anything to get started?',
        answer:
          'All you need is the 5th edition Player\'s handbook, one set of dice (D4,D6,D10,D20), printed character sheets, pencils, a whiteboard (for maps), dry erase markers and an adventure (a premade book that contains a story, NPCs and monsters).',
      },
      {
        key: 5,
        question: 'Who do I notify if I see an problem on the site?',
        answer:
          'Currently we do not have any other methods of communication with our team outside of email.',
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
        key: 1,
        question: 'How long can a session last?',
        answer:
          'Depending on the game you are playing. Most sessions last from several hours to years.',
      },
      {
        key: 2,
        question: 'What types of dice are needed for a session?',
        answer:
          'The following are recommended to start off: D4, D6, D10, and a D20',
      },
      {
        key: 3,
        question: 'Can I reuse old character sheets?',
        answer:
          'Really up to you and your group if they want to relive past adventures.',
      },
      {
        key: 4,
        question: 'What are some good beginner campaigns?',
        answer:
          'There are a huge amount of campaigns available for people who are starting out.',
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

export default SupportPage;
