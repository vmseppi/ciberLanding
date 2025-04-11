import React from "react";
import "./WhatYouWillLearn.css";
import laptop from "../../assets/laptop.png";
import boys from "../../assets/boys.png";
import girlsMobile from "../../assets/girlsMobile.png";

const WhatYouWillLearn = () => {
  return (
    <section className="position-relative pt-5 pb-5">
      <div className="container custom-card-container py-5 px-3 position-relative z-2">
        <div className="container text-center">
          <h2 className="text-center learn-title text-primary-red fw-bold mb-3">
            ¿Qué vas a aprender?
          </h2>

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
        </div>
        <div className="card-wrapper-tight justify-content-center g-4 card-wrapper">
          {/* Card 1 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="custom-card text-center shadow p-3">
              <span className="card-number">1</span>
              <p className="card-text-1">
                Identificar los posibles{" "}
                <strong>síntomas de un uso excesivo de dispositivos</strong>,
                como la dificultad para conciliar el sueño, la sensación de
                ansiedad, la falta de concentración o los cambios de estado de
                ánimo, entre otros.
              </p>
              <img
                src={laptop}
                alt="Síntomas del uso excesivo"
                className="img-fluid rounded-2"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="custom-card text-center shadow p-3">
              <span className="card-number">2</span>

              <p className="card-text-2">
                Reconocer las <strong>posibles adicciones</strong> que pueden
                surgir de este uso excesivo de las pantallas como la{" "}
                <strong>
                  nomofobia, el vamping, el phubbing o el síndrome FOMO.
                </strong>
                Esto permitirá a las personas jóvenes reflexionar sobre sus
                propios hábitos digitales.
              </p>
              <img
                src={girlsMobile}
                alt="Adicciones digitales"
                className="img-fluid rounded-2 "
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 d-flex justify-content-center">
            <div className="custom-card text-center shadow p-3">
              <span className="card-number">3</span>
              <p className="card-text-3">
                Conocer <strong>herramientas de desconexión digital</strong> en
                sus dispositivos para mejorar su tiempo de conexión y establecer
                límites saludables, promoviendo así un equilibrio más positivo
                entre su vida digital y su bienestar personal.
              </p>
              <img
                src={boys}
                alt="Desconexión digital"
                className="img-fluid rounded-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
