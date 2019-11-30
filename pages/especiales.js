import React from 'react';
import Link from "next/link";
import Header from "../componentes/header";
import AsideDescrip from "../componentes/aside_left_descrip";
import ButtonListPlatos from "../componentes/caja_frontal_lista";
import Card from "../componentes/card";
import Footer from "../componentes/footer";
import { getColletion } from '../componentes/Api/index';
import "../componentes/css/especiales.styl";

class especial extends React.Component{
    state = {
        data_especiales: [],
        data_mane_diario: []
    }

    componentDidMount(){
        getColletion('plato').then( data => {
            this.setState({
              data_mane_diario: data.body.filter( valor => valor.tipo == 'diario' ),
              data_especiales: data.body.filter( valor => valor.tipo == 'carta' )
            })
        })
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
                        {this.state.data_especiales.map( valor => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                                <Card  id={valor._id} imagen={valor.fileUrl} title={valor.name} estrellas={valor.ranking} precio={valor.precio} />
                            </div>
                        ))}
                    </div>


                    <h2 className="text-center mt-5">Menu De Hoy</h2>
                    <div className="row justify-content-center especiales">
                        {this.state.data_mane_diario.map( valor => (
                            <div className="col-12 col-sm-6 col-md-4 p-3">
                                <Card id={valor._id} imagen={valor.fileUrl}  title={valor.name} estrellas={valor.ranking} precio={valor.precio} />
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