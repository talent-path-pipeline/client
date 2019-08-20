import React from 'react';
import '../../css/home-page.scss'
import Glide from '@glidejs/glide'

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state ={

    }
  }

  componentDidMount = () => {
    new Glide('.glide').mount()
  }

  render () {
    return (
      <div>
        <img id="main-splash" src="./images/sample-splash.jpg" alt="main-splash"/>
        <div id="company-information">
          <div id="company-grid">
            <section className="company-box">
              {/* <img src="" alt="info-photo"/> */}
              <div>Temporary</div>
              <h3>title</h3>
              <p>Information</p>
            </section>
            <section className="company-box">
              {/* <img src="" alt="info-photo"/> */}
              <div>Temporary</div>
              <h3>title</h3>
              <p>Information</p>
            </section>
            <section className="company-box">
              {/* <img src="" alt="info-photo"/> */}
              <div>Temporary</div>
              <h3>title</h3>
              <p>Information</p>
            </section>
            <section className="company-box">
              {/* <img src="" alt="info-photo"/> */}
              <div>Temporary</div>
              <h3>title</h3>
              <p>Information</p>
            </section>
          </div>
        </div>
        <hr/>
        <div id="start-path">
          <h2>Start your Path today!</h2>
          <div id="path-image">Software Engineering</div>
        </div>
        <hr/>
        <div id="testimonials">
          <h2>Testimonials</h2>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">
                  <p className="testimonial-text">
                  “I feel like I'm learning a lot and this is a really unique opportunity.
                   We're treated really well and all the management and all the other people in the program are great,
                    and I'm really enjoying myself. It barely feels like a real job because of how much I'm enjoying coming to work every day.”
                  </p>
                  <div className="testimonial-author-container">
                    <h4>Sam Saks-Fithian</h4>
                    <h6>Talent Path Consultant</h6>
                  </div>
                </li>
                <li className="glide__slide">
                  <p className="testimonial-text">
                  "You could see the value of the program. And we were impressed.
                   I report to the Interim CTO of our Americas technology group and right away – within a week or so
                    – I had no reservations about putting our Talent Path consultants in front of him to present some
                     of what they worked on when they first arrived."
                  </p>
                  <div className="testimonial-author-container">
                    <h4>Director -Strategy & Operations</h4>
                    <h6>Fortune 100 Food Services Company</h6>
                  </div>
                </li>
                <li className="glide__slide">
                  <p className="testimonial-text">
                  “I really feel comfortable that I am learning more and refining my skills before the workplace.
                   I also feel like this is allowing me to rediscover my comfort zone in public
                    - because I had really become introverted since High School,
                     but I am finally coming out of my shell and being active again in conversations and participation
                      - and it feels good honestly.”
                  </p>
                  <div className="testimonial-author-container">
                    <h4>Brock Jameson</h4>
                    <h6>Talent Path Consultant</h6>
                  </div>
                </li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button type="button" className="glide__arrow glide__arrow--left" data-glide-dir="<">Back</button>
              <button type="button" className="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default HomePage;
