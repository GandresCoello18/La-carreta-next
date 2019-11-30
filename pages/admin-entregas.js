import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import { Table } from "semantic-ui-react";
import { getColletion } from "../componentes/Api/index";


class AdminEntregas extends React.Component{
    state = {
        data_entregas: []
    }

    componentDidMount(){
        getColletion('pedidos').then( data => {
            this.setState({
                data_entregas: data.body
            })
        })
    }

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
                        <div className="col-12 col-md-10">
                            <Table color="teal" key="teal">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign="center">Usuario</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Direccion</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Fecha</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Pedido</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Cantidad</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Latitud</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Longitud</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Mapa</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.state.data_entregas.map( valor => (
                                        <Table.Row>
                                            <Table.Cell textAlign="center">{valor.usuarios.name}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.direccion}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.fecha}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.platos.name}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.cantidad}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.latitud}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.longitud}</Table.Cell>
                                            <Table.Cell textAlign="center"><a href={`https://www.coordenadas-gps.com/latitud-longitud/${valor.latitud}/${valor.longitud}`} target="_black">Ver Ruta</a></Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <h3 className="text-center"> Latitud: -1.799185  &nbsp;  &nbsp;  &nbsp;  &nbsp; Longitud: -79.537362,16 </h3>
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