import React from "react";

import "./team.css";

// COMPONENTS
import Header from "../header";
import ContactMap from "../contact-section/contactMap";
import Footer from "../footer";
import TeamHero from "./team-hero";
import Members from "./members";

const Team = () => {
  return (
    <div>
      <Header />
      <TeamHero />
      <Members />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default Team;
