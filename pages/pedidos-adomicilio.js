import React from 'react';
import Header from "../componentes/header";
import { Link } from "../routes";
import AsideDescrip from "../componentes/aside_left_descrip";
import BtnListPlatos from "../componentes/caja_frontal_lista";
import Footer from "../componentes/footer";
import AvisoModal  from "../componentes/aviso_mini_modal";
import "../componentes/css/pedidios-domicilio.styl";
import { getId, getParams } from "../componentes/Api/index";
import Error from "next/error";
import { Button, Icon, Image , Image as ImageComponent, Item, Form, Input } from 'semantic-ui-react'
import { postColletion } from "../componentes/Api/index";


class PedidosHogar extends React.Component{
    state = {
        cantidad_pedido: 1,
        latitud: 0,
        longitud: 0,
        aviso: false,
        textAviso:'',
        idPlato: 0,
        platoCompra: [],
        platoRecomendado: [],
        Error: false
    }

    static async getInitialProps ({query}) {
        return {query}
    }

    componentDidMount(){
        const data = {plato: this.props.url.query.plato};
        this.setState({
            idPlato: data.plato
        });

        getId('plato', data.plato).then( data => {
            if(data.body.length > 1){
                this.setState({
                    Error: true
                });
            }else{
                this.setState({
                    platoCompra: data.body[0]
                });
            }
        });

        getParams('plato', data.plato).then( data => {
            this.setState({
                platoRecomendado: data.body
            })
        });

        (function(){
            if(!!navigator.geolocation){
                var map;
                var mapOptions = {
                    zoom: 15,
                    mpTypeId: google.maps.MapTypeId.ROADMAP
                };

                map = new google.maps.Map(document.getElementById('google_canvas'), mapOptions);

                navigator.geolocation.getCurrentPosition(function(position){
                    var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    var infoWindow = new google.maps.InfoWindow({
                        map: map,
                        position: geolocate,
                        content:
                        '<h1> Tu ubicacion con geolocation</h1>'+
                        '<h2>Latitud: '+ position.coords.latitude +'</h2>'+
                        '<h2> Longitud:'+ position.coords.longitude +'</h2>'
                    });
                    map.setCenter(geolocate);
                    localStorage.setItem('latitud', position.coords.latitude);
                    localStorage.setItem('longitud', position.coords.longitude);
                })
            }else{
                document.getElementById('google_canvas').innerHTML = 'No soporta Geolocalisacion';
            }
        })();
    }

    handleShow = () => {
        const cantidad = document.getElementById('cantidad-pedidio').innerHTML;
        this.setState({
            cantidad_pedido: Number(cantidad) + 1
        });
    }

    handleHide = () => {
        const cantidad = document.getElementById('cantidad-pedidio').innerHTML;
        if(Number(cantidad) > 1){
            this.setState({
                cantidad_pedido: Number(cantidad) - 1
            });
        }
    }

    hacer_pedido = (e) => {
        if(!localStorage.getItem('user')){
            this.setState({
                aviso: true,
                textAviso: "Necesita iniciar session para realizar el pedido."
            })
        }else{
            const campo_direccion = document.getElementById('direccion-pedido');
            const direccion = campo_direccion.value;
            if(!direccion || direccion == ''){
                campo_direccion.style.backgroundColor = '#FEE9E4';
                campo_direccion.setAttribute('placeholder','Tiene que especificar la direccion o calle de destino');
            }else{

                this.setState({
                    aviso: true,
                    textAviso: "Espere un momento..!"
                })

                const cantidad = document.getElementById('cantidad-pedidio').innerHTML;
                const dato = {
                    usuario:  localStorage.getItem('user'),
                    plato: this.state.idPlato,
                    cantidad: Number(cantidad),
                    direccion: direccion,
                    latitud: localStorage.getItem('latitud'),
                    longitud: localStorage.getItem('longitud')
                }
                postColletion('pedidos', dato);
                e.target.reset();
            }
        }
    }

    render(){
        if(this.state.Error == true){
            return <Error statusCode={503} />
        }
        return(
            <>
            {this.state.aviso && (<AvisoModal text={this.state.textAviso} />)}
                <div className="container-fluid">
                    <div className="row fondo-pedidos">

                        <div className="col-12 oscuro">
                            <Header titulo="Pedidos A Domicilio | La Carreta" color_nav="transparent"/>
                        </div>

                        <AsideDescrip />
                        <BtnListPlatos />

                    </div>

                    <div className="row justify-content-center mt-2 p-4 preload-pedidos">
                        <div className="col-12 col-lg-6">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <Image src={this.state.platoCompra.fileUrl} size="medium" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.platoCompra.name}</h5>
                                            <p className="card-text">{this.state.platoCompra.descripcion}</p>
                                            <h2 className="card-text"><small class="text-muted">&nbsp;<b>$ {this.state.platoCompra.precio}</b></small></h2>
                                            <div className="row">
                                                <div className="col">
                                                    <Button.Group>
                                                        <Button icon='plus' onClick={this.handleShow} />
                                                        <Button icon='minus' onClick={this.handleHide} />
                                                    </Button.Group>
                                                </div>
                                                <div className="col text-white">
                                                    <strong className="mt-4 bg-dark p-3 rounded" id="cantidad-pedidio">{this.state.cantidad_pedido}</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Form onSubmit={this.hacer_pedido}>
                                <Input placeholder="Direccion.." id="direccion-pedido" className="form-control mb-3 p-0"/>
                                <Button color='green' fluid className='mb-4 text-white' type="submit"> Realizar Pedido </Button>
                            </Form>

                            <div id="google_canvas" className="google_canvas">

                            </div>

                        </div>
                        <div className="col-12 col-lg-6 col-xl-4">
                            <h3 className="text-center p-4">Recomendado para ti</h3>
                            <Item.Group link divided>
                                {this.state.platoRecomendado.map( valor => (
                                    <Item>
                                        <Item.Image size='small' src={valor.fileUrl} />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header>{valor.name} &nbsp; &nbsp; <b>$ {valor.precio}</b></Item.Header>
                                            <Item.Description>{valor.descripcion}</Item.Description>
                                            <Link href={`/pedidos-adomicilio/${valor._id}`} prefetch>
                                                <a className="btn btn-info float-right mt-3 mt-md-0">Añadir</a>
                                            </Link>    
                                        </Item.Content>
                                    </Item>
                                ))}
                            </Item.Group>
                        </div>
                    </div>

                </div>

                <Footer />

                <style jsx>{`
                    .google_canvas{
                        width: 99%;
                        height: 300px;
                        border: 1px solid #cdcdcd;
                    }
                    .seccion-preload{
                        width: 99%;
                        position: absolute;
                        z-index: 99;
                        top: -500px;
                        height: 100%;
                    }
                `}</style>
            </>
        );
    }
}

export default PedidosHogar;