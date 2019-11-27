import React, { useState } from "react";
import HeaderAdmin from "../componentes/header-admin";
import Opcion from "../componentes/opcion-admin";
import {  Form, Input, TextArea, Button, Table, Image, Select } from "semantic-ui-react";
import { DocumentQuery } from "mongoose";
import { postFormData } from '../componentes/Api/index';

const options = [
    { key: 1, text: 1, value: 1 },
    { key: 2, text: 2, value: 2 },
    { key: 3, text: 3, value: 3 },
    { key: 4, text: 4, value: 4 },
    { key: 5, text: 5, value: 5 }
];

class AdminPLato extends React.Component{
    state = {
        tipo: ''
    }

    doLogin = () => {
        const name = document.querySelector("#nombre-plato").value;
        const precio = document.querySelector("#precio-plato").value;
        const ranking = document.querySelector('#ranking-plato').value;
        const file = document.querySelector('input[type="file"]').files[0];
        const tipo = document.querySelector('#tipo-plato').value;
        const descripcion = document.querySelector('#descripcion-plato').value;

        if(!name || !precio || !ranking || !file || !tipo || !descripcion){
            alert('campos vacios - vuelve a intentarlo');
        }else{
            const formData = new FormData();
            formData.append('name', name);
            formData.append('file', file);
            formData.append('precio', precio);
            formData.append('ranking', ranking);
            formData.append('tipo', tipo);

            console.log(formData.values);

            postFormData('plato',formData);
        }
    }

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
                            <Form onSubmit={this.doLogin} enctype='multipart/form-data'>
                                <Form.Group widths='equal'>
                                    <Form.Field id='form-input-control-first-name'>
                                        <label for="nombre-plato"> name</label>
                                        <Input 
                                            placeholder='Nombre del plato'
                                            id='nombre-plato' 
                                        />
                                    </Form.Field>    
                                    <Form.Field id='form-input-control-first-name'>
                                        <label for="precio-plato"> Precio</label>
                                        <Input 
                                            placeholder='Precio'
                                            id='precio-plato' 
                                        />
                                    </Form.Field>
                                    <Form.Field fluid >
                                        <label>Ranking</label>
                                        <select placeholder="Ranking" id="ranking-plato" >
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option> 
                                        </select>
                                    </Form.Field>
                                    <Form.Field id='form-input-control-first-name'>
                                        <label for="imagen-plato">file</label>
                                        <Input 
                                            placeholder='Imagen'
                                            mame='file'
                                            id='imagen-plato'
                                            type='file' 
                                            multiple='multiple'
                                        />
                                    </Form.Field>
                                    <Form.Field id='form-input-control-first-name'>
                                        <label for="tipo-plato">Tipo</label>
                                        <select placeholder="tipo" id="tipo-plato">
                                            <option>Plato a la carta</option>
                                            <option>Menu diario</option>
                                        </select>
                                    </Form.Field>
                                    </Form.Group>
                                    <Form.Field id='form-input-control-first-name'>
                                        <label for="descripcion-plato">Descripcion</label>
                                        <Input 
                                            placeholder='Descripcion aqui..!'
                                            id='descripcion-plato' 
                                        />
                                    </Form.Field>
                                    <Form.Field
                                        id='form-button-control-public'
                                        control={Button}
                                        content='Guardar'
                                        primary
                                        type='submit'
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