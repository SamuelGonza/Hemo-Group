import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
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
  ];

  return (
    <>
      <Helmet title="Directorio Medico - Hemo Group" />
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{ marginTop: "110px", marginBottom: "50px" }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 2,
            color: "#000",
          }}
        >
          Doctores
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", mb: 8, color: "#ffffff" }}
        >
          Presentación de nuestros doctores
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            overflow: "auto",
            borderRadius: "15px",
            padding: "20px",
          }}
        >
          <Grid container spacing={6} justifyContent="center">
            {doctors.map((doctor, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ padding: "20px" }}
                  >
                    <Avatar
                      alt={doctor.name}
                      src={doctor.image}
                      sx={{
                        width: 240,
                        height: 240,
                        marginBottom: 2,
                        border: "4px solid #00FFFF",
                        transition: "box-shadow 0.3s ease-in-out",
                        "&:hover": {
                          boxShadow: "0px 0px 15px 5px #00FFFF",
                        },
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          textAlign: "center",
                          color: "#000",
                          textShadow: "0px 0px 5px rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        {doctor.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#B0E0E6", textAlign: "center" }}
                      >
                        {doctor.specialty}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
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
