import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "../../navbarScrollEffect";
//= Layout
import MainLayout from '../../layouts/Main';
//= Components
import TopNav from '../../components/Navbars/TopNav-7';
import Navbar from '../../components/Navbars/ITCreativeNav';
import Services from '../../components/Services/Services';
import About from '../../components/Services/About';
import Testimonials from '../../components/Services/Testimonials';
import Footer from '../../components/About/Footer';

const PageServicesApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav variant="4" />
      <Navbar navbarRef={navbarRef} />
      <main className="services-page style-5">
        <Services />
        <About noFirstContent noIntegration noWave />
        <Testimonials />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Services App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageServicesApp;