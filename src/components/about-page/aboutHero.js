import React, { useState, useEffect } from "react";

// REACT TYPIST
import Typist from "react-typist";

// CSS
import "./aboutHero.css";

const AboutHero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

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
              <h1 className="hero-header py-sm-2 float-start">
                {" "}
                {count ? (
                  <Typist avgTypingDelay={60} onTypingDone={() => setCount(0)}>
                    WE ARE <span>PIONEERS</span>
                    <Typist.Backspace count={8} delay={1500} />
                    <span>FRONTIERS</span>
                    <Typist.Backspace count={9} delay={1500} />
                    <span>INNOVATORS</span>
                    <Typist.Backspace count={10} delay={1500} />
                    <span>PROBLEM SOLVERS</span>
                    <Typist.Backspace count={15} delay={2000} />
                    <span>HEALTH PASSIONATE PEOPLE</span>
                    <Typist.Backspace count={24} delay={1500} />
                    <span>EXPERTS</span>
                    <Typist.Backspace count={7} delay={1500} />
                    <span>ROLE MODELS</span>
                    <Typist.Backspace count={11} delay={1500} />
                    <span>AWARD WINNERS</span>
                    <Typist.Backspace count={13} delay={1500} />
                    <span>PROFESSIONALS</span>
                    <Typist.Backspace count={13} delay={1500} />
                  </Typist>
                ) : (
                  ""
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
