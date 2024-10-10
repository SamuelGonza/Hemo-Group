import { Typography, Box, Container } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import { SliderSwiper } from "../../Components/Swiper/Swiper";
import BannerOne from "../../assets/Imagenes/HemoBanner4.png";
import BannerTwo from "../../assets/Imagenes/HemoBanner2.png";
import BannerThree from "../../assets/Imagenes/HemoBanner.png";
import BannerFour from "../../assets/Imagenes/HemoBanner3.png";
import { Helmet } from "react-helmet";
import WppBoton from "../../Components/WppBoton/WppBoton";
import Footer from "../../Components/Footer/Footer";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import "./QuienesSomos.css";

export default function QuienesSomos() {
  const imagenes = [BannerOne, BannerTwo, BannerThree, BannerFour];

  return (
    <>
      <Helmet title="Quienes somos - Hemo Group" />
      <Navbar />
      <Container maxWidth="lg">
        <SliderSwiper imagenes={imagenes} />

        <Box className="quienes-somos-section" sx={{ my: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8",
            }}
          >
            HEMATONCOLOGY & SPECIALITY MEDICAL GROUP
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontFamily: "Noto Sans" }}>
            <strong>HEMO GROUP</strong> es una Sociedad por Acciones
            Simplificada (S.A.S.) constituida en Julio de 2013 por un grupo de
            profesionales de diferentes áreas, comprometidos en prestar atención
            en salud con altos estándares de calidad a pacientes con
            enfermedades hematológicas y oncológicas.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontFamily: "Noto Sans" }}>
            <strong>HEMO GROUP</strong> SAS empezó a ofrecer sus servicios en
            Diciembre de 2013, originalmente en la Torre Médica El Tesoro, dando
            cumplimiento a la visita de verificación de las condiciones del
            Sistema Único de Habilitación y Auditoría para el Mejoramiento de la
            Calidad y del Sistema de Información para la Calidad, realizada por
            la Secretaría Seccional de Salud y Protección Social de Antioquia
            (SSSA), conforme a lo previsto en la normatividad vigente.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontFamily: "Noto Sans" }}>
            En Junio de <strong>2014 HEMO GROUP</strong> se habilita ante el
            Ministerio de Salud y Protección Social (MinSalud) frente a los
            servicios de quimioterapia ambulatoria y los servicios de consulta
            externa de oncología clínica y hematología oncológica.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontFamily: "Noto Sans" }}>
            En Septiembre de 2017, trasladamos nuestros servicios a una nueva
            sede ubicada en el municipio de Envigado, en la cual ampliamos la
            capacidad instalada.
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontFamily: "Noto Sans" }}>
            En el año 2019 habilitamos los servicios de hematoncología
            pediátrica y dolor y cuidados paliativos con el fin de prestar un
            servicio integral.
          </Typography>
        </Box>

        <Box className="quienes-somos-section" sx={{ my: 4 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8",
            }}
          >
            Misión
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "center", fontFamily: "Noto Sans" }}
          >
            Somos una institución prestadora de servicios de salud especializada
            en enfermedades hematológicas y oncológicas, enfocada en la atención
            humanizada e integral, comprometida con la seguridad del paciente,
            contribuyendo así al mejoramiento de la calidad de vida.
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8",
            }}
          >
            Visión
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 4, textAlign: "center", fontFamily: "Noto Sans" }}
          >
            En el año 2025, seremos una institución reconocida a nivel nacional
            en el cuidado, tratamiento e investigación de enfermedades
            hematológicas y oncológicas, apoyados en nuestros valores
            corporativos y política de calidad.
          </Typography>

          <MoreInfoButton />
        </Box>

        <WppBoton />
      </Container>
      <Footer />
    </>
  );
}
