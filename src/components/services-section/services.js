import React, { useState } from "react";

// REACT SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// CSS
import "./services.css";

// COMPONENTS
import CardOne from "../reusable-components/card1";

const Services = () => {
  var settings = {
    dots: true,
    // centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          vertical: true,
          verticalSwiping: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          vertical: false,
          verticalSwiping: false,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          className: "center",
          centerMode: true,
        },
      },
    ],
  };

  const [content, setContent] = useState();

  const Paediatrics = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Paediatrics
          </h2>
          <p className="py-2 mb-0 lh-base content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            officiis earum nam ipsum et aut tempora ad repellat fugiat aliquam
            maxime dicta totam quidem ipsam, adipisci aspernatur iste. Itaque,
            voluptas! Delectus, neque. Quaerat explicabo nemo quam ea facere
            dolores, sint, quibusdam blanditiis amet quae numquam dolorum,
            accusantium quo corrupti consequuntur autem eum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolorem, aspernatur iure
            quisquam corporis velit placeat necessitatibus voluptatum in
            voluptatem harum non accusamus excepturi laudantium at possimus?
            Facere, reiciendis modi? Sunt architecto at quasi velit quia?
          </p>
        </div>
      </div>
    );
  };
  const Pharmacy = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Pharmacy
          </h2>
          <p className="py-2 mb-0 lh-base content ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            officiis earum nam ipsum et aut tempora ad repellat fugiat aliquam
            maxime dicta totam quidem ipsam, adipisci aspernatur iste. Itaque,
            voluptas! Delectus, neque. Quaerat explicabo nemo quam ea facere
            dolores, sint, quibusdam blanditiis amet quae numquam dolorum,
            accusantium quo corrupti consequuntur autem eum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eum aspernatur quae officiis
            porro ipsa distinctio odit, perferendis enim rerum dolorum! Itaque
            accusamus unde tempore dolores harum laborum obcaecati. Incidunt,
            maxime. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat recusandae explicabo sit iusto saepe culpa debitis pariatur
            consequuntur doloremque accusamus est magnam illo optio dolor, hic
            aut distinctio facilis, tempore, qui repellendus atque id sed
            asperiores reprehenderit! Possimus, aliquam a.
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-5">
            <div>
              <h2> Responsive </h2>
              <Slider {...settings}>
                <div onClick={Paediatrics}>
                  <CardOne title={"Paediatrics"} />
                </div>
                <div onClick={Pharmacy}>
                  <CardOne title={"Pharmacy"} />
                </div>
                <div>
                  <CardOne title={"Laboratory"} />
                </div>
                <div>
                  <CardOne title={"Obstetrics & Gynaecology"} />
                </div>
                <div>
                  <CardOne />
                </div>
                <div>
                  <h3>6</h3>
                </div>
                <div>
                  <h3>7</h3>
                </div>
                <div>
                  <h3>8</h3>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-sm-7">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
