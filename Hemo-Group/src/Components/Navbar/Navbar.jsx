import { NavLink, useNavigate } from "react-router-dom";
import logoSolo from "../../assets/navbar-assets/LogoSolo.svg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <div className="menu-list">
        <>
          <div className="menu">
<<<<<<< Updated upstream
            <img
              className="logo1"
              src={logoSolo}
              alt="Apps for the world Logo"
            />
          </div>
          <div className="menu">
            <NavLink to="/quienessomos" className="frame">
=======
            <NavLink to="/" className="frame">
              <i className="ri-home-3-line"></i>
              <p className="li-mobile-p">Inicio</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
>>>>>>> Stashed changes
              <i className="ri-group-line"></i>
              <p className="li-mobile-p">Quienes Somos</p>
            </NavLink>
          </div>
          <div className="menu">
<<<<<<< Updated upstream
            <NavLink to="/servicios" className="frame">
=======
            <NavLink to="/" className="frame">
>>>>>>> Stashed changes
              <i className="ri-service-line"></i>
              <p className="li-mobile-p">Servicios</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-handbag-line"></i>
              <p className="li-mobile-p">Directorio Medico</p>
            </NavLink>
          </div>

          <div className="menu">
            <div className="frame">
              <i className="ri-calendar-line"></i>
              <p className="li-mobile-p">Citas</p>
            </div>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-file-text-line "></i>
              <p className="li-mobile-p">Contacto</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-file-info-line "></i>
              <p className="li-mobile-p">Informes</p>
            </NavLink>
          </div>
        </>
      </div>
      <div className="menu-5"></div>
    </div>
  );
}
