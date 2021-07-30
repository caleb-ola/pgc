import React from "react";

// CSS
import "./card3.css";

const CardThree = (props) => {
  return (
    <div className="card-three">
      <div class="card border-0 text-center m-5 m-md-4 my-4 ">
        <img
          src={props.image}
          class="card-img-top img-fluid  mx-auto"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text content">{props.title}</p>
          <div className="col d-flex social-icons founder-icons justify-content-center">
            {/* <div className="row d-inline-block  justify-content-center align-items-center"> */}
            <a href={props.linkedin}>
              <i class="fab fa-instagram mx-3 p-2"></i>
            </a>
            <a href={props.facebook}>
              <i class="fab fa-facebook mx-3 p-2"></i>
            </a>
            <a href={props.mail}>
              <i class="far fa-envelope mx-3 p-2"></i>
            </a>{" "}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
