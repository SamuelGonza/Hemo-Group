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
} from "@mui/material";
import "./Contacto.css"; // Asegúrate de tener este import

function Contacto() {
  const [contactData, setContactData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

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
      <div className="contacto-container">
        <Typography variant="h4" component="h1" gutterBottom>
          Contacto
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              className="form-container"
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
                rows={4}
                margin="normal"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="submit-button"
              >
                Enviar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="map-container">
            <Map />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
