import React from "react";

// COMPONENTS
import Header from "../header";
import ContactMap from "../contact-section/contactMap";
import Footer from "../footer";
import Hero from "./aboutHero";
import Vision from "./vision";
import CoreValues from "./coreValues";
import Founders from "./founders";

// CSS
import "./about.css";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Vision />
      <CoreValues />
      <Founders />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default AboutPage;
