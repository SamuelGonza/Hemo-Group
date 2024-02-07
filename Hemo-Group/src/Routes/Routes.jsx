import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";
import QuienesSomos from "../Screens/QuienesSomos/QuienesSomos";
import Servicios from "../Screens/Servicios/Servicios";
import DirectorioMedico from "../Screens/DirectorioMedico/DirectorioMedico";
import Citas from "../Screens/Citas/Citas";
import Contacto from "../Screens/Contacto/Contacto";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quienessomos" element={<QuienesSomos/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/directorio" element={<DirectorioMedico/>} />
        <Route path="/citas" element={<Citas/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
}
