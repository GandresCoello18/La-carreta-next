import React from 'react';
import Header from "../componentes/header";
import { Link } from "../routes";
import AsideDescrip from "../componentes/aside_left_descrip";
import BtnListPlatos from "../componentes/caja_frontal_lista";
import Footer from "../componentes/footer";
import "../componentes/css/pedidios-domicilio.styl";
import { Button, Icon, Image , Image as ImageComponent, Item, Label } from 'semantic-ui-react'


class PedidosHogar extends React.Component{

    componentDidMount(){
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
                        '<h2>Latitud: '+position.coords.latitude +'</h2>'+
                        '<h2> Longitud:'+ position.coords.longitude +'</h2>'
                    });
                    map.setCenter(geolocate);
                })
            }else{
                document.getElementById('google_canvas').innerHTML = 'No soporta Geolocalisacion';
            }
        })();
    }

    render(){
        const paragraph = "este es una breve descripcion";

        return(
            <>
                <div className="container-fluid">
                    <div className="row fondo-pedidos">

                        <div className="col-12 oscuro">
                            <Header titulo="Pedidos A Domicilio | La Carreta" color_nav="transparent"/>
                        </div>

                        <AsideDescrip />
                        <BtnListPlatos />

                    </div>

                    <div className="row justify-content-center mt-2 p-4">
                        <div className="col-12 col-lg-6">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <Image src="/static/dish-3.png" size="medium" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Carne al jugo con un toque de naranja</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <h2 className="card-text"><small class="text-muted">&nbsp;<b>$ 5</b></small></h2>
                                            <div className="row">
                                                <div className="col">
                                                    <Button.Group>
                                                        <Button icon='plus' onClick={this.handleShow} />
                                                        <Button icon='minus' onClick={this.handleHide} />
                                                    </Button.Group>
                                                </div>
                                                <div className="col text-white">
                                                    <strong className="mt-4 bg-dark p-3 rounded">1</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="google_canvas" className="google_canvas">

                            </div>

                            <a className='btn btn-success form-control mt-4 text-white'> Realizar Pedido </a>

                        </div>
                        <div className="col-12 col-lg-6 col-xl-4">
                            <h3 className="text-center p-4">Recomendado para ti</h3>
                            <Item.Group link divided>
                                
                                <Item>
                                    <Item.Image size='small' src='/static/dish-3.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>Veronika Ossi &nbsp; &nbsp; <b>$ 4</b></Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                        <Link href={`/pedidos-adomicilio?plato=${this.props.id}`} prefetch>
                                            <a className="btn btn-info float-right mt-3 mt-md-0">Añadir</a>
                                        </Link>    
                                    </Item.Content>
                                </Item>
                                
                                <Item>
                                    <Item.Image size='small' src='/static/dish-3.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>Veronika Ossi &nbsp; &nbsp; <b>$ 4</b></Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                        <Link href={`/pedidos-adomicilio?plato=${this.props.id}`} prefetch>
                                            <a className="btn btn-info float-right mt-3 mt-md-0">Añadir</a>
                                        </Link>    
                                    </Item.Content>
                                </Item>

                                <Item>
                                    <Item.Image size='small' src='/static/dish-3.png' />
                                    <Item.Content verticalAlign='middle'>
                                        <Item.Header>Veronika Ossi &nbsp; &nbsp; <b>$ 4</b></Item.Header>
                                        <Item.Description>{paragraph}</Item.Description>
                                        <Link href={`/pedidos-adomicilio?plato=${this.props.id}`} prefetch>
                                            <a className="btn btn-info float-right mt-3 mt-md-0">Añadir</a>
                                        </Link>    
                                    </Item.Content>
                                </Item>                                                          

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
                `}</style>
            </>
        );
    }
}

export default PedidosHogar;