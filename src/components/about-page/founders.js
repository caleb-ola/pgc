import React from "react";

import "./founders.css";

const Founders = () => {
  return (
    <section id="founders" className="py-5">
      <div className="container">
        <div className="text-center py-4">
          <h2 className="section-header fw-bold">Our Founding Partners</h2>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-md-6">
            <div class="card border-0 text-center my-3">
              <img
                src="images/founderb.png"
                class="card-img-top  w-50 mx-auto"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Kehinde Aworinde</h5>
                <p class="card-text content">CHIEF MEDICAL DIRECTOR</p>
                <div className="col d-flex social-icons founder-icons justify-content-center">
                  {/* <div className="row d-inline-block  justify-content-center align-items-center"> */}
                  <a href="#">
                    <i class="fab fa-instagram mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="far fa-envelope mx-3 p-2"></i>
                  </a>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div class="card border-0 text-center my-3">
              <img
                src="images/foundera.png"
                class="card-img-top  w-50 mx-auto"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Olufemi Aworinde</h5>
                <p class="card-text content">CHIEF MEDICAL DIRECTOR</p>
                <div className="col d-flex social-icons founder-icons justify-content-center">
                  {/* <div className="row d-inline-block  justify-content-center align-items-center"> */}
                  <a href="#">
                    <i class="fab fa-instagram mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="far fa-envelope mx-3 p-2"></i>
                  </a>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div class="card text-center border-0 my-3">
              <img
                src="images/founderb.png"
                class="card-img-top img-fluid w-50 mx-auto text-center"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Eyimofe Ola</h5>
                <p class="card-text content">LEAD DOCTOR</p>
                <div className="col d-flex social-icons founder-icons justify-content-center">
                  {/* <div className="row d-inline-block  justify-content-center align-items-center"> */}
                  <a href="#">
                    <i class="fab fa-instagram mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-facebook mx-3 p-2"></i>
                  </a>
                  <a href="#">
                    <i class="far fa-envelope mx-3 p-2"></i>
                  </a>{" "}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
