import React, { useState, useEffect } from "react";

// CSS
import "./team-hero.css";

// REACT TYPIST
import Typist from "react-typist";

const TeamHero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <section id="team-hero">
      <div>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/hero3.jpg"
                class="d-block w-100 h-50"
                alt="Hero image"
              />
              <div class="carousel-caption ">
                <h1 className="hero-header py-sm-2 float-start">
                  {" "}
                  {count ? (
                    <Typist
                      avgTypingDelay={60}
                      onTypingDone={() => setCount(0)}
                    >
                      OUR TEAM OF{"  "}
                      <span>EXPERTS</span>
                      <Typist.Backspace count={7} delay={1500} />
                      <span>ROLE MODELS</span>
                      <Typist.Backspace count={11} delay={1500} />
                      <span>AWARD WINNERS</span>
                      <Typist.Backspace count={13} delay={1500} />
                      <span>PROFESSIONALS</span>
                      <Typist.Backspace count={13} delay={1500} />
                      <span>LEADERS</span>
                      <Typist.Backspace count={7} delay={2000} />
                      <span>HIGHLY MOTIVATED PERSONS</span>
                      <Typist.Backspace count={24} delay={1500} />
                    </Typist>
                  ) : (
                    ""
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
