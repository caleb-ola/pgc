import React from "react";

// COMPONENTS
import Header from "./header";
import Hero from "./hero-section/hero";
import About from "./about-section/about";
import Services from "./services-section/services";
import Testimonial from "./testimonial-section/testimonial";
import ContactMap from "./contact-section/contactMap";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Home;
