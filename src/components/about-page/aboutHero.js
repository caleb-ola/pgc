import React from "react";

// CSS
import "./aboutHero.css";

const AboutHero = () => {
  return (
    <section id="about-hero">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/hero2.jpg"
              class="d-block w-100 h-50"
              alt="Hero image"
            />
            <div class="carousel-caption ">
              <h1 className="hero-header py-sm-2">WHO WE ARE</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
