import React from "react";

// CSS
import "./about.css";

const About = () => {
  return (
    <section id="about" className="my-3 mb-5">
      <div className="container">
        <div className="text-center pt-4">
          <h2 className="section-header fw-bold">Who we are</h2>
        </div>

        <div className="row align-items-center ">
          <div className="col-md order-md-2">
            <img
              src="images/building.gif"
              alt="about image"
              className="img-fluid float-left-sm p-3 m-1"
            />
          </div>
          <div className="col-md order-md-1">
            <div className="">
              <div className="mt-md-6 pt-md-5 pb-3 ">
                <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
                  About us
                </h2>
                <p className="py-2 mb-0 lh-base content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, officiis earum nam ipsum et aut tempora ad repellat
                  fugiat aliquam maxime dicta totam quidem ipsam, adipisci
                  aspernatur iste. Itaque, voluptas! Delectus, neque. Quaerat
                  explicabo nemo quam ea facere dolores, sint, quibusdam
                  blanditiis amet quae numquam dolorum, accusantium quo corrupti
                  consequuntur autem eum.
                </p>
                <div className="text-center text-md-start">
                  <a
                    href="#"
                    className="btn btn-primary my-2 px-5  learn-more shadow-none "
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center ">
          <div className="col-md">
            <img
              src="images/team.gif"
              alt="about image"
              className="img-fluid float-left-sm w-100 p-2 p-3 m-1"
            />
          </div>
          <div className="col-md">
            <div className="">
              <div className="mt-md-5">
                <h2 className="py-2 mt-2 mb-0 fw-bold heading text-center text-md-start">
                  Our team
                </h2>
                <p className="py-2 mb-0 lh-base content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, officiis earum nam ipsum et aut tempora ad repellat
                  fugiat aliquam maxime dicta totam quidem ipsam, adipisci
                  aspernatur iste. Itaque, voluptas! Ipsam magni non tenetur
                  cupiditate officia itaque sapiente. Veritatis reprehenderit
                  aliquid adipisci quam exercitationem, cupiditate numquam
                  sapiente blanditiis debitis libero modi eaque tenetur
                  molestiae commodi qui consequatur!
                </p>
                <div className="text-center text-md-start">
                  <a
                    href="#"
                    className="btn btn-primary my-2 px-5 learn-more shadow-none"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
