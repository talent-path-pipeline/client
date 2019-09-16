import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/about/AboutCards.scss';

export default class AboutCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // ===============================================================
  // Handlers

  // ===============================================================
  // Render

  render() {
    return (
      <section className="content">
        <section className="mint landing">
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560874061996228628/People_White.png?width=512&height=450"
            alt="People"
          />
          <p className="minty">
            We teach you everything you need to know to start playing Dungeons And Dragons with your friends!
          </p>
        </section>
        <section className="mint landing">
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560871549674979338/Question_Head_White.png?width=450&height=450"
            alt="Person questioning something"
          />
          <p className="minty">
            Follow our hand-crafted course to start learning!
          </p>
          <p className="minty">
            Join us in this journey to become the Ultimate D&D master!
          </p>
        </section>

        <section className="mint landing">
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560868650899341351/WhiteJesus.png?width=450&height=450"
            alt="White Jesus"
          />
          <p className="minty">
          Our goal is to teach you how to setup the perfect game.
          </p>
        </section>
      </section>
    );
  }
}