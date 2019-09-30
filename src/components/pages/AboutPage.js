import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  AboutInfo from '../about/AboutInfo';
import '../../css/pages/AboutPage.scss';

export default class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'How do we make you an expert Dungeon Master?',
      subtitle: 'About Stonehaven Academy',
      image_link: './images/path-image-main.jpg',
    };
  }

  // ===============================================================
  // Handlers

  // ===============================================================
  // Render

  render() {
    return (
      <div className="about-page">
      <AboutInfo
        title={this.state.title}
        subtitle={this.state.subtitle}
        image_link={this.state.image_link}
      />
    </div>
    );
  }
}