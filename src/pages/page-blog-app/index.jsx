import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "../../navbarScrollEffect";
//= Layout
import MainLayout from '../../layouts/Main';
//= Components
import TopNav from '../../components/Navbars/TopNav-7';
import Navbar from '../../components/Navbars/ITCreativeNav';
import BlogSlider from '../../components/Blog/BlogSlider';
import PopularPosts from '../../components/Blog/PopularPosts';
import AllNews from '../../components/Blog/AllNews';
import Footer from '../../components/About/Footer';

const PageBlogApp = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav navStyle="4" />
      <Navbar navbarRef={navbarRef} />
      <main className="blog-page style-5 color-4">
        <BlogSlider />
        <PopularPosts />
        <AllNews />
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Iteck - Blog App</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PageBlogApp;