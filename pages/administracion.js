import React from "react";
import Opcion from "../componentes/opcion-admin";
import "../componentes/css/administracion.styl";
import HeaderAdmin from "../componentes/header-admin";

class Admin extends React.Component{

    componentDidMount(){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                datasets: [{
                    label: 'Ventas Online Mensuales ( Enero )',
                    backgroundColor: 'RGBA(23,162,184,0.24)',
                    borderColor: 'RGBA(23,162,184,0.90',
                    data: [13, 14, 12, 15]
                }]
            },

            // Configuration options go here
            options: {}
        });
    }

    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <HeaderAdmin title="Administrador" />
                        </div>
                    </div>
                    
                    <Opcion />

                    <div className="row justify-content-center mt-4">
                        <div className="col-12">
                            <canvas id="myChart">

                            </canvas>
                        </div>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            </>
        );
    }
}

export default Admin;