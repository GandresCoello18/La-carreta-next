import React from "react";
import { List } from 'semantic-ui-react';
import "./css/footer.styl";

class footerPie extends React.Component{
    render(){
    return(
        <>
            <footer className="container-fluid">
                <div className="row justify-content-center mt-2 p-4">
                    <h3 className="text-center">La Carreta</h3>
                    <div className="col-12 col-lg-3 p-3">
                        <img src="/static/logo.jpg" />        
                    </div>
                    <div className="col-12 col-lg-3 p-3">
                        <List>
                            <List.Item className="p-3">
                                <List.Icon name='users' />
                                <List.Content>Sobre Nosotros</List.Content>
                            </List.Item>
                            <List.Item className="p-3">
                                <List.Icon name='marker' />
                                <List.Content>Babahoyo</List.Content>
                            </List.Item>
                            <List.Item className="p-3">
                                <List.Icon name='mail' />
                                <List.Content>
                                    <List.Content>LaCarreta@gmail.com</List.Content>
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                    <div className="col-12 col-lg-3 p-3">
                        <h5 className="">No te pierdas nada, Te avisamos todo los dias de nuestros menu.</h5>
                        
                        <form action="" method="">
                            <input type="email" required className="form-control" placeholder="usuario@gmail.com" />
                            <input type="submit" className="form-control btn btn-primary mt-2" value="Enviar"/>
                        </form>
                    </div>
                </div>
            </footer>
            
            <script src="../firebase/configFirebase.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </>
    );
}
}

export default footerPie;