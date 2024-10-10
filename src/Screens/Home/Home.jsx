import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Paper,
} from "@mui/material";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import { SliderSwiper } from "../../Components/Swiper/Swiper";
import WppBoton from "../../Components/WppBoton/WppBoton";
import Footer from "../../Components/Footer/Footer";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

import CardOne from "../../assets/Imagenes/tarjeta1.jpeg";
import CardTwo from "../../assets/Imagenes/tarjeta2.jpeg";
import CardThree from "../../assets/Imagenes/tarjeta3.jpg";
import CardFour from "../../assets/Imagenes/tarjeta4.jpg";
import CardFive from "../../assets/Imagenes/tarjeta5.webp";

import Lapiz from "../../assets/Imagenes/25.png";
import Libro from "../../assets/Imagenes/02.png";
import Candado from "../../assets/Imagenes/66.png";
import Carpeta from "../../assets/Imagenes/53.png";
import Correo from "../../assets/Imagenes/55.png";
import Caset from "../../assets/Imagenes/83.png";

import BannerOne from "../../assets/Imagenes/HemoBanner3.png";
import BannerTwo from "../../assets/Imagenes/HemoBanner2.png";
import BannerThree from "../../assets/Imagenes/HemoBanner.png";

function Home() {
  const imagenes = [BannerOne, BannerTwo, BannerThree];

  const valores = [
    {
      title: "Responsabilidad",
      description:
        "Nos hacemos cargo de las consecuencias de nuestras acciones y decisiones.",
      image: CardOne,
    },
    {
      title: "Respeto",
      description:
        "Valoramos y consideramos las opiniones y necesidades de los demás.",
      image: CardThree,
    },
    {
      title: "Humanización",
      description:
        "Actuamos con honestidad y coherencia en todas nuestras acciones.",
      image: CardTwo,
    },
    {
      title: "Compromiso",
      description:
        "Dedicados a nuestros clientes de la manera más excepcional, con el objetivo de ofrecerte el mejor servicio posible.",
      image: CardFive,
    },
    {
      title: "Integridad",
      description:
        "Comprometidos con la integridad en cada paso, nos esforzamos por actuar de manera honesta y ética en todas nuestras interacciones.",
      image: CardFour,
    },
  ];

  const contigoOptions = [
    {
      title: "Agenda tu cita",
      description:
        "Te brindamos un espacio para que puedas agendar tu cita de manera fácil y rápida.",
      image: Lapiz,
      link: "/citas",
    },
    {
      title: "Deberes y derechos",
      description:
        "Conoce tus derechos y deberes que como usuario de Hemo Group tienes.",
      image: Libro,
      link: "https://uploads.strikinglycdn.com/files/8173c8c5-5208-494e-9924-c70672bd13dd/Hemogroup_DYD.pdf?id=3706296",
    },
    {
      title: "Política de seguridad del paciente",
      description:
        "Conoce nuestra política de seguridad del paciente que implementamos para tu bienestar.",
      image: Candado,
      link: "https://uploads.strikinglycdn.com/files/8173c8c5-5208-494e-9924-c70672bd13dd/Hemogroup_Doc3_PE-R4-GG%20PoliticaInstitucional.pdf?id=3706295",
    },
    {
      title: "Manual del paciente",
      description:
        "Consulta todo lo relacionado con los cuidados durante tu tratamiento.",
      image: Carpeta,
      link: "https://uploads.strikinglycdn.com/files/8173c8c5-5208-494e-9924-c70672bd13dd/Hemogroup_Doc4_Folleto_Pacientes.pdf?id=3706294",
    },
    {
      title: "Protección de datos",
      description:
        "Conoce nuestro manual de protección de datos y el manejo de tu información.",
      image: Correo,
      link: "https://uploads.strikinglycdn.com/files/8173c8c5-5208-494e-9924-c70672bd13dd/Hemogroup_PE-M1-GG_Pol%C3%ADticasTmtoDatosPersonales.pdf?id=3706292",
    },
    {
      title: "Historia Clínica",
      description:
        "Solicita tu historia clínica y conoce los lineamientos para su entrega.",
      image: Caset,
      link: "https://uploads.strikinglycdn.com/files/8173c8c5-5208-494e-9924-c70672bd13dd/Hemogroup_PM-M1-GCE%20ManejoHistoriaCl%C3%ADnica.pdf?id=3706293",
    },
  ];

  const testimonios = [
    {
      name: "Juan Pérez",
      feedback: "Excelente atención, siempre se preocupan por mi salud.",
    },
    {
      name: "María López",
      feedback: "Los mejores profesionales, siempre atentos y amables.",
    },
    {
      name: "Carlos Rodríguez",
      feedback: "La atención que recibí fue excepcional, muy recomendado.",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <Helmet title="Hemo Group - Atención Hospitalaria" />
      <Navbar />
      <div className="swiper-container">
        <SliderSwiper imagenes={imagenes} />
      </div>
      <Container maxWidth="lg" className="container">
        <section className="valores">
          <Typography
            variant="h3"
            paragraph
            gutterBottom
            sx={{
              textAlign: "center",
              mb: 5,
              mt: 5,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8", // Color de texto mejorado
            }}
          >
            Nuestros valores
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {valores.map((valor, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    transition: "transform 0.3s",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                    },
                    borderRadius: "15px", // Bordes redondeados
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={valor.image}
                    alt={valor.title}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      sx={{
                        fontFamily: "Noto Sans",
                        fontWeight: "bold",
                        color: "#005CA8", // Color de título mejorado
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < 4 ? "primary" : "disabled"}
                          />
                        ))}
                      </Box>
                      {valor.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Noto Sans" }}
                    >
                      {valor.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* Contigo Section */}
        <section className="quienes-somos-section">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8", // Color de texto mejorado
            }}
          >
            Hemo Group Contigo
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {contigoOptions.map((option, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <CardActionArea
                  onClick={() => (window.location.href = option.link)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card
                    sx={{
                      transform:
                        hoveredCard === index ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.3s",
                      boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
                      borderRadius: "15px", // Bordes redondeados
                      width: "100%", // Para que ocupe todo el ancho
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ objectFit: "contain" }}
                      image={option.image}
                      alt={option.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          fontFamily: "Noto Sans",
                          fontWeight: "bold",
                          color: "#005CA8", // Color de título mejorado
                        }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* Testimonios Section */}
        <section className="testimonios-section" style={{ marginTop: "40px" }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              color: "#005CA8", // Color de texto mejorado
            }}
          >
            Testimonios
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonios.map((testimonio, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: 2,
                    borderRadius: "15px", // Bordes redondeados
                    backgroundColor: "#f9f9f9",
                    height: "100%", // Para que ocupe todo el espacio
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      fontStyle: "italic",
                      marginBottom: 2,
                      color: "#666",
                    }}
                  >
                    "{testimonio.feedback}"
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#005CA8", // Color de nombre mejorado
                    }}
                  >
                    - {testimonio.name}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>
      <WppBoton />
      <Footer />
    </>
  );
}

export default Home;
