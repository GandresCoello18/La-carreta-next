import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import Error from "next/error";
import 'isomorphic-fetch';
import { Table } from "semantic-ui-react";


class AdminUser extends React.Component{
    state = {
        "data": []
    }
    
    async componentDidMount(){
        const https = '539dcce5';
        const req = await fetch(`https://cors-anywhere.herokuapp.com/https://${https}.ngrok.io/user`);
        let  datos  = await req.json();
        this.setState({
            data: datos.body
        })
    }

    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <HeaderAdmin title="User | Admin" />
                        </div>
                    </div>

                    <Opcion />

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-10">
                            <Table celled inverted selectable>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign="center">Usuario</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Correo Electronico</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Fecha</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center">Telefono</Table.HeaderCell>
                                    <Table.HeaderCell textAlign="center" className="bg-danger">Notificar A todos</Table.HeaderCell>
                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {this.state.data.map( valor => (
                                        <Table.Row key={valor._id}>
                                            <Table.Cell textAlign='center'>{valor.name}</Table.Cell>
                                            <Table.Cell textAlign='center'>{valor.correo}</Table.Cell>
                                            <Table.Cell textAlign='center'>{valor.fecha}</Table.Cell>
                                            <Table.Cell textAlign='center'>{valor.telefono}</Table.Cell>
                                            <Table.Cell textAlign='center'>Enviar Notificacion</Table.Cell>
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

export default AdminUser;