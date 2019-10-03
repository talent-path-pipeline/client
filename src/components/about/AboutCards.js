import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../css/about/AboutCards.scss';

// TODO: this component doesn't need a state and should be a stateless component
// TODO: Also, this should maybe have a clearer name, like AboutInfoCards or something, since we have the team cards components
export default class AboutCards extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // ===============================================================
  // Handlers

  // ===============================================================
  // Render

  render() {
    return (
      <section className="cardWrapper">
        <section className="card">
          <img className="icon" src="/images/dndWhite.png" alt="People" />
          <p className="cardDescription">
            We teach you everything you need to know to start playing Dungeons And Dragons
            with your friends!
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
            alt="White Jesus" // TODO: wat? this needs a better alt, also we should just locally store this image or use an icon site or something
          />
          <p className="cardDescription">
            Our goal is to spread the love for D&D by providing an easy-to-learn interface
            that educates anyone how to play!
          </p>
        </section>
      </section>
    );
  }
}