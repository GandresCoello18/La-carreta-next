import React from 'react';
import Link from "next/link";
import Header from "../componentes/header";
import AsideDescrip from "../componentes/aside_left_descrip";
import ButtonListPlatos from "../componentes/caja_frontal_lista";
import Card from "../componentes/card";
import Footer from "../componentes/footer";
import "../componentes/css/especiales.styl";

class especial extends React.Component{
    state = {
        data_especiales: {
            "datos":[
              {
                "id": 1,
                "imagen": "dish-3.png",
                "title": "Carne agridulce con ensalada de brocoli",
                "estrellas": 4,
                "precio": 6
              },
              {
                "id": 2,
                "imagen": "dish-1.png",
                "title": "Ensalada marinera con conchas y camaron",
                "estrellas": 4,
                "precio": 5
              },
              {
                "id": 3,
                "imagen": "dish-2.png",
                "title": "Churrascos de pescado con huevos cocidos",
                "estrellas": 4,
                "precio": 7
              },
              {
                "id": 4,
                "imagen": "dish-3.png",
                "title": "Carne agridulce con ensalada de brocoli",
                "estrellas": 4,
                "precio": 6
              },
              {
                "id": 5,
                "imagen": "dish-1.png",
                "title": "Ensalada marinera con conchas y camaron",
                "estrellas": 4,
                "precio": 5
              },
              {
                "id": 6,
                "imagen": "dish-2.png",
                "title": "Churrascos de pescado con huevos cocidos",
                "estrellas": 4,
                "precio": 7
              }
            ]
        }
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row fondo-especial">
                        <div className="col-12 oscuro">
                            <Header titulo="Especiales | La Carreta"  />
                        </div>

                        <AsideDescrip />
                        <ButtonListPlatos />

                    </div>

                    <h2 className="text-center mt-5">Especiales</h2>
                    <div className="row justify-content-center card_especiales">
                        {this.state.data_especiales.datos.map( valor => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                                <Card  id={valor.id} imagen={valor.imagen} title={valor.title} estrellas={valor.estrellas} precio={valor.precio} />
                            </div>
                        ))}
                    </div>


                    <h2 className="text-center mt-5">Menu De Hoy</h2>
                    <div className="row justify-content-center especiales">
                        {this.state.data_especiales.datos.map( valor => (
                            <div className="col-12 col-sm-6 col-md-4 p-3">
                                <Card id={valor.id} imagen={valor.imagen}  title={valor.title} estrellas={valor.estrellas} precio={valor.precio} />
                            </div>
                        ))}
                    </div>
                </div>

                    <Footer />
                
                <style jsx>{`
                    .card_especiales{
                        position: relative;
                        margin: auto;
                    }
                `}</style>
            </>
        );
    }
}

export default especial;