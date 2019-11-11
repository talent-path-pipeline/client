import React from 'react';
import QandA from '../support/QandA';
import '../../css/pages/SupportPage.scss';

const questions_answers_site = [
  {
    key: 1,
    question: 'What is Stonehaven Academy?',
    answer: `Stonehaven Academy is a web application dedicated towards educating and promoting 
      Dungeons and Dragons to the public. We provide courses to better prepare new players 
      or as a refresher for veterans.`,
  },
  {
    key: 2,
    question: 'Do we collect anything from you?',
    answer: `We do not collect anything from you. You can log in and create an account, but the 
      most we ever store is your login information and lesson progress. Many of our lessons
      include YouTube videos, so if you are logged into your Google account that will track
      the video as watched on their end.`,
  },
  {
    key: 3,
    question: 'Who do I notify if I see a problem on the site?',
    answer: `If you see a problem, we would love your feedback! You can fill out our feedback form
      linked up in the navigation bar at the top, you can send an email to talentpathpipeline@gmail.com, 
      or you can submit an issue to our Github page (https://github.com/talent-path-pipeline).`,
  },
  {
    key: 4,
    question:
      'Are the original creators getting credit and views for the content on this site?',
    answer: `We are doing our best to ensure that yes, all creators are getting credit for any 
      content we use on this site. Any videos are embedded such that they still get credit 
      for the views and any related ads or monetization. We also encourage users to check out
      the creators' original YouTube channels, and we make sure to include all of their links 
      and content from the original videos so our users can easily follow, subscribe, and support them.`,
  },
];

const questions_answers_DnD = [
  {
    key: 5,
    question:
      'How do I get into D&D? Do I need to read things or get experience before I play?',
    answer: `Dungeons and Dragons 5th edition (the current edition) is made to be very accessible
      and easy to get into for anyone who wants to do so. All you really need to do is read 
      the free Basic Rules (https://dnd.wizards.com/articles/features/basicrules) published 
      by Wizards of the Coast, and gather some friends. Having at least one person who has 
      played before is recommended, but not required. See below to get recommendations for 
      how to find people with whom to play.`,
  },
  {
    key: 6,
    question:
      'I am interested in playing, but how or where do I find people to play with?',
    answer: `There are lots of places! If you can find a local game shop, many of them will 
      have bulletin board postings of people looking for players, and many even have weekly 
      D&D nights where you can just show up and meet other people who want to play and join 
      a game. The 'Looking For Games' subreddit (https://www.reddit.com/r/lfg/) is also a 
      good place to look.`,
  },
  {
    key: 7,
    question: `I always see people rolling some kind of dice for D&D. Do I need to buy some 
      to be able to play, and what kind of dice even are they?`,
    answer: `You don't necessarily need to buy your own dice to play. If you are playing at a local 
      game store or with experienced players, often times someone will have spares that you 
      can borrow. If you're playing with people online (or even in person) you could even 
      use digital dice rollers -- though some people frown upon this (and it's definitely not 
      as satisfying).

      If you do get your own dice, you're probably going to want a 7 dice set: one each of a 
      D4, D6, D8, D10, D12, D20, and a percentile die (basically a D10 but with 00-90). The 
      most important one is a D20, so you can often even just get by with one of those. If 
      you want to be fully prepared, we'd recommend having two D20s and four D6s, which can 
      make several common rolls easier to do all at once.`,
  },
  {
    key: 8,
    question: 'Do I need to buy anything to get started?',
    answer: `Not really, if you don't want! One of the beauties of D&D is that most of what 
      you need are a good imagination and people to play with. The core rules you need can be 
      found in the Basic Rules published by Wizards of the Coast (https://dnd.wizards.com/articles/features/basicrules) 
      and are completely free. If you want to get more in-depth you can purchase the 5th Edition 
      Player's Handbook and any of the other supplemental resource books from Wizards of the Coast. 

      If you are running a game yourself you probably want the Dungeon Master's Guide, as well 
      as optionally a pre-written adventure (or you can use a free one, mentioned below, or make 
      one yourself), a whiteboard (for maps), dry erase markers, mini figures, etc. If you 
      are playing with other experienced players or at a game shop, you can probably borrow 
      things from other players (just like dice, as mentioned above).
      
      You can also purchase digital copies of the source books places like DnDBeyond (www.dndbeyond.com), 
      which often also have plenty of other good resources, or find them online in various places
      like The Trove (https://thetrove.net/).`,
  },
  {
    key: 9,
    question: 'What are some good beginner campaigns?',
    answer: `There are tons of options for people just starting out. If you want an official 
      published adventure, The Lost Mines of Phandelver or Dragon of Icespire Peak are the best 
      for both beginner players as well as beginner Dungeon Masters. They were released with 
      the D&D 5e Starter Set and Essentials Kit (respectively), but the adventures themselves 
      can also be bought online individually. There are lots of other official published 
      campaigns with various themes, aesthetics, and complexities, so we suggest looking for 
      something that sounds fun to you. Most of them have a suggested level progression for 
      players, so good ones for beginners are anything that starts at level 1 and goes to level 5 
      or so.
      If you are open to more variety (but also wider variance of quality and detail), or are 
      just looking for a more one-shot (single session) adventure type thing, you can find 
      tons of content published by other enthusiasts on sites like DM's Guild (https://www.dmsguild.com/). 
      Lots of the user-created ("homebrew") content is free, with some larger or more detailed 
      content having set (but usually low) prices.`,
  },
];

const SupportPage = () => (
  <div className="support-container">
    <h1 className="support-title">Support and FAQ</h1>
    <hr className="breakline" />
    <QandA
      questions_answers={questions_answers_site}
      title="Frequently Asked Questions For Using This Site"
    />
    <QandA
      questions_answers={questions_answers_DnD}
      title="Common Questions About Playing D&D"
    />
  </div>
);

export default SupportPage;
