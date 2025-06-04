import React, { useEffect, useRef } from "react";
//= Scripts
import navbarScrollEffect from "../../navbarScrollEffect";
//= Layout
import MainLayout from "../../layouts/Main";
//= Components
import TopNav from "../../components/Navbars/TopNav-7";
import Navbar from "../../components/Navbars/ITCreativeNav";
import PricePlan from "../../components/Price/pricePlan.jsx ";
import Footer from "../../components/About/Footer";

const PagePriceApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav navStyle="4" />
      <Navbar navbarRef={navbarRef} />
      <PricePlan />
      <Footer noWave />
    </MainLayout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Iteck - Portfolio App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  );
};

export default PagePriceApp;
