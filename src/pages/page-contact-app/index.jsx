import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "../../navbarScrollEffect";
//= Layout
import MainLayout from '../../layouts/Main';
//= Components
import TopNav from '../../components/Navbars/TopNav-7';
import Navbar from '../../components/Navbars/ITCreativeNav';
import Community from '../../components/Contact/Community';
import Form from '../../components/Contact/Form';
import Map from '../../components/Contact/Map';
import Footer from '../../components/About/Footer';

const PageContactApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav navStyle="4" />
      <Navbar navbarRef={navbarRef} />
      <main className="contact-page style-5">
        <Community />
        <Form />
        <Map />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Contact App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageContactApp;