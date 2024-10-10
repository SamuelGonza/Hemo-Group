import { NavLink, useNavigate } from "react-router-dom";
import logoSolo from "../../assets/navbar-assets/LogoSolo.svg";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img className="logo1" src={logoSolo} alt="HemoGroupLogo" />
      </div>
      <nav className={`menu-list ${isMobileMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="frame">
          <i className="ri-home-3-line"></i>
          <p className="li-mobile-p">Inicio</p>
        </NavLink>
        <NavLink to="/quienessomos" className="frame">
          <i className="ri-group-line"></i>
          <p className="li-mobile-p">Quienes Somos</p>
        </NavLink>
        <NavLink to="/servicios" className="frame">
          <i className="ri-service-line"></i>
          <p className="li-mobile-p">Servicios</p>
        </NavLink>
        <NavLink to="/directorio" className="frame">
          <i className="ri-handbag-line"></i>
          <p className="li-mobile-p">Directorio Médico</p>
        </NavLink>
        <NavLink to="/citas" className="frame">
          <i className="ri-calendar-line"></i>
          <p className="li-mobile-p">Citas</p>
        </NavLink>
        <NavLink to="/contacto" className="frame">
          <i className="ri-file-text-line"></i>
          <p className="li-mobile-p">Contacto</p>
        </NavLink>
      </nav>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <i className={`ri-menu-line ${isMobileMenuOpen ? "open" : ""}`}></i>
      </div>
    </header>
  );
}
