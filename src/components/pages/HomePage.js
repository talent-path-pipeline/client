import React from 'react';
import '../../css/pages/HomePage.scss';
// import Glide from '@glidejs/glide/';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount = () => {
  //   new Glide('.glide').mount();
  // };

  render() {
    return (
      <div>
        <section id="splash-container">
          <div id="call-to-action">
            <h3>Start your path as a Dungeon Master Today</h3>
            {/* <button type="button">Click here</button> */}
          </div>
          <img className="splash-image" src="./images/splash-main2.png" alt="" />
          {/* <svg width="100%" height="20px">
            <clipPath id="clipPolygon">
              <polygon points="-1 419,960 421,0 367" />
            </clipPath>
          </svg> */}
        </section>
        <div id="company-name">
          <h2>Welcome to</h2>
          <h2>Stonehaven Academy</h2>
          {/* <img id="path-image" src="./images/home-path-image.jpg" alt="Web Development Image" /> */}
        </div>
        <div id="company-information">
          <div id="company-grid">
            <section className="company-box">
              <img
                alt="About Stonehaven 1"
                src="https://img.icons8.com/windows/64/000000/dungeons-and-dragons--v2.png"
              />
              <div className="company-info">
                <p>
                  Here at Stonehaven Academy, we focused strictly on teaching you how to
                  play Dungeons and Dragons. This game requires an immense amount of
                  information that we are willing to teach you!
                </p>
              </div>
            </section>
            <section className="company-box">
              <img
                alt="About Stonehaven 2"
                src="https://img.icons8.com/ios-filled/64/000000/magical-scroll.png"
              />
              <div className="company-info">
                <p>
                  We’re unique because we have curated paths for you to follow as well as
                  different courses so that you can gain all the information you need to
                  start playing.{' '}
                </p>
              </div>
            </section>
            <section className="company-box">
              <img
                alt="About Stonehaven 3"
                src="https://img.icons8.com/ios-filled/64/000000/icosahedron.png"
              />
              <div className="company-info">
                <p>
                  Our goal is to help you understand those rolls and how to setup the
                  perfect game. Join us in this journey to become the ultimate D&D master!
                </p>
              </div>
            </section>
          </div>
        </div>
        {/* <div id="testimonials">
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <p>
                    This is where a testimonal goes about how great it was to learn how to
                    become a dungoen master
                  </p>
                </li>
                <li className="glide__slide">
                  <p>
                    This is where a testimonal goes about how great it was to learn how to
                    become a dungoen master
                  </p>
                </li>
              </ul>
            </div>
            <div className="glide__bullets" data-glide-el="controls[nav]">
              <button type="button" className="glide__bullet" data-glide-dir="=0" />
              <button type="button" className="glide__bullet" data-glide-dir="=1" />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default HomePage;
