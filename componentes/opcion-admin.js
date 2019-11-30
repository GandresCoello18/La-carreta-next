import React from "react";
import { Link } from "../routes";
import { Statistic, Icon } from "semantic-ui-react";

class Opcion extends React.Component{

    componentDidMount(){
        if(window.location.pathname == '/admin-ventas'){
            cambiar_color('ventas-opcion');
        }else if(window.location.pathname == '/admin-usuarios'){
            cambiar_color('usuarios-opcion');
        }else if(window.location.pathname == '/admin-plato'){
            cambiar_color('anadir_plato');
        }else if(window.location.pathname == '/admin-entregas'){
            cambiar_color('entregas_a_casa')
        }
        function cambiar_color(opcion){
            document.getElementById(opcion).classList.remove('bg-info');
            document.getElementById(opcion).classList.add('bg-success');
        }
    }

    render(){
        return(
            <>
                <div className="row justify-content-around mt-5">
                        <div className="col-12 col-sm-7 col-md-2">
                            <Link route="/admin-ventas">
                                <a>
                                    <article className="bg-info p-2 rounded" id="ventas-opcion">
                                        <Statistic>
                                            <Statistic.Value className="text-white">550</Statistic.Value>
                                            <Statistic.Label className="text-white">Ventas</Statistic.Label>
                                        </Statistic>
                                        <Icon className="text-white float-right mt-2" size="huge" name="shopping bag" />
                                    </article>
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-7 col-md-2">
                            <Link route="/admin-usuarios">
                                <a>
                                    <article className="bg-info p-2 rounded mt-2 mt-md-0" id="usuarios-opcion">
                                        <Statistic>
                                            <Statistic.Value className="text-white">550</Statistic.Value>
                                            <Statistic.Label className="text-white">Usuarios</Statistic.Label>
                                        </Statistic>
                                        <Icon className="text-white float-right mt-2" size="huge" name="user" />
                                    </article>                            
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-7 col-md-2">
                            <Link route="/admin-plato">
                                <a>
                                    <article className="bg-info p-2 rounded mt-2 mt-md-0" id="anadir_plato">
                                        <Statistic>
                                            <Statistic.Value className="text-white">550</Statistic.Value>
                                            <Statistic.Label className="text-white">Añadir Plato</Statistic.Label>
                                        </Statistic>
                                        <Icon className="text-white float-right mt-2" size="huge" name="food" />
                                    </article>
                                </a>
                            </Link>
                        </div>
                        <div className="col-12 col-sm-7 col-md-2">
                            <Link route="/admin-entregas">
                                <a>
                                    <article className=" bg-info p-2 rounded mt-2 mt-md-0" id="entregas_a_casa">
                                        <Statistic>
                                            <Statistic.Value className="text-white">550</Statistic.Value>
                                            <Statistic.Label className="text-white">Entrega a Casa</Statistic.Label>
                                        </Statistic>
                                        <Icon className="text-white float-right mt-2" size="huge" name="map marker alternate" />
                                    </article>
                                </a>
                            </Link>
                        </div>
                    </div>
            </>
        );
    }
}

export default Opcion;