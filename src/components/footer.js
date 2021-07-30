import React from "react";

// REACT SLICK
import Spin from "react-reveal/Spin";

import "./footer.css";
const date = new Date();
const Footer = () => {
  return (
    <footer>
      <div className="container py-4">
        <div className="row justify-content-center align-items-center text-center">
          {/* <div className="mx-auto"> */}
          <Spin>
            <a href="/">
              <img
                src="images/logo-white.png"
                alt="footer white logo"
                className="img-fluid footer-logo py-2"
              />
            </a>
          </Spin>

          <div className="row d-inline">
            <a href="#" className="py-1">
              About
            </a>
            <a href="#" className="py-1">
              Services
            </a>
            <Spin>
              <a href="">
                <img
                  src="images/logo-white.png"
                  alt="footer white logo"
                  className="img-fluid footer-logo2 py-2"
                />
              </a>
            </Spin>

            <a href="#" className="py-1">
              Department
            </a>
            <a href="#" className="py-1">
              Team
            </a>
          </div>

          {/* </div> */}
        </div>
        <div className="col d-flex social-icons justify-content-center py-3">
          {/* <div className="row d-inline-block  justify-content-center align-items-center"> */}
          <i class="fab fa-instagram mx-3 p-2"></i>
          <i class="fab fa-facebook mx-3 p-2"></i>
          <i class="fab fa-whatsapp mx-3 p-2"></i>
          <i class="far fa-envelope mx-3 p-2"></i> {/* </div> */}
        </div>
        <hr />
        <div className="row">
          {" "}
          <p className="text-center m-0">{`Copyright Peculiar Grace Clinic ${date.getFullYear()}`}</p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
