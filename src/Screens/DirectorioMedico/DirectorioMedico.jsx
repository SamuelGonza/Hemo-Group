import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import "./DirectorioMedico.css";
import doctor1 from "../../assets/doctor1.webp";
import doctor2 from "../../assets/doctor2.webp";
import doctor3 from "../../assets/doctor3.webp";
import doctor4 from "../../assets/doctor4.webp";
import doctor5 from "../../assets/doctor5.webp";
import doctor6 from "../../assets/doctor6.webp";
import doctor7 from "../../assets/doctor7.webp";
import doctor8 from "../../assets/doctor8.webp";
import WppBoton from "../../Components/WppBoton/WppBoton";
import Footer from "../../Components/Footer/Footer";

function DirectorioMedico() {
  const doctors = [
    {
      name: "Victor Augusto Ramos González",
      specialty: "Hemato oncólogo",
      image: doctor1,
    },
    {
      name: "Jorge Eduardo Duque Arbeláez",
      specialty: "Hemato oncólogo",
      image: doctor2,
    },
    {
      name: "Lady Natalia Bedoya Trujillo",
      specialty: "Hemato oncóloga",
      image: doctor3,
    },
    {
      name: "Arturo José Valera Agamez",
      specialty: "Hematólogo",
      image: doctor4,
    },
    {
      name: "Claudia Claret Vargas Lozada",
      specialty: "Oncologa",
      image: doctor5,
    },
    {
      name: "Adelis Enrique Pantoja Marquez",
      specialty: "Reumatólogo",
      image: doctor6,
    },
    {
      name: "Daniel Sánchez Posada",
      specialty: "Dolor y cuidados paliativos",
      image: doctor7,
    },
    {
      name: "Luisa Fernanda Arenas Ochoa",
      specialty: "Dolor y cuidados paliativos",
      image: doctor8,
    },
    {
      name: "Jorge Enrique Peña Siado",
      specialty: "Hemato oncólogo Pediatra",
      image: doctor8,
    },
    // Repite para los demás doctores...
  ];

  return (
    <>
      <Helmet title="Directorio Medico - Hemo Group" />
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: 110, marginBottom: 100 }}>
        <Typography
          variant="h3"
          gutterBottom
          paragraph
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Doctores
        </Typography>
        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
          Presentación de nuestros doctores
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          style={{ overflow: "auto" }}
        >
          <Grid container spacing={4} justifyContent="center">
            {doctors.map((doctor, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  overflow="hidden"
                >
                  <Avatar
                    alt={doctor.name}
                    src={doctor.image}
                    style={{ width: 240, height: 240, marginBottom: 2 }}
                  />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ textAlign: "center" }}
                  >
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {doctor.specialty}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <WppBoton />
      <Footer />
    </>
  );
}

export default DirectorioMedico;
