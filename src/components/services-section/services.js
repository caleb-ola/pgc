import React, { useState } from "react";

// REACT SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT REVEAL
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";

// CSS
import "./services.css";

// COMPONENTS
import CardOne from "../reusable-components/card1";

const Services = () => {
  var settings = {
    dots: false,
    // centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          vertical: true,
          verticalSwiping: true,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
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
          arrows: false,
        },
      },
    ],
  };

  const [content, setContent] = useState(
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
          accusantium quo corrupti consequuntur autem eum. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Dolorem, aspernatur iure quisquam
          corporis velit placeat necessitatibus voluptatum in voluptatem harum
          non accusamus excepturi laudantium at possimus? Facere, reiciendis
          modi? Sunt architecto at quasi velit quia? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Exercitationem dolor neque illo fugit
          animi qui obcaecati aliquam a quaerat adipisci cupiditate veritatis
          nam praesentium debitis numquam consectetur distinctio sint molestiae,
          rem sunt eligendi? Quae maxime illum voluptas id aut architecto eaque
          ullam quod corporis, ipsum quis ad? Ullam asperiores deserunt amet
          repellendus beatae veritatis illo aliquid, quae sed laborum obcaecati
          dignissimos quis quam nisi. At quae blanditiis accusantium praesentium
          distinctio.
        </p>
      </div>
    </div>
  );

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
            Facere, reiciendis modi? Sunt architecto at quasi velit quia? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolor neque illo fugit animi qui obcaecati aliquam a quaerat
            adipisci cupiditate veritatis nam praesentium debitis numquam
            consectetur distinctio sint molestiae, rem sunt eligendi? Quae
            maxime illum voluptas id aut architecto eaque ullam quod corporis,
            ipsum quis ad? Ullam asperiores deserunt amet repellendus beatae
            veritatis illo aliquid, quae sed laborum obcaecati dignissimos quis
            quam nisi. At quae blanditiis accusantium praesentium distinctio.
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
            asperiores reprehenderit! Possimus, aliquam a. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Explicabo itaque eius esse
            ducimus dignissimos atque ut cum ipsa, ratione cupiditate inventore,
            accusamus temporibus minus eligendi labore rerum molestiae quam
            voluptas facere. Cupiditate ad quis cum, doloremque nihil ex placeat
            repellendus labore temporibus quaerat quo deleniti eligendi itaque
            in possimus explicabo iusto aliquid assumenda alias! Eaque
            temporibus facilis dolores impedit molestias fuga quia incidunt
            possimus. Modi molestias corrupti voluptates dolor at harum adipisci
            amet iure perferendis, incidunt deleniti quae, eius nihil.
          </p>
        </div>
      </div>
    );
  };

  const Laboratory = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Laboratory
          </h2>
          <p className="py-2 mb-0 lh-base content ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            exercitationem sint, optio nemo, numquam perspiciatis, facere dicta
            quaerat consequatur repudiandae facilis illo itaque quisquam
            nesciunt magnam error laudantium. Nisi cupiditate a asperiores totam
            doloremque, enim vel rem eos dolor laudantium veniam minima,
            reiciendis ab aliquid dolorum. Eaque repudiandae laborum harum
            tenetur ducimus officia odio accusamus corporis soluta laudantium
            animi inventore blanditiis quam, minima distinctio ullam architecto
            porro omnis iure fugiat voluptatem. Repellendus in minima itaque
            consequatur. Voluptatem, culpa itaque. Dolor? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Maxime ullam, magni quidem
            corrupti, eos qui molestias quisquam fugiat consectetur beatae totam
            aperiam nobis incidunt nesciunt? Corporis architecto tempore aliquid
            quas, repudiandae qui sit quasi corrupti, pariatur, esse dolorem
            eveniet molestias! Veniam, assumenda dolore! Corrupti obcaecati
            quibusdam iste fugiat eligendi minus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Itaque obcaecati libero, unde eveniet
            nisi porro enim explicabo. Aut, sunt dolore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perferendis facilis eius
            molestias quibusdam. Harum quam fugiat eius eum nam eligendi!
          </p>
        </div>
      </div>
    );
  };

  const Pathology = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Pathology
          </h2>
          <p className="py-2 mb-0 lh-base content ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id expedita
            soluta architecto nihil harum ipsa accusantium, sequi, magni
            voluptates explicabo neque doloribus blanditiis ab voluptas nesciunt
            inventore vel, consequuntur mollitia voluptatibus error laudantium
            natus doloremque dolore! Ipsum ullam ducimus obcaecati! Assumenda
            similique sunt voluptate? Voluptates hic nihil voluptate harum autem
            quibusdam distinctio est facere tempora commodi, aperiam impedit
            cupiditate dignissimos! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequatur qui enim quas. Maxime quam, numquam
            ratione nisi natus officia esse, sunt molestiae vero quo quaerat
            impedit, nihil corrupti reprehenderit? Accusamus suscipit quo
            facilis nam sit aut. Sunt laboriosam error nisi ipsum dolorem
            assumenda facilis unde cupiditate, enim placeat recusandae quis
            laborum ratione eligendi maiores illo officia dicta nam accusantium
            ut neque dolorum quam perspiciatis illum! Reiciendis quasi, sequi
            sit rerum cum harum! Dignissimos, possimus. Exercitationem accusamus
            sequi numquam provident officiis, quas temporibus eos excepturi
            saepe iste! Sit autem aperiam harum tempora veritatis non voluptatem
            ipsa doloremque ex, doloribus iure maiores!
          </p>
        </div>
      </div>
    );
  };

  const Surgery = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Surgery
          </h2>
          <p className="py-2 mb-0 lh-base content ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            cumque beatae fugit laboriosam facere error repudiandae amet ipsa,
            architecto aliquam, dolorum commodi natus eum quidem nobis
            voluptatem non quisquam. Dolor esse expedita praesentium saepe a
            neque repellendus distinctio similique, ullam sit soluta placeat
            pariatur provident dolorem hic consectetur, ab deserunt amet
            nesciunt earum, corporis possimus quibusdam alias nisi. Id modi aut
            illum et? Harum, illo? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Impedit perspiciatis reprehenderit ipsam illum
            ipsa nobis officia officiis unde id esse? Sunt magnam odio id!
            Minima doloremque neque pariatur ipsa ratione deserunt. Est, unde
            dicta. Numquam, et ad! Dolorum reiciendis aliquam odio quam libero
            similique, optio vitae facere assumenda! Repudiandae, nostrum. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Eaque quis,
            iusto alias molestias consectetur vel veniam obcaecati laborum
            quidem deserunt? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Veritatis cum totam corrupti omnis nam doloremque praesentium
            vero aliquam, deserunt itaque rerum ea inventore, dolore officia.
            Nam, soluta laborum. Dolor, ducimus!
          </p>
        </div>
      </div>
    );
  };

  const OG = () => {
    setContent(
      <div>
        <div className="mt-md-6 pt-md-5 pb-3 my-5">
          <h2 className="py-2 pt-1 mb-0 fw-bold heading text-center text-md-start">
            Obstetrics & Gynaecology
          </h2>
          <p className="py-2 mb-0 lh-base content ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            officiis earum nam ipsum et aut tempora ad repellat fugiat aliquam
            maxime dicta totam quidem ipsam, adipisci aspernatur iste. Itaque,
            voluptas! Delectus, neque. Quaerat explicabo nemo quam ea facere
            dolores, sint, quibusdam blanditiis amet quae numquam dolorum,
            accusantium quo corrupti consequuntur autem eum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Dolorem, aspernatur iure
            quisquam corporis velit placeat necessitatibus voluptatum in
            voluptatem harum non accusamus excepturi laudantium at possimus?
            Facere, reiciendis modi? Sunt architecto at quasi velit quia? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolor neque illo fugit animi qui obcaecati aliquam a quaerat
            adipisci cupiditate veritatis nam praesentium debitis numquam
            consectetur distinctio sint molestiae, rem sunt eligendi? Quae
            maxime illum voluptas id aut architecto eaque ullam quod corporis,
            ipsum quis ad? Ullam asperiores deserunt amet repellendus beatae
            veritatis illo aliquid, quae sed laborum obcaecati dignissimos quis
            quam nisi. At quae blanditiis accusantium praesentium distinctio.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est vitae
            qui beatae enim labore et autem ratione voluptatem voluptas.
            Quibusdam saepe aperiam itaque veniam numquam corrupti reiciendis
            sit cupiditate hic?
          </p>
        </div>
      </div>
    );
  };
  return (
    <section id="services" className="py-sm-5">
      <div className="container">
        <div className="text-center pt-4">
          <h2 className="section-header fw-bold">What we do</h2>
          <p className="section-subheader py-1 pb-0 m-0">
            Our services are categorized by our various departments.{" "}
          </p>
          <p className="section-subheader py-1 pt-0 m-0">
            (Scroll/Click to view other departments)
          </p>
        </div>
        <div className="row align-items-center pb-md-5">
          <div className="col-md-5 ">
            <div>
              <Slider {...settings}>
                <div onClick={Paediatrics}>
                  <CardOne title={"Paediatrics"} icon={"paediatrics.png"} />
                </div>
                <div onClick={Pharmacy}>
                  <CardOne title={"Pharmacy"} icon={"pharmacy.png"} />
                </div>
                <div onClick={Laboratory}>
                  <CardOne title={"Laboratory"} icon="laboratory.png" />
                </div>
                <div onClick={OG}>
                  <CardOne title={"Obstetrics & Gynaecology"} icon="ob.png" />
                </div>
                <div onClick={Surgery}>
                  <CardOne title={"Surgery"} icon={"surgery.png"} />
                </div>
                <div onClick={Pathology}>
                  {" "}
                  <CardOne title={"Pathology"} icon={"pathology.png"} />
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-md-7">{content}</div>

          <Fade right>
            {" "}
            <div
              className="abstract d-none d-xl-block"
              style={{
                position: "absolute",
                width: "8%",
                height: "25em",
                background: "#023e8a",
                top: "-12em",
                right: "0",
              }}
            ></div>
          </Fade>

          <Rotate top right>
            <div
              className="dots d-none d-xl-block"
              style={{
                position: "absolute",
                width: "320px",
                height: "200px",
                background: "url('images/dots.png') no-repeat",
                top: "-7em",
                right: "0",
                // zIndex: "3",
              }}
            ></div>
          </Rotate>
        </div>
      </div>
    </section>
  );
};

export default Services;
