import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navbarScrollEffect from "../../../navbarScrollEffect";

const ITCreativeNav = () => {
  const navbarRef = useRef(null);
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const closeNav = () => {
    setIsNavOpen(false);
  }

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light style-7" ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/assets/img/logo_lgr.png" alt="Iteck Logo" />
        </Link>
        <button 
          className={`navbar-toggler ${isNavOpen ? 'collapsed' : ''}`} 
          type="button" 
          onClick={toggleNav}
          aria-controls="navbarSupportedContent" 
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-4">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-about-app" className={`nav-link ${isActive('/page-about-app') ? 'active' : ''}`} onClick={closeNav}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/page-portfolio-app" className={`nav-link ${isActive('/page-portfolio-app') ? 'active' : ''}`} onClick={closeNav}>
                portfolio
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/page-blog-app" className={`nav-link ${isActive('/page-blog-app') ? 'active' : ''}`} onClick={closeNav}>
                blog
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/page-contact-app" className={`nav-link ${isActive('/page-contact-app') ? 'active' : ''}`} onClick={closeNav}>
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default ITCreativeNav