import React from "react";
import "./Footer.css";
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import webIcon from "../../assets/icons/web.svg";
import whiteLogo from "../../assets/whiteLogo.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <div className="footer-inner d-flex flex-column justify-content-center h-100">
        {/* Logo arriba a la izquierda */}
        <div className="footer-logo-wrapper">
          <img src={whiteLogo} alt="desConecta" className="footer-logo" />
        </div>

        {/* Grid principal */}
        <div className="footer-grid">
          {/* Columna 1: Accesos rápidos */}
          <div>
            <h6 className="fw-bold">Accesos rápidos</h6>
            <hr className="footer-line line-1" />
            <ul className="list-unstyled small mt-3">
              <li>Qué es</li>
              <li>Qué vas a aprender</li>
              <li>Solicita formación gratuita</li>
            </ul>
          </div>

          {/* Columna 2: Contáctanos */}
          <div>
            <h6 className="fw-bold">Contáctanos</h6>
            <hr className="footer-line line-2" />
            <ul className="list-unstyled small mt-3">
              <li className="d-flex align-items-center mb-2">
                <img
                  src={phoneIcon}
                  alt="Teléfono"
                  width={18}
                  className="me-2"
                />
                +34 674 72 76 23
              </li>
              <li className="d-flex align-items-center mb-2">
                <img src={emailIcon} alt="Email" width={18} className="me-2" />
                fundacion@cibervoluntarios.org
              </li>
              <li className="d-flex align-items-center">
                <img src={webIcon} alt="Web" width={18} className="me-2" />
                cibervoluntarios.org
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h6 className="fw-bold">Conecta con nosotros</h6>
            <hr className="footer-line line-3" />
            <div className="social-icons mt-3 d-flex flex-wrap gap-3">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={facebookIcon}
                alt="Facebook"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={xIcon}
                alt="X"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={youtubeIcon}
                alt="YouTube"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="social-icon"
                width={24}
                height={24}
              />
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="social-icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {/* Texto legal */}
        <div className="footer-bottom border-top pt-3 text-white-50 mt-4">
          <div className="footer-legal-left mx-auto">
            <span className="legal-link me-5">Política de privacidad</span>
            <span className="legal-link me-5">Términos y condiciones</span>
            <span className="legal-link me-5">Política de cookies</span>
            <span className="legal-link me-5">Accesibilidad web</span>
            <span className="legal-link">Fundación Cibervoluntarios 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
