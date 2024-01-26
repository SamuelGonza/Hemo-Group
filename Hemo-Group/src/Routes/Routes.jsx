import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home/Home";
import QuienesSomos from "../Screens/QuienesSomos/QuienesSomos";
import Servicios from "../Screens/Servicios/Servicios";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quienessomos" element={<QuienesSomos/>} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
    </BrowserRouter>
  );
}
