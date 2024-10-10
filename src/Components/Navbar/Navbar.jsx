import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/navbar-assets/LogoCompleto.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>
            X
          </button>{" "}
          {/* Botón para cerrar */}
          <li>
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/quienessomos" className="nav-link" onClick={toggleMenu}>
              ¿Quiénes Somos?
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="nav-link" onClick={toggleMenu}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/directorio" className="nav-link" onClick={toggleMenu}>
              Directorio Médico
            </Link>
          </li>
          <li>
            <Link to="/citas" className="nav-link" onClick={toggleMenu}>
              Agenda una cita
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="nav-link" onClick={toggleMenu}>
              Contáctanos
            </Link>
          </li>
        </ul>
        <div className="navbar-buttons">
          <Link to="/contacto" className="sign-in-button">
            Contáctanos
          </Link>
        </div>
        <div
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
