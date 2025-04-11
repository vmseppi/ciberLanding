import React, { useState } from "react";
import "./FormSection.css";

const FormSection = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
  });

  const [registros, setRegistros] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros((prev) => [...prev, formData]);
    setFormData({ nombre: "", apellidos: "", email: "", telefono: "" });
  };

  return (
    <section className="container">
      <h2 className="text-center fw-bold mb-4 text-primary-red">
        Solicita formación gratuita
      </h2>

      <div className="form-wrapper mx-auto">
        <form className="row g-3" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="col-lg-4">
            <input
              type="text"
              name="nombre"
              placeholder="*Nombre"
              className="form-control custom-input"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/* Apellidos */}
          <div className="col-lg-6">
            <input
              type="text"
              name="apellidos"
              placeholder="*Apellidos"
              className="form-control custom-input"
              value={formData.apellidos}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="col-lg-6">
            <input
              type="email"
              name="email"
              placeholder="*Email"
              className="form-control custom-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Teléfono */}
          <div className="col-lg-4">
            <input
              type="tel"
              name="telefono"
              placeholder="*Teléfono"
              className="form-control custom-input"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón alineado */}
          <div className="col-lg-4 mt-3 d-flex">
            <button type="submit" className="btn btn-solicita">
              Solicita
            </button>
          </div>
        </form>
      </div>

      {/* Tabla de registros */}
      {registros.length > 0 && (
        <div className="mt-5">
          <h5 className="mb-3">Registros enviados:</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-light">
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((registro, index) => (
                  <tr key={index}>
                    <td>{registro.nombre}</td>
                    <td>{registro.apellidos}</td>
                    <td>{registro.email}</td>
                    <td>{registro.telefono}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default FormSection;
