import React, { useEffect } from 'react';
import scrollToTop from '../../scrollToTop';

const ScrollToTop = ({ topText }) => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <button 
      onClick={scrollToTop}
      className={`to_top border-0 bg-transparent ${topText ? '':'bg-gray rounded-circle icon-40 d-inline-flex align-items-center justify-content-center'}`}
    >
      <i className={`fas fa-chevron-up ${topText ? '':'fs-6 text-dark'}`}></i>
      { topText && <small>Top</small> }
    </button>
  );
};

export default ScrollToTop;
