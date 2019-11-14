import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import { Table } from "semantic-ui-react";

class AdminVentas extends React.Component{
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
                                    <Table.HeaderCell textAlign="center">Andres Coello Goyes</Table.HeaderCell>
                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                <Table.Row>
                                    <Table.Cell textAlign="center">Carne al jugo con naranja</Table.Cell>
                                    <Table.Cell textAlign="center">100</Table.Cell>
                                    <Table.Cell textAlign="center">10/02/2019</Table.Cell>
                                    <Table.Cell textAlign="center">4.00</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell textAlign="center">Almuerzo</Table.Cell>
                                    <Table.Cell textAlign="center">100</Table.Cell>
                                    <Table.Cell textAlign="center">10/02/2019</Table.Cell>
                                    <Table.Cell textAlign="center">2.50</Table.Cell>
                                </Table.Row>
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