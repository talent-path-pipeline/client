import React from 'react';
import '../css/Footer.scss';

const Footer = () => (
  <footer className="page-footer">
    <p>
      Product of <br />
      <a href="https://talentpath.com/">Talent Path</a>
    </p>
    <div>
      <a href="https://github.com/talent-path-pipeline">
        <img  className="footer-logo" src="/images/SA_IconLogo-Final.png" alt="stonehaven-logo" />
      </a>
      <p>
        © 2019 
        <a href="https://github.com/talent-path-pipeline"> Stonehaven Academy</a>
      </p>
    </div>
    <a href="https://forms.gle/2YMiTeQ4iuZByx4ZA">Send Feedback!</a>
  </footer>
);

export default Footer;
