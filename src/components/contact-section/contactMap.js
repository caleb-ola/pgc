import React from "react";
import Contact from "./contact";
import Map from "./map";

const ContactMap = () => {
  return (
    <section id="contact-map" className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md my-2">
            <Contact />
          </div>
          <div className="col-md my-3">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
