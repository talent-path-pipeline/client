import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/lesson/YouTubeInfo.scss';

export default class YouTubeInfo extends Component {
  static propTypes = {
    lesson: PropTypes.shape({
      video_id: PropTypes.string.isRequired,
      video_title: PropTypes.string.isRequired,
      video_description: PropTypes.string.isRequired,
      channel_id: PropTypes.string.isRequired,
      channel_name: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  /**
   * Toggles the `open` tracker on state, which is used to collapse or open the description
   */
  toggleOpen = () => this.setState(prevState => ({ open: !prevState.open }));

  /**
   *
   * @param {string} line the string containing the line content to be parsed/formatted
   * @param {number} index the index to potentially use in the key for the returned element
   * @returns {JSX.Element} a single element containing the formatted data
   */
  formatLine = (line, index) => {
    const basic_url_pattern = RegExp(
      /\b(?:https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;()]*[-A-Z0-9+&@#/%=~_|()]/,
      'gi',
    );

    // eslint-disable-next-line react/no-array-index-key
    if (!line) {
      return <p className="pad-line" key={`empty${index}`} />;
    }
    if (RegExp(/^\s*(-|=|_)\1+\s*$/).test(line)) {
      // eslint-disable-next-line react/no-array-index-key
      return <hr className="breakline" key={`breakline${index}`} />;
    }
    const links = line.match(basic_url_pattern);
    let print_line = line;
    // NOTE: there's gotta be a better way to do this
    if (links) {
      let linked_line = line;
      // replace all the links with something unique so the line can be split to be
      // remerged as JSX
      links.forEach((link, link_num) => {
        linked_line = linked_line.replace(link, `*&*=Link ${link_num}=*&*`);
      });
      const line_elements = linked_line.split('*&*');
      // smash the parts of the line back together but as JSX instead of a string
      print_line = line_elements.map(element => {
        const was_link = /=Link (\d+)=/.exec(element);
        // if element was just the normal text bit, just put it back
        if (!was_link) {
          return element;
        }
        const link_num = parseInt(was_link[1], 10);
        // otherwise, it used to be a link, so create an <a> tag for it
        return (
          <a
            key={link_num}
            href={links[link_num]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {links[link_num]}
          </a>
        );
      });
    }
    return (
      <p className="yt-desc-line" key={line.slice(0, 20)}>
        {print_line}
      </p>
    );
  };

  /**
   * Takes in a string with an unformatted description, including `\n` characters to indicate
   * line breaks, and turns it into a formatted JSX Element with breaks between lines
   * and working links.
   * @param {string} description the unformatted description
   * @returns {JSX.Element} a formatted JSX element with correct line breaks and working links
   */
  formatDescription = description => {
    if (!description) return <></>;
    return (
      <div className="yt-desc-text">{description.split('\n').map(this.formatLine)}</div>
    );
  };

  render() {
    const {
      lesson: { video_id, channel_name, channel_id, video_title, video_description },
    } = this.props;

    return (
      <div className="yt-info">
        <h3 className="subheader">YouTube Credits:</h3>
        <h4 className="promo">
          {`If you like this content, check out the awesome original creator! You can 
          find a link to their YouTube channel below, as well as the info they provided
          on the original video (which often contains related links).`}
        </h4>
        <section className="yt-chan chunk">
          <span className="title">Channel: </span>
          <a
            href={`https://www.youtube.com/channel/${channel_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {channel_name || 'YouTube Channel'}
          </a>
        </section>
        <section className="yt-title chunk">
          <span className="title">Video Title: </span>
          <a
            href={`https://www.youtube.com/watch?v=${video_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {video_title || 'Original YouTube Video'}
          </a>
        </section>
        <section className="yt-desc chunk">
          <p className="title">Video Description: </p>
          {!video_description
            ? 'YouTube Description'
            : this.formatDescription(video_description)}
        </section>
      </div>
    );
  }
}
