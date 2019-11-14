import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";

class AdminEntregas extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <HeaderAdmin title="Entregas a domicilio" />
                        </div>
                    </div>
                    
                    <Opcion />

                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <h3 className="text-center">Longitud: -7.9839  &nbsp;  &nbsp;  &nbsp;  &nbsp; Latitud: -2.9948</h3>
                        </div>
                        <div className="col-12 mt-4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.8513820940066!2d-79.53955775026108!3d-1.7991785986817201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902cd7dfd1f31799%3A0xda68e7b4918ca995!2sRestaurante%20La%20Carreta!5e0!3m2!1ses!2sec!4v1571119927851!5m2!1ses!2sec" style={{width: '100%', height: '100vh'}} frameborder="0"  allowfullscreen=""></iframe>
                        </div>
                    </div>

                </div>    
            </>
        );
    }
}

export default AdminEntregas;