import React from "react";
import "./Header.css";
import desconecta from "../../assets/desconecta.svg";

const Header = () => {
  return (
    <header className="header-section text-white d-flex align-items-center">
      <div className="container-fluid px-3 pb-5 px-sm-4 px-md-4 px-lg-5">
        <nav className="navbar navbar-expand-lg navbar-dark w-100 d-flex flex-wrap justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="#home">
            <img src={desconecta} alt="Logo" className="img-fluid logo-img" />
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú */}
          <div
            className="collapse navbar-collapse justify-content-end mt-3 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-lg-flex flex-lg-row align-items-center gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#que-es">
                  Qué es
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#aprendizaje">
                  Qué vas a aprender
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#formulario">
                  Solicita formación
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero */}
        <div className="col-12 col-md-6 mt-5 text-center text-md-start">
          <h1 className="fw-bold display-5">Protege tu bienestar digital</h1>
          <p className="fs-5 lh-base text-container mt-4">
            (des)CONECTA ofrece formación gratuita para enseñar a jóvenes de 10
            a 18 años a usar la tecnología de forma segura y saludable, y
            conocer los riesgos del uso excesivo de pantallas en su salud física
            y mental.
          </p>
          <button className="btn btn-outline-light btn-lg fw-bold fs-4 text-center mt-4">
            Solicita formación gratuita
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
