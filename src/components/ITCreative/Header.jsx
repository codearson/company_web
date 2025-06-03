import React from 'react';

const Header = () => {
  return (
    <header className="style-7">
      <div className="content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="info mt-5 mt-lg-0">
                <div className="section-head style-4">
                  <div className="top-title">
                    <img src="/assets/img/line_l.png" alt="" />
                    <h5> Get Solid Solution </h5>
                  </div>
                </div>
                <h1>
                  Choose The <br /> <span className="num"> #01 </span> <span className="text-grad"> IT Solutions </span> <br /> WP Theme.
                </h1>
                <div className="d-flex flex-wrap">
                  <a href="/page-contact-app" className="btn btn-icon-circle rounded-pill bg-blue7 fw-bold text-white me-4" target="_blank">
                    <small> Get Started Now <i className="fas fa-long-arrow-alt-right"></i> </small>
                  </a>
                  <div className="inf mt-3 mt-lg-0">
                    <p className="color-999"> Support Email </p>
                    <a href="mailto:lathusanthurairajah@codearson.com" className="fw-bold"> lathusanthurairajah@codearson.com </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img mt-4 mt-lg-0">
                <img src="/assets/img/header/head_img7.png" alt="" />
                <img src="/assets/img/header/head7_rock.png" alt="" className="rock7 slide_up_down" />
              </div>
            </div>
            <div className="col-12">
              <div className="sponsers mt-30">
                <div className="title me-5 flex-shrink-0">
                  Happy <br /> <span className="fw-bold"> Sponsors </span>
                </div>
                <div className="sponsers-content">
                  <a href="https://sponsor1.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/logos/18.png" alt="Sponsor 1" />
                  </a>
                  <a href="https://sponsor2.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/logos/19.png" alt="Sponsor 2" />
                  </a>
                  <a href="https://sponsor3.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/logos/20.png" alt="Sponsor 3" />
                  </a>
                  <a href="https://sponsor4.com" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/img/logos/21.png" alt="Sponsor 4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/img/header/head7_bg.png" alt="" className="head7_bg slide_up_down" />
    </header>
  )
}

export default Header;