import React from 'react';
import stonehavenLogo from '/images/SANavbarLogo.png';
import '../css/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="pageFooter">
        <p>
          Product of <br />
          <a href="https://talentpath.com/">Talent Path</a>
        </p>
        <div>
          <div>
            <img src={stonehavenLogo} alt="stonehavenLogo" />
          </div>
          <p>© 2019 Stonehaven Academy</p>
        </div>
        <a href="https://forms.gle/2YMiTeQ4iuZByx4ZA">Send Feedback!</a>
      </footer>
    );
  }
}

export default Footer;
