import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Helmet } from 'react-helmet'
import Navbar from "../../Components/Navbar/Navbar";
import MoreInfoButton from "../../Components/MoreInfo/MoreInfo";
import "./Home.css";
import { SliderSwiper } from "../../Components/Swiper/Swiper";

import CardOne from '../../assets/Imagenes/tarjeta1.jpeg'
import CardTwo from '../../assets/Imagenes/tarjeta2.jpeg'
import CardThree from '../../assets/Imagenes/tarjeta3.jpg'
import CardFour from '../../assets/Imagenes/tarjeta4.jpg'
import CardFive from '../../assets/Imagenes/tarjeta5.webp'

import Lapiz from '../../assets/Imagenes/25.png'
import Libro from '../../assets/Imagenes/02.png'
import Candado from '../../assets/Imagenes/66.png'
import Carpeta from '../../assets/Imagenes/53.png'
import Correo from '../../assets/Imagenes/55.png'
import Caset from '../../assets/Imagenes/83.png'

import BannerOne from '../../assets/Imagenes/banner1.jpeg'
import BannerTwo from '../../assets/Imagenes/banner2.jpeg'
import BannerThree from '../../assets/Imagenes/banner3.jpeg'
import BannerFour from '../../assets/Imagenes/banner4.jpeg'

function Home() {

  const imagenes = [BannerOne, BannerTwo, BannerThree, BannerFour]
  return (
    <>
      <Helmet title="Hemo Group"/>
      <Navbar />
      <div className="container">
        <SliderSwiper imagenes={imagenes}/>
        <section className="quienes-somos-section">
          <div className="quienes-somos-content">
          <Typography variant="h4" component="div" gutterBottom>
              <b>Quienes somos </b>
            </Typography>
            <Typography variant="h4">
              <b>Misíon </b>
            </Typography>
            <p style={{textAlign: "start"}}>
              Somos una institución prestadora de servicios de salud
              especializada en enfermedades hematológicas y oncológicas,
              enfocada en la atención humanizada e integral, comprometida con la
              seguridad del paciente, contribuyendo así al mejoramiento de la
              calidad de vida
            </p>
            <br />
            <Typography variant="h4">
              <b>Visíon </b>
            </Typography>
            <p style={{textAlign: "start"}}>
              En el año 2025, seremos una institución reconocida a nivel
              nacional en el cuidado, tratamiento e investigación de
              enfermedades hematológicas y oncológicas, apoyado en nuestros
              valores corporativos y política de calidad.
            </p>
            <br />
            <MoreInfoButton />
          </div>
        </section>

        <section className="valores">
          <Typography variant="h4" sx={{color: "white !important"}} component="div" gutterBottom>
            Nuestros Valores
          </Typography>

          <Grid container spacing={6} padding={10} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={CardOne}
                  alt="Responsabilidad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Responsabilidad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nos hacemos cargo de las consecuencias de nuestras acciones
                    y decisiones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={CardThree}
                  alt="Respeto"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Respeto
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Valoramos y consideramos las opiniones y necesidades de los
                    demás.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={CardTwo}
                  alt="Integridad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Humanización
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Actuamos con honestidad y coherencia en todas nuestras
                    acciones.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={CardFive}
                  alt="Integridad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Compromiso
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Dedicados a nuestros clientes de la manera más excepcional, con el objetivo de ofrecerte el mejor servicio posible.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={CardFour}
                  alt="Integridad"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Integridad
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Comprometidos con la integridad en cada paso, nos esforzamos por actuar de manera honesta y ética en todas nuestras interacciones. 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>

        <section className="quienes-somos-section">
          <div className="quienes-somos-content">
          <Typography variant="h4" component="div" gutterBottom>
            Hemo Group Contigo
          </Typography>
            <div className="contigo-container">
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img"image={Lapiz}/>
              </div>
                <Typography variant="h6">
                  Agenda tu cita
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Te brindamos un espacio para que puedas agendar tu cita de manera fácil y rápida, ingresa a esta opción y solicita tu cita.
                  </Typography>
              </CardContent>
            </div>
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img" image={Libro}/>
              </div>
                <Typography variant="h6">
                  Deberes y Derechos
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Aquí puedes conocer tus derechos y deberes que como usuario de Hemo Group tienes. Estamos comprometidos con tu bienestar y seguridad.
                  </Typography>
              </CardContent>
            </div>
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img" image={Candado}/>
              </div>
                <Typography variant="h6">
                  Política de seguridad del paciente
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Porque nuestro compromiso es brindarte una atención segura, con calidad, y humanizada, tenemos implementada la política de seguridad del paciente, te invitamos a que la conozcas..
                  </Typography>
              </CardContent>
            </div>
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img" image={Carpeta}/>
              </div>
                <Typography variant="h6">
                  Manual del paciente
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Queremos que te mantengas informado, por eso contamos con el manual del paciente donde puedes consultar todo lo relacionado a los cuidados que debes tener durante tu tratamiento de quimioterapia, da clic y conoce toda la información que tenemos para ti.
                  </Typography>
              </CardContent>
            </div>
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img" image={Correo}/>
              </div>
                <Typography variant="h6">
                Manual de tratamiento de protección de datos
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Hemo Group respeta el derecho que tienen nuestros usuarios de conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellos, entra acá y conoce nuestro manual de protección de datos.
                  </Typography>
              </CardContent>
            </div>
            <div className="contigo-card">
              <div className="contigo-img">
              <CardMedia component="img" image={Caset}/>
              </div>
                <Typography variant="h6">
                Manejo y entrega de la Historia Clínica
                </Typography>
              <CardContent >
                <Typography className="contigo-parrafo" variant="body2" color="text.secondary">
                Porque tienes derecho a solicitar tu historia clínica y conocer el manejo que se le da, puedes ingresar a esta opción y conocer los lineamientos para la solicitud y entrega de tu historia clínica.
                  </Typography>
              </CardContent>
            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
