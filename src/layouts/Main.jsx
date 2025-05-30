//= React
import React from 'react';
//= Components
import PreLoader from "../components/PreLoader/index";
import ScrollToTop from "../components/ScrollToTop/index";

//= Global CSS
import "../styles/globals.css";
import "../styles/preloader.css";

const MainLayout = ({ children, scrollTopText }) => {
  return (
    <>
      <PreLoader />
      { children }
      <ScrollToTop topText={scrollTopText} />

      <script src="/assets/js/main.js"></script>
    </>
  );
};

export default MainLayout;
