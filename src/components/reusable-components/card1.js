import React from "react";

// CSS
import "./card1.css";

const CardOne = (props) => {
  return (
    <div className="card-container py-4 py-md-4 px-4 my-3 ">
      <div className="col-sm-4">
        <img src="" alt="" className="img-fluid" />
      </div>
      <div className="col-sm-8">{props.title}</div>
    </div>
  );
};

export default CardOne;
