import React from "react";
import Header from "../componentes/header";
import AsideDescrip from "../componentes/aside_left_descrip";
import FormReservacion from "../componentes/form_registrar_eventos";
import Footer from "../componentes/footer";
import { Embed } from 'semantic-ui-react';
import "../componentes/css/reservacion.styl";

class reservacion extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row fondo-reservacion">
                        <div className="col-12 oscuro">
                            <Header titulo="Reservaciones | La Carreta"  />
                        </div>

                        <AsideDescrip />

                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-lg-6 p-3">
                            <FormReservacion />
                        </div>
                        <div className="col-12 col-lg-6 p-3">
                            <Embed id='125292332' placeholder='/static/logo.jpg'
                            source='/static/reserv.mp4'>
                                <video src="/static/reserv.mp4" autoPlay="autoplay" loop="loop"></video>
                            </Embed>
                        </div>
                    </div>

                </div>
                    <Footer />
            </>
        );
    }
}

export default reservacion;