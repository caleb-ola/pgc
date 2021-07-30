import React, { useState } from "react";

// REACT SLICK
import Spin from "react-reveal/Spin";

// REACT ROUTER DOM
import { NavLink, Link } from "react-router-dom";

// CSS
import "./header.css";

const Header = () => {
  const [down, setDown] = useState(false);
  const [icon, setIcon] = useState(false);

  const toggleDown = () => {
    setDown(down ? false : true);
  };
  const toggleIcon = () => {
    setIcon(icon ? false : true);
  };
  return (
    <header>
      {console.log(window.location.pathname)}
      <nav class="navbar navbar-expand-md navbar-light py-3">
        <div class="container">
          <Spin>
            <a class={`navbar-brand`} href="/">
              <img
                className="img-fluid"
                src="images/logo.png"
                alt="the brand logo"
              />{" "}
            </a>
          </Spin>

          <button
            onClick={toggleIcon}
            class="navbar-toggler first-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            <div class={icon ? "animated-icon1 open" : "animated-icon1"}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <NavLink
                  class={`nav-link ${
                    window.location.pathname == "/" ? "active" : ""
                  }`}
                  // activeClassName="activeLink"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class={`nav-link ${
                    window.location.pathname == "/team" ? "active" : ""
                  } `}
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleDown}
                >
                  Services{"   "}{" "}
                  <span>
                    {" "}
                    <i
                      class={
                        down
                          ? "fas fa-angle-down fa-rotate-180"
                          : "fas fa-angle-down "
                      }
                      data-fa-transform="shrink-16 right-6"
                    ></i>
                  </span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="/#services">
                      Departments
                    </a>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/team">
                      Our team
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item ">
                <NavLink
                  class={`nav-link ${
                    window.location.pathname == "/about" ? "active" : ""
                  }`}
                  activeClassName="activeLink"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item ">
                <a
                  class={`nav-link ${
                    window.location.pathname === "/#contact" ? "active" : ""
                  }`}
                  href="#contact"
                >
                  Contact us
                </a>
              </li>
            </ul>

            <form className="d-flex">
              <button
                className="btn btn-outline-success shadow-none donate-btn"
                type="submit"
              >
                EXPLORE
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
