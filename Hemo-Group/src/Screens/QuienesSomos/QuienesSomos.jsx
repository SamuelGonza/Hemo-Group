import { Typography } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { SliderSwiper } from "../../Components/Swiper/Swiper";

import QuienesSomosOne from "../../assets/Imagenes/quienessomos1.jpg"
import QuienesSomosTwo from "../../assets/Imagenes/quienessomos2.jpg"
import QuienesSomosThree from "../../assets/Imagenes/quienessomos3.jpg"
import QuienesSomosFour from "../../assets/Imagenes/quienessomos4.jpg"
import { Helmet } from "react-helmet";

export default function QuienesSomos() {
    const imagenes = [QuienesSomosOne, QuienesSomosTwo, QuienesSomosThree, QuienesSomosFour]
    return (
        <>  
            <Helmet title="Quienes somos - Hemo Group"/>
            <Navbar />
            <div className="container">
                <SliderSwiper imagenes={imagenes} />
                <section className="quienes-somos-section">
                    <div className="quienes-somos-content">
                        <Typography variant="h4" component="div" gutterBottom>
                            HEMATONCOLOGY & SPECIALITY MEDICAL GROUP
                        </Typography>
                        <Typography sx={{ textAlign: "start", marginBottom: "20px" }} variant="body2">
                            <b>HEMO GROUP</b> es una Sociedad por Acciones Simplificada (S.A.S.) constituida en Julio de 2013 por un grupo de profesionales de diferentes áreas, comprometidos en prestar atención en salud con altos estándares de calidad a pacientes con enfermedades hematológicas y oncológicas.
                        </Typography>
                        <Typography sx={{ textAlign: "start", marginBottom: "20px" }} variant="body2">
                            <b>HEMO GROUP</b> SAS empezó a ofrecer sus servicios en Diciembre de 2013, originalmente en la Torre Médica El Tesoro, dando cumplimiento a la visita de verificación de las condiciones del Sistema Único de Habilitación, y Auditoría para el Mejoramiento de la Calidad y del Sistema de Información para la Calidad, realizada por la Secretaría Seccional de Salud y Protección Social de Antioquia (SSSA), conforme a lo previsto en la normatividad vigente
                        </Typography>
                        <Typography sx={{ textAlign: "start", marginBottom: "20px" }} variant="body2">
                            En Junio de <b>2014 HEMO GROUP</b> se habilita ante el Ministerio de Salud y Protección Social (MinSalud) frente los servicios de quimioterapia ambulatoria y los servicios de consulta externa de oncología clínica y hematología oncológica.
                        </Typography>
                        <Typography sx={{ textAlign: "start", marginBottom: "20px" }} variant="body2">
                            En Septiembre de 2017, trasladamos nuestros servicios a una nueva sede ubicada en el municipio de Envigado, en la cual ampliamos la capacidad instalada.
                        </Typography>
                        <Typography sx={{ textAlign: "start", marginBottom: "20px" }} variant="body2">
                            En el año 2019 habilitamos los servicios de hematoncología pediátrica y dolor y cuidados paliativos con el fin de prestar un servicio integral.
                        </Typography>
                    </div>
                </section>
            </div>
        </>
    )
}
