import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ noWave }) => {
  const location = useLocation();

  return (
    <footer className={`style-4 ${noWave ? 'mt-0 pt-100':''}`} data-scroll-index="8">
      <div className="container">
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/codearsonlogo.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                  <Link to="/page-about-app" className={location.pathname === '/page-about-app' ? 'active' : ''}>About</Link>
                </li>
                <li>
                  <Link to="/page-portfolio-app" className={location.pathname === '/page-portfolio-app' ? 'active' : ''}>Portfolio</Link>
                </li>
                <li>
                  <Link to="/page-services-app" className={location.pathname === '/page-services-app' ? 'active' : ''}>Services</Link>
                </li>
                <li>
                  <Link to="/page-contact-app" className={location.pathname === '/page-contact-app' ? 'active' : ''}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            © 2025 Copyrights by <span className="fw-bold text-decoration-underline">CODEARSON</span> All Rights Reserved. Designed by <span className="fw-bold text-decoration-underline">CODEARSON TEAM</span>
          </small>
        </div>
      </div>
      { !noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" /> }
    </footer>
  )
}

export default Footer