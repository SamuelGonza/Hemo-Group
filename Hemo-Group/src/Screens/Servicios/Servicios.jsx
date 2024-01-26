import { Helmet } from 'react-helmet'
import Navbar from '../../Components/Navbar/Navbar'
import './Servicios.css'

import servicioOne from '../../assets/Imagenes/servicios1.webp'
import servicioTwo from '../../assets/Imagenes/servicios2.webp'
import servicioThree from '../../assets/Imagenes/servicios3.webp'
import servicioFour from '../../assets/Imagenes/servicios4.webp'
import { Typography } from '@mui/material'

export default function Servicios() {
    return (
        <>
            <Helmet title='Servicios - Hemo Group' />
            <Navbar />
            <div className="container">
                <h1 style={{textAlign: "center", marginBottom: "30px"}}>
                    Servicios
                </h1>
                <div className="tarjetas-servicios-container">

                    <div className="servicio-tarjeta">
                        <div className="servicio-imagen">
                            <img src={servicioOne} alt="" />
                        </div>
                        <div className="servicio-info">
                            <Typography variant='h6'>
                                Consulta Externa
                            </Typography>
                            <Typography variant='body2'>
                                La IPS Hemo group cuenta con una atención ambulatoria para consulta médica especializada con 5 consultorios
                            </Typography>
                            <Typography variant='body2'>
                                Se cuenta con un grupo de especialistas cualificado, con el objetivo de acompañar y guiar el diagnóstico oportuno e integral de los pacientes
                            </Typography>
                        </div>
                    </div>

                    <div className="servicio-tarjeta alreves">
                        <div className="servicio-imagen">
                            <img src={servicioTwo} alt="" />
                        </div>
                        <div className="servicio-info">
                            <Typography variant='h6'>
                                Especialidades
                            </Typography>
                            <ul className='servicios-list'>
                                <li>Hermato Oncológica</li>
                                <li>Oncología clínica</li>
                                <li>Hematología</li>
                                <li>Reumatología</li>
                                <li>Dolor y cuidado paliativo</li>
                                <li>Hemato Oncología pedíatrica</li>
                                <li>Psicolgia</li>
                                <li>Nutrición y dietética</li>
                            </ul>
                        </div>
                    </div>

                    <div className="servicio-tarjeta">
                        <div className="servicio-imagen">
                            <img src={servicioThree} alt="" />
                        </div>
                        <div className="servicio-info">
                            <Typography variant='h6'>
                                Unidad ambulatoria de quimioterapia
                            </Typography>
                            <Typography variant='body2'>
                                La unidad de quimioterapia ambulatoria cuenta con:
                            </Typography>
                            <Typography variant='body2'>
                                19 sillas administración de quimioterapia <br />
                                1 camilla para administración de terapia prolongada <br />
                                1 sala de procedimientos.
                            </Typography>
                        </div>
                    </div>
                    
                    <div className="servicio-tarjeta alreves">
                        <div className="servicio-imagen">
                            <img src={servicioFour} alt="" />
                        </div>
                        <div className="servicio-info">
                            <Typography variant='h6'>
                            Servicios
                            </Typography>
                            <ul className='servicios-list'>
                                <li>Administración de monoterapia</li>
                                <li>Politerapia ambulatoria de bajo y alto riesgo</li>
                                <li>Quimioterapia intratecal</li>
                                <li>Quimioterapia intravesical</li>
                                <li>Aspirados de médula ósea</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
