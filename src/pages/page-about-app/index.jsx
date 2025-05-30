import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "../../navbarScrollEffect";
//= Layout
import MainLayout from '../../layouts/Main';
//= Components
import TopNav from '../../components/Navbars/TopNav-7';
import Navbar from '../../components/Navbars/ITCreativeNav';
import About from '../../components/About/About';
import Team from '../../components/ITCreative/Team';
import Culture from '../../components/ITCreative/Culture';
import Footer from '../../components/About/Footer';

const PageAboutApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav />
      <Navbar navbarRef={navbarRef} />
      <main className="about-page style-5">
        <About />
        <Team />
        <Culture />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - About App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageAboutApp;