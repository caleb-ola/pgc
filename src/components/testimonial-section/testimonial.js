import React from "react";
import Slider from "react-slick";
// CSS
import "./testimonial.css";
// COMPONENTS
import CardTwo from "../reusable-components/card2";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section id="testimonial" className="py-5">
      <div className="container">
        <div className="text-center pt-4">
          <h2 className="section-header testimonial-header fw-bold">
            What our clients are saying
          </h2>
        </div>
        <div className="pb-5">
          <Slider {...settings}>
            <div>
              <CardTwo
                image={"face1.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"Kehinde Olufemi"}
              />
            </div>
            <div>
              <CardTwo
                image={"face2.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"Mary Slessor"}
              />
            </div>
            <div>
              <CardTwo
                image={"face3.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"John Doe"}
              />
            </div>
            <div>
              <CardTwo
                image={"face1.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"Olufemi kehinde"}
              />
            </div>
            <div>
              <CardTwo
                image={"face2.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"Slessor Mary"}
              />
            </div>
            <div>
              {" "}
              <CardTwo
                image={"face3.jpg"}
                testimonial={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto natus ea ullam excepturi eaque."
                }
                name={"Doe John"}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
