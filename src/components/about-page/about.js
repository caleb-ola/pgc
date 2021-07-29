import React from "react";

// COMPONENTS
import Header from "../header";
import ContactMap from "../contact-section/contactMap";
import Footer from "../footer";
import Hero from "./aboutHero";

// CSS
import "./about.css";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default AboutPage;
