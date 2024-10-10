import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Components/Navbar/Navbar";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Snackbar,
  TextField,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import WppBoton from "../../Components/WppBoton/WppBoton";
import Footer from "../../Components/Footer/Footer";

function Citas() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
    archivos: [],
  });

  const [filePreviews, setFilePreviews] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (files) => {
    if (files.length > 3) {
      setOpenSnackbar(true);
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      archivos: files,
    }));
    updateFilePreviews(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "archivos") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const updateFilePreviews = (files) => {
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFilePreviews(fileArray);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileChange(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para enviar los datos del formulario y los archivos
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Helmet>
        <title>Citas - Hemo Group</title>
      </Helmet>
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: 120, marginBottom: 100 }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{
            textAlign: "center",
            fontFamily: "Noto Sans",
            fontWeight: "bold",
            color: "#005CA8",
          }}
        >
          Hemo Group Contigo
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            textAlign: "center",
            fontFamily: "Noto Sans",
            fontWeight: "bold",
            color: "#005CA8",
          }}
        >
          Envíanos tu información y nos comunicaremos contigo.
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            id="nombre"
            label="Nombre"
            name="nombre"
            autoComplete="name"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="correo"
            label="Correo Electrónico"
            name="correo"
            autoComplete="email"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="telefono"
            label="Teléfono"
            name="telefono"
            autoComplete="tel"
            type="tel"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="mensaje"
            label="Mensaje"
            name="mensaje"
            autoComplete="mensaje"
            multiline
            rows={4}
            onChange={handleChange}
            margin="normal"
          />
          <Box
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              border: "2px dashed #ccc",
              padding: 30,
              cursor: "pointer",
              textAlign: "center",
              fontFamily: "Noto Sans",
              fontWeight: "bold",
            }}
          >
            Arrastra y suelta tus archivos aquí o clic para seleccionar (1 a 3
            archivos)
            <input
              ref={fileInputRef}
              type="file"
              hidden
              multiple
              onChange={(e) => handleFileChange(e.target.files)}
            />
          </Box>
          <Grid container spacing={2} style={{ marginTop: 20 }}>
            <Grid container spacing={2} style={{ marginTop: 20 }}>
              {filePreviews.map((file, index) => (
                <Grid item xs={4} key={index}>
                  <img
                    src={file}
                    alt={`Vista previa ${index + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Button
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
          </Button>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Por favor, sube entre 1 y 3 archivos.
        </Alert>
      </Snackbar>
      <WppBoton />
      <Footer />
    </>
  );
}

export default Citas;
