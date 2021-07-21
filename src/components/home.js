import React from "react";

// COMPONENTS
import Header from "./header";
import Hero from "./hero-section/hero";
import About from "./about-section/about";
import Services from "./services-section/services";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default Home;
