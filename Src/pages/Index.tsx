import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import SmoothScrollHero from "../components/AboutUs";
import SmoothScroll from "../components/SmoothScroll";
import ServiceSection from "../components/ServiceSection";
import WhyChooseUs from "../components/WhyChooseUs";
import LetsTalkSection from "../components/LetsTalkSection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      <Navbar />
      <Hero />
      <div id="services">
        <ServiceSection />
      </div>
      <div id="about">
        <SmoothScroll />
      </div>
      <div id="blog">
        <WhyChooseUs />
      </div>
      <div id="contact">
        <LetsTalkSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;