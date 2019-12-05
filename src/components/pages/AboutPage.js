import React from 'react';
import { AboutTeam, InfoCard } from '..';
import { INFO_CARDS } from '../../data';
import '../../css/pages/AboutPage.scss';

const AboutPage = () => (
  <div className="about-page">
    <section className="header-container">
      <div className="image-overlay" />
      <div
        className="header-splash"
        alt="About Splash"
        style={{ backgroundImage: `url(/images/path-image-main.jpg)` }}
      />
      <div className="header-text">
        <h1 className="header-title">About Stonehaven Academy</h1>
        <h3 className="header-subtitle">How do we make you an expert Dungeon Master?</h3>
      </div>
    </section>
    <section className="info-card-section">
      {INFO_CARDS.map(card_info => (
        <InfoCard card_info={card_info} key={card_info.img_alt} />
      ))}
    </section>
    <hr className="breakline" />
    <h1 className="about-subtitle">Meet The Team</h1>
    <AboutTeam />
    {/* <hr className="breakline" />
    <h1 className="about-subtitle">Special Thanks To</h1>
    <AboutTeam /> */}
  </div>
);

export default AboutPage;
