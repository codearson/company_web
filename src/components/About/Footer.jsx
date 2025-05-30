import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ noWave, rtl }) => {
  const location = useLocation();

  return (
    <footer className={`style-4 ${noWave ? 'mt-0 pt-100':''}`} data-scroll-index="8">
      <div className="container">
        <div className="foot">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="/assets/img/logo_lgr.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{ rtl ? 'الرئيسية' : 'Home' }</Link>
                </li>
                <li>
                  <Link to="/page-about-app" className={location.pathname === '/page-about-app' ? 'active' : ''}>{ rtl ? 'من نحن' : 'About' }</Link>
                </li>
                <li>
                  <Link to="/page-portfolio-app" className={location.pathname === '/page-portfolio-app' ? 'active' : ''}>{ rtl ? 'المشاريع' : 'Portfolio' }</Link>
                </li>
                <li>
                  <Link to="/page-services-app" className={location.pathname === '/page-services-app' ? 'active' : ''}>{ rtl ? 'الخدمات' : 'Services' }</Link>
                </li>
                {/* <li>
                  <Link to="/page-blog-app" className={location.pathname === '/page-blog-app' ? 'active' : ''}>{ rtl ? 'الاخبار' : 'blog' }</Link>
                </li> */}
                <li>
                  <Link to="/page-contact-app" className={location.pathname === '/page-contact-app' ? 'active' : ''}>{ rtl ? 'اتصل بنا' : 'Contact' }</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            { rtl ? '© 2022 حقوق التأليف والنشر' : '© 2022 Copyrights by' } <span className="fw-bold text-decoration-underline">Iteck Co.</span> { rtl ? 'كل الحقوق محفوظة. صمم بواسطة' : 'All Rights Reserved. Designed by' } <a href="https://themeforest.net/user/themescamp" className="fw-bold text-decoration-underline">ThemesCamp</a>
          </small>
        </div>
      </div>
      { !noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" /> }
    </footer>
  )
}

export default Footer