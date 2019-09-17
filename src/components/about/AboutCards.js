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
      <section className="cardWrapper">
        <section className="card">
          <img
            className="icon"
            src="/images/dndWhite.png"
            alt="People"
          />
          <p className="cardDescription">
            We teach you everything you need to know to start playing Dungeons And Dragons with your friends!
          </p>
        </section>
        <section className="card">
          <img
            className="icon"
            src="/images/magicScrollWhite.png"
            alt="Person questioning something"
          />
          <p className="cardDescription">
            Follow our hand-crafted courses to start learning!
          </p>
          <p className="cardDescription">
            Start your journey to become the Ultimate D&D master!
          </p>
        </section>

        <section className="card">
          <img
            className="icon"
            src="https://media.discordapp.net/attachments/540283031001235477/560868650899341351/WhiteJesus.png?width=450&height=450"
            alt="White Jesus"
          />
          <p className="cardDescription">
          Our goal is to spread the love for D&D by providing an easy-to-learn interface that educates anyone how to play!
          </p>
        </section>
      </section>
    );
  }
}