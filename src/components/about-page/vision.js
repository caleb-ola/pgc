import React from "react";

// CSS
import "./vision.css";

const Vision = () => {
  return (
    <section id="vision" className=" mb-5">
      <div className="container">
        <div className="about-content mt-5">
          <p className="p-2 my-2 content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            illum omnis quas similique praesentium eos! Nesciunt libero dolore
            cumque eius! Aliquid expedita, maxime accusantium aspernatur
            quisquam illum incidunt, corrupti a iste in earum! At quae eaque non
            corporis corrupti laborum repellat delectus dignissimos quis! Fugit,
            unde, alias qui aliquid tempore quas ut laborum dolore suscipit
            nesciunt maxime, sunt vitae obcaecati ab perferendis excepturi sed
            atque cum! Officiis quibusdam voluptate quod iusto praesentium harum
            a vero modi atque debitis, doloremque porro delectus sit? Modi
            dolore soluta at harum, corrupti ratione, architecto eaque
            dignissimos excepturi aliquid iusto neque repellendus tempora
            perferendis ipsum qui amet sit nam accusantium quae molestias ab
            libero nisi consectetur. Reiciendis omnis, ea quisquam voluptate
            facilis eligendi exercitationem consequatur quod doloremque debitis
            eaque fugiat ut quam. Repudiandae repellat tenetur facere quidem
            beatae quos sint nihil voluptatem accusamus, minus blanditiis fugiat
            doloribus asperiores tempore autem possimus deserunt iste eaque
            nostrum.
          </p>
        </div>
        <div className="row align-items-center my-2 mt-4">
          <div className="col-md-3 order-md-2 text-center text-md-start">
            <img
              src="images/vision.png"
              alt="image representing vision"
              className="img-fluid p-5 p-sm-0"
            />
          </div>
          <div className="col-md-9 order-md-1">
            <h2 className="px-2 mb-0 fw-bold heading text-center text-md-start about-page-heading">
              Our vision
            </h2>
            <p className="p-2 content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
              necessitatibus ducimus pariatur officia soluta possimus tempora?
              Officia reiciendis, odio deserunt excepturi eveniet quasi nisi
              molestiae eaque numquam fugiat quam earum magni sed corporis
              accusantium eum! Vero neque architecto et alias recusandae tempore
              deleniti repellat praesentium facilis repellendus.
            </p>
          </div>
        </div>
        <div className="row align-items-center my-2">
          <div className="col-md-3 text-center text-md-start">
            <img
              src="images/goals.png"
              alt="image representing vision"
              className="img-fluid p-5 p-sm-0"
            />
          </div>
          <div className="col-md-9">
            <h2 className="px-2 mb-0 fw-bold heading text-center text-md-start about-page-heading2">
              Our goals
            </h2>
            <p className="p-2 content">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium, asperiores? Vero ut quam laborum quibusdam nulla
              commodi cumque repudiandae quia at. Quis maiores temporibus quod
              atque ipsam quaerat perferendis odit voluptates voluptatum
              obcaecati ducimus esse ut, voluptatem veritatis repellendus
              consequuntur rem recusandae pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
