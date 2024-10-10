import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Map from "../../Components/Map/Map";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import "./Contacto.css"; // Asegúrate de tener este import

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#005CA8",
  color: "#fff",
  padding: "12px 24px",
  fontSize: "1.2rem",
}));

const Contacto = () => {
  const [contactData, setContactData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para manejar el envío del formulario, como enviar los datos a una API.
    console.log(contactData);
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Hemo Group</title>
      </Helmet>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5, mt: 10 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontFamily: "Noto Sans", fontWeight: "bold" }}
        >
          Contáctanos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                backgroundColor: "#f9f9f9",
                p: 4,
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TextField
                required
                fullWidth
                id="nombre"
                label="Nombre"
                name="nombre"
                value={contactData.nombre}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 3 }}
              />
              <TextField
                required
                fullWidth
                id="correo"
                label="Correo electrónico"
                name="correo"
                value={contactData.correo}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 3 }}
              />
              <TextField
                required
                fullWidth
                id="telefono"
                label="Teléfono"
                name="telefono"
                value={contactData.telefono}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 3 }}
              />
              <TextField
                required
                fullWidth
                id="mensaje"
                label="Mensaje"
                name="mensaje"
                value={contactData.mensaje}
                onChange={handleChange}
                multiline
                rows={isMobile ? 4 : 6}
                margin="normal"
                sx={{ mb: 3 }}
              />
              <SubmitButton
                variant="contained"
                color="primary"
                fullWidth
                style={{
                  color: "white",
                  fontFamily: "Noto Sans",
                  fontWeight: "bold",
                }}
              >
                Enviar
              </SubmitButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Map />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Contacto;
