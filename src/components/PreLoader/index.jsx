import React, { useEffect } from 'react';
import loadingPace from '../../loadingPace';

const PreLoader = () => {
  useEffect(() => {
    // Initialize the preloader
    loadingPace();

    // Cleanup function
    return () => {
      const preloader = document.querySelector("#preloader");
      if (preloader) {
        preloader.classList.add("isdone");
      }
    };
  }, []);

  return (
    <div id="preloader">
      <div className="loading">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
}

export default PreLoader;