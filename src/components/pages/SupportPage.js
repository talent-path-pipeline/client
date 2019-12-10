import React from 'react';
import { QandA } from '..';
import { QA_SITE, QA_DND } from '../../data';
import '../../css/pages/SupportPage.scss';

const SupportPage = () => (
  <div className="support-container">
    <h1 className="support-title">Support and FAQ</h1>
    <hr className="breakline" />
    <QandA
      questions_answers={QA_SITE}
      title="Frequently Asked Questions For Using This Site"
    />
    <QandA questions_answers={QA_DND} title="Common Questions About Playing D&D" />
  </div>
);

export default SupportPage;
