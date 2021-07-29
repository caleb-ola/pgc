import React from "react";

import "./card2.css";

const CardTwo = (props) => {
  return (
    <div>
      {/* <div className="card-container py-4 py-md-4 px-4 my-3 ">
        <div className="text-center">
          <img src={props.image} alt="" className="img-fluid" />
        </div>
        <div className="">{props.text}</div>
        <div className="">{props.name}</div>
      </div> */}

      <div className="card card-two mx-2">
        <div className="card-body">
          <img
            src={`images/${props.image}`}
            alt=""
            className="img-fluid card-two-image mx-auto mb-3"
          />

          <p className="content">{props.testimonial}</p>
          <p>{props.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
