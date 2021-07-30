import React from "react";

// CSS
import "./members.css";

// COMPONENTS
import CardThree from "../reusable-components/card3";
const Members = () => {
  return (
    <section id="members" className="py-5">
      <div className="container">
        <div className="row my-2">
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/blog4.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video5.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video6.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>

          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video3.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video5.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video2.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>

          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video2.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video4.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
          <div className="col-lg-4 col-md-6 ">
            <CardThree
              image="images/video3.jpg"
              name="Olufemi Aworinde"
              title="CMD"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
