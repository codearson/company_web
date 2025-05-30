import React from 'react';

const TopNav7 = () => {
  return (
    <div className="top-navbar style-7">
      <div className="container">
        <div className="row justify-content-between gx-0">
          <div className="col-7">
            <div className="top_info">
              <a href="mailto:info@iteck-tech.com" className="me-4">
                <i className="fas fa-envelope-open me-2 color-blue7"></i>
                <span>info@iteck-tech</span>
              </a>
              <a href="tel:+89000786999">
                <i className="fas fa-phone me-2 color-blue7"></i>
                <span>+89 (000) 786 999</span>
              </a>
            </div>
          </div>
          <div className="col-5">
            <div className="side_links d-flex justify-content-lg-end">
              <a href="/careers" className="me-4"> Careers </a>
              <a href="/faq" className="me-4"> Faq </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav7