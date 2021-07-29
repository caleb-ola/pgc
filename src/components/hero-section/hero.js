import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active ">
            <img src="images/hero1.jpg" class="img-fluid" alt="..." />
            <div class="carousel-caption ">
              <h1 className="hero-header py-sm-2">We are peculiar</h1>
              <p className="hero-text py-sm-2">
                Some representative placeholder content for the first slide.
              </p>
              <a className="btn shadow-none explorer-btn my-sm-2" href="#">
                Explore
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/hero2.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h1 className="hero-header py-sm-2">We care God heals </h1>
              <p className="hero-text py-sm-2">
                Some representative placeholder content for the second slide.
              </p>
              <a className="btn shadow-none explorer-btn my-sm-2" href="#">
                Learn more
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="images/hero3.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption ">
              <h1 className="hero-header py-sm-2">Reach out to us</h1>
              <p className="hero-text py-sm-2">
                Some representative placeholder content for the third slide.
              </p>
              <a className="btn shadow-none explorer-btn my-sm-2" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>{" "}
    </div>
  );
};

export default Hero;
