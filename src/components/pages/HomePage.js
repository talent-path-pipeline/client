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
        <div id="company-info">
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
        <hr/>
        <div id="start-path">
          <h2>Start your Path today!</h2>
          <div id="path-image">Software Engineering</div>
        </div>
        <hr/>
        <div>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                <li className="glide__slide">0</li>
                <li className="glide__slide">1</li>
                <li className="glide__slide">2</li>
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button type="button" className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
              <button type="button" className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default HomePage;
