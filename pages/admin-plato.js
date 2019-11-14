import React from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import {  Form, Input, TextArea, Button, Table, Image } from "semantic-ui-react";

const options = [
    { key: 1, text: 1, value: 1 },
    { key: 2, text: 2, value: 2 },
    { key: 3, text: 3, value: 3 },
    { key: 4, text: 4, value: 4 },
    { key: 5, text: 5, value: 5 }
];

class AdminPLato extends React.Component{
    state = {}

    handleChange = (e, { value }) => this.setState({ value })
    render(){
        const { value } = this.state;
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <HeaderAdmin title="Platos de comida | Admin" />
                        </div>
                    </div>

                    <Opcion />

                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='Nombre'
                                        placeholder='Nombre del plato'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='precio'
                                        type='number'
                                        placeholder='Precio'
                                    />
                                    <Form.Select
                                        fluid
                                        label='Ranking'
                                        options={options}
                                        placeholder='Ranking'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Archivo'
                                        type='file'
                                        placeholder='Subir Imagen'
                                    />
                                    <Form.Field
                                        label='Plato a la carta'
                                        control='input'
                                        type='radio'
                                        name='menu'
                                        value="carta"
                                    />
                                    <Form.Field
                                        label='Menu diario'
                                        control='input'
                                        type='radio'
                                        name='menu'
                                        value="diario"
                                    />
                                    </Form.Group>
                                    <Form.Field
                                        id='form-textarea-control-opinion'
                                        control={TextArea}
                                        label='Descripcion'
                                        placeholder='Descripcion'
                                    />
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Guardar'
                                        primary
                                    />
                            </Form>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-12 col-md-10">
                            <Table celled>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                                    <Table.HeaderCell>Precio</Table.HeaderCell>
                                    <Table.HeaderCell>Fecha</Table.HeaderCell>
                                    <Table.HeaderCell>Opciones</Table.HeaderCell>
                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Ensalada Rusa</Table.Cell>
                                    <Table.Cell><Image src='/static/dish-2.png' rounded size='mini' /></Table.Cell>
                                    <Table.Cell>4.40</Table.Cell>
                                    <Table.Cell>27/05/2020</Table.Cell>
                                    <Table.Cell><button className="btn btn-danger">Eliminar</button> &nbsp; &nbsp; <button className="btn btn-warning text-white">Editar</button></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ensalada Rusa</Table.Cell>
                                    <Table.Cell><Image src='/static/dish-2.png' rounded size='mini' /></Table.Cell>
                                    <Table.Cell>4.40</Table.Cell>
                                    <Table.Cell>27/05/2020</Table.Cell>
                                    <Table.Cell><button className="btn btn-danger">Eliminar</button> &nbsp; &nbsp; <button className="btn btn-warning text-white">Editar</button></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ensalada Rusa</Table.Cell>
                                    <Table.Cell><Image src='/static/dish-2.png' rounded size='mini' /></Table.Cell>
                                    <Table.Cell>4.40</Table.Cell>
                                    <Table.Cell>27/05/2020</Table.Cell>
                                    <Table.Cell><button className="btn btn-danger">Eliminar</button> &nbsp; &nbsp; <button className="btn btn-warning text-white">Editar</button></Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Ensalada Rusa</Table.Cell>
                                    <Table.Cell><Image src='/static/dish-2.png' rounded size='mini' /></Table.Cell>
                                    <Table.Cell>4.40</Table.Cell>
                                    <Table.Cell>27/05/2020</Table.Cell>
                                    <Table.Cell><button className="btn btn-danger">Eliminar</button> &nbsp; &nbsp; <button className="btn btn-warning text-white">Editar</button></Table.Cell>
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

export default AdminPLato;