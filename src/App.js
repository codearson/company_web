import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeItSolutions2 from "./pages/index";
import PageAboutApp from "./pages/page-about-app";
import PagePortfolioApp from "./pages/page-portfolio-app";
import PageBlogApp from "./pages/page-blog-app";
import PageContactApp from "./pages/page-contact-app";
import PricePlan from "./pages/page-services-app";
import PagePriceApp from "./pages/page-price-app";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeItSolutions2 />} />
        <Route path="/page-about-app" element={<PageAboutApp />} />
        <Route path="/page-portfolio-app" element={<PagePortfolioApp />} />
        <Route path="/page-blog-app" element={<PageBlogApp />} />
        <Route path="/page-contact-app" element={<PageContactApp />} />
        <Route path="/page-services-app" element={<PricePlan />} />
        <Route path="/page-price-app" element={<PagePriceApp />} />
      </Routes>
    </Router>
  );
}
