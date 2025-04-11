import React from "react";
import "./WhatIs.css";
import videoImage from "../../assets/video.svg";
import play from "../../assets/play.svg";
import curved from "../../assets/curved.svg";

const WhatIs = () => {
  return (
    <section
      className="position-relative overflow-hidden bg-white p-3 p-lg-5 what-is-section"
      id="que-es"
    >
      <img
        src={curved}
        alt=""
        className="curved-img position-absolute bottom-0 start-0 w-100"
      />
      <div className="px-3 px-md-4 px-lg-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h2 className="what-is-title text-center">¿Qué es?</h2>
            <p className="what-is-text text-center">
              <span className="fw-bold">
                Cursos gratuitos para jóvenes de entre 10 y 18 años para
                enseñarles a usar la tecnología de manera saludable, positiva y
                responsable.
              </span>{" "}
              Además, aprenderán sobre los riesgos de pasar demasiado tiempo
              frente a las pantallas y cómo esto puede afectar tanto a su salud
              física como mental. Cualquier centro educativo o entidad que
              trabaje en la educación de jóvenes puede solicitarlos.
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button className="btn what-is-button text-center">
                Solicita formación gratuita
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 position-relative">
            <img
              src={videoImage}
              alt="Video sobre el programa"
              className="img-fluid video-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
