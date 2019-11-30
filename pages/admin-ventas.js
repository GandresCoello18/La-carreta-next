import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import { Table } from "semantic-ui-react";
import { getColletion } from "../componentes/Api/index";

class AdminVentas extends React.Component{
    state = {
        data_venta: []
    }

    componentDidMount(){
        getColletion('pedidos').then( data => {
            this.setState({
                data_venta: data.body
            });
        })
    }

    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <HeaderAdmin title="Reportes de ventas" />
                        </div>
                    </div>
                    
                    <Opcion />

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-10">
                            <Table color="teal" key="teal">
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign="center">Nombre Plato</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Cantidad</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Fecha</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Dinero</Table.HeaderCell>
                                        <Table.HeaderCell textAlign="center">Usuario</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.state.data_venta.map( valor => (
                                        <Table.Row>
                                            <Table.Cell textAlign="center">{valor.platos.name}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.cantidad}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.fecha}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.platos.precio}</Table.Cell>
                                            <Table.Cell textAlign="center">{valor.usuarios.name}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                    </div>

                </div>    
            </>
        );
    }
}

export default AdminVentas;