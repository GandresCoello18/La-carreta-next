import React from "react";
import Header from "../componentes/header";
import AsideDescrip from "../componentes/aside_left_descrip";
import FormRegistrEvento from "../componentes/form_registrar_eventos";
import TablaEvento from "../componentes/tabla_eventos";
import BtnListPlatos from "../componentes/caja_frontal_lista";
import Footer from "../componentes/footer";
import "../componentes/css/eventos.styl";

class eventos extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row fondo-evento">
                        <div className="col-12 oscuro">
                            <Header titulo="Eventos | La Carreta"  />
                        </div>

                        <AsideDescrip />
                        <BtnListPlatos />

                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-lg-6 p-4">
                            <FormRegistrEvento />
                        </div>
                        <div className="col-12 col-lg-6 p-4">
                            <TablaEvento /> 
                        </div>
                    </div>

                </div>

                <Footer />

            </>
        );
    }
}

export default eventos;