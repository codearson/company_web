import React from 'react';

const SideMenu = () => {
  const toggleSideMenu = (e) => {
    e.preventDefault();
    const side_menu = document.getElementById('side_menu');
    const side_overlay = document.querySelector('.side_overlay');

    side_menu && side_menu.classList.remove('show');
    side_overlay && side_overlay.classList.remove('show');
  }

  return (
    <>
      <div className="side_menu style-7" id="side_menu">
        <button className="side_menu_cls" onClick={toggleSideMenu}>
          <img src="/assets/img/icons/4dots.png" alt="Close menu" />
        </button>
        <div className="content">
          <div className="logo">
            <a href="/" className="w-100">
              <img src="/assets/img/logo_lgr.png" alt="Iteck Logo" />
            </a>
          </div>
          <div className="pages_links">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/shop">Shop</a></li>
            </ul>
          </div>
          <div className="side_foot">
            <h5>Get in touch</h5>
            <div className="row">
              <div className="col-lg-6">
                <a href="tel:+2355356868"> <i className="fal fa-phone-alt me-2"></i> (+23) 5535 68 68 </a>
              </div>
              <div className="col-lg-6">
                <a href="mailto:contact@iteck.co"> <i className="fal fa-envelope me-2 mt-4 mt-lg-0"></i> contact@Iteck.co </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side_overlay"></div>
    </>
  )
}

export default SideMenu