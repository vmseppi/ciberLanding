import React from "react";
import "./WhatYouWillLearn.css";
import laptop from "../../assets/laptop.png";
import boys from "../../assets/boys.png";
import girlsMobile from "../../assets/girlsMobile.png";

const WhatYouWillLearn = () => {
  return (
    <section className="py-5 position-relative what-section" id="aprendizaje">
      <div className="container-xl card-container rounded-50 mx-auto mt-n5 bg-light-gray">
        {/* Título */}
        <h2 className="text-center learn-title">¿Qué vas a aprender?</h2>

        {/* Intro */}
        <p className="text-center mx-auto learn-text-wrapper">
          En (des)CONECTA – Conéctate contra la tecnoadicción, organizamos{" "}
          <strong>
            cursos gratuitos para enseñar a jóvenes de 10 a 18 años
          </strong>{" "}
          <strong>
            sobre el uso consciente, seguro y responsable de la tecnología
          </strong>
          , ayudándoles a comprender cómo el uso excesivo de pantallas puede
          afectar a su salud física y mental. Las personas participantes
          aprenderán a:
        </p>

        {/* Tarjetas */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {/* Tarjeta 1 */}
          <div className="d-flex justify-content-center">
            <div className="p-3 bg-white learn-card shadow-sm text-center d-flex flex-column">
              <h3 className="fw-bold fs-1 text-primary-red mb-3">1</h3>
              <p className="card-text-1">
                Identificar los posibles{" "}
                <strong>síntomas de un uso excesivo de dispositivos</strong>,
                como la dificultad para conciliar el sueño, la ansiedad, la
                falta de concentración o cambios de ánimo.
              </p>
              <img
                src={laptop}
                alt="Uso excesivo"
                className="img-fluid rounded-2 mt-auto"
              />
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="d-flex justify-content-center">
            <div className="p-3 bg-white learn-card shadow-sm text-center d-flex flex-column">
              <h3 className="fw-bold fs-1 text-primary-red mb-3">2</h3>
              <p className="card-text-2">
                Reconocer las <strong>posibles adicciones</strong> que puedan
                surgir de este uso excesivo de las pantallas como la{" "}
                <strong>
                  nomofobia, vamping, el phubbing o el síndrome FOMO
                </strong>
                . Esto permitirá a las personas jóvenes reflexionar sobre sus
                propios hábitos digitales.
              </p>
              <img
                src={girlsMobile}
                alt="Adicciones digitales"
                className="img-fluid rounded-2 mt-auto"
              />
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="d-flex justify-content-center">
            <div className="p-3 bg-white learn-card shadow-sm text-center d-flex flex-column">
              <h3 className="fw-bold fs-1 text-primary-red mb-3">3</h3>
              <p className="card-text-3">
                Conocer <strong>herramientas de desconexión digital</strong> en
                sus dispositivos para mejorar el tiempo de conexión y establecer
                límites saludables, promoviendo así un equilibrio más positivo
                entre su vida digital y su bienestar personal.
              </p>
              <img
                src={boys}
                alt="Desconexión digital"
                className="img-fluid rounded-2 mt-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <button className="btn btn-primary-red">
            Solicita formación gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
