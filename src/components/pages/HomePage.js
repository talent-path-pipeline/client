import React from 'react';
import '../../css/pages/HomePage.scss'
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
        {/* <img id="main-splash" src="./images/sample-splash.jpg" alt="main-splash"/> */}
        <video id="main-splash" autoPlay loop="true">
          <source src="./videos/tp-homepage-video.mp4" type="video/mp4"/>
          {/* <source src="movie.ogg" type="video/ogg"/> */}
          <h1>Welcome to Talent Path Fleet</h1>
        </video>
        <div id="company-information">
          <div id="company-grid">
            <section className="company-box">
              <img src="https://img.icons8.com/ios-filled/50/000000/e-learning.png"/>
              <div className="company-info">
                <p>Talent Path is unlike anything you’ve seen. Bootcamps, academies, and online learning platforms all have two things in common: you pay them to learn and there is no guarantee of a job once completed.</p>
              </div>
            </section>
            <section className="company-box">
              <img src="https://img.icons8.com/ios-filled/50/000000/communication-skill.png" />
              <div className="company-info">
                <p>We’re unique because we hire you then pay you to learn hugely valuable skills and technologies for which there is immediate demand in the marketplace. Then we put you in a career launching role with a leading employer. </p>
              </div>
            </section>
            <section className="company-box">
              <img src="https://img.icons8.com/ios-filled/50/000000/investment.png" />
              <div className="company-info">
                <p>Get paid to learn and launch your career? We know it might sound too good to be true. We can afford to make an upfront investment in your career because clients help us recoup our investment during your tenure as a Talent Path consultant</p>
              </div>
            </section>
            <section className="company-box">
              <img src="https://img.icons8.com/ios-filled/50/000000/knowledge-sharing.png" />
              <div className="company-info">
                <p>You get the knowledge, skills, and first role you need to launch your career. And our work with clients allows us to keep doing what we do for future generations of Talent Path consultants. It’s that simple. No catch.</p>
              </div>
            </section>
          </div>
        </div>
        <hr/>
        <div id="start-path">
          <h2>Start your Path today!</h2>
          <img id="path-image" src="./images/home-path-image.jpg" alt="Web Development Image" />
          <h2 id="path-text">Web Development</h2>
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
