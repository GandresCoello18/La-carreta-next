import React from 'react';
import { Item } from 'semantic-ui-react';
import Header from '../componentes/header';
import AsideDescrip from "../componentes/aside_left_descrip";
import BtnListPlatos from "../componentes/caja_frontal_lista";
import RedesSocial from "../componentes/redes-sociales";
import FormRegistrarEvent from "../componentes/form_registrar_eventos";
import Footer from "../componentes/footer";
import Card from "../componentes/card";
import "../componentes/css/home.styl";

export default class IndexPage extends React.Component {
  state = {
    data_especiales: {
      "datos":[
        {
          "id": 1,
          "imagen": "dish-3.png",
          "title": "Carne agridulce con ensalada de brocoli",
          "estrellas": 4,
          "precio": 6
        },
        {
          "id": 2,
          "imagen": "dish-1.png",
          "title": "Ensalada marinera con conchas y camaron",
          "estrellas": 4,
          "precio": 5
        },
        {
          "id": 3,
          "imagen": "dish-2.png",
          "title": "Churrascos de pescado con huevos cocidos",
          "estrellas": 4,
          "precio": 7
        },
      ]
    },
    data_testimonios: {
      "datos":[
        {
          "id": 1,
          "avatar": "1.jpg",
          "nombre": "Karla Santillan",
          "dato": "Clienta",
          "descripcion": "Me gusto la atencion del sitio, los platos y el ambiente que ofrece son unicos, muy buena atencion lo recomiendo mucho a todos mis amigos y familiares."
        },
        {
          "id": 2,
          "avatar": "2.jpg",
          "nombre": "Laura Maridueña",
          "dato": "Clienta",
          "descripcion": "Me gusto la atencion del sitio, los platos y el ambiente que ofrece son unicos, muy buena atencion lo recomiendo mucho a todos mis amigos y familiares."
        },
        {
          "id": 3,
          "avatar": "3.jpg",
          "nombre": "Steven Mena",
          "dato": "Clienta",
          "descripcion": "Me gusto la atencion del sitio, los platos y el ambiente que ofrece son unicos, muy buena atencion lo recomiendo mucho a todos mis amigos y familiares."
        }
      ]
    }
  }

  render() {
    return (
        <>        
          <div className="container-fluid">
            <div className="row fondo">

              <div className="col-12 oscuro">
                <Header titulo="Restaurante | La Carreta" color_nav="transparent"/>
              </div>

              <AsideDescrip />
              <RedesSocial />
              <BtnListPlatos />

            </div>

            <h2 className="text-center mt-5">Menu De Hoy</h2>
            <div className="row justify-content-center especiales">
              {this.state.data_especiales.datos.map( valor => (
                <div className="col-12 col-sm-6 col-md-4 p-3">
                  <Card id={valor.id} imagen={valor.imagen}  title={valor.title} estrellas={valor.estrellas} precio={valor.precio} />
                </div>
              ))}
            </div>

            <div className="row justify-content-center mt-5 descripcion_la_carreta">
              <div className="col-12 col-md-5 p-4">
                  <img  src="/static/about-1.jpg" />
              </div>
              <div className="col-12 col-md-5 p-4 mt-0 mt-xl-5">
                  <h2 className="p-1">La Carreta - Cultura</h2>
                  <p className="p-1">Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. Mauris porttitor diam at fringilla tempor. Integer molestie rhoncus nisi a euismod. Etiam scelerisque eu enim et vestibulum. Mauris finibus, eros a faucibus varius, dui risus mattis massa, sed lobortis ante ante eget justo. Nam eu dolor lorem. Praesent blandit leo sit amet velit accumsan ultrices. Vestibulum nec libero vel sapien dictum euismod eu ac justo.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 ml-5 p-3">
                <img src="/static/about-dots.png" />
              </div>
            </div>

            <div className="row justify-content-center mt-5 descripcion_la_carreta">
              <div className="col-12 col-md-5 p-4 mt-0 mt-xl-5">
                  <h2 className="p-1">La Carreta - Chef</h2>
                  <p className="p-1">Sed commodo augue eu diam tincidunt, sit amet auctor lectus semper. Mauris porttitor diam at fringilla tempor. Integer molestie rhoncus nisi a euismod. Etiam scelerisque eu enim et vestibulum. Mauris finibus, eros a faucibus varius, dui risus mattis massa, sed lobortis ante ante eget justo. Nam eu dolor lorem. Praesent blandit leo sit amet velit accumsan ultrices. Vestibulum nec libero vel sapien dictum euismod eu ac justo.</p>
              </div>
              <div className="col-12 col-md-5 p-4">
                  <img  src="/static/about-2.jpg" />   
              </div>
            </div>


            <h2 className="text-center mt-5">Testimonios</h2>
            <div className="row justify-content-center">
                {this.state.data_testimonios.datos.map( valor => (
                  <div className="col-8 p-3" key={valor.id}>
                    <Item.Group>
                      <Item>
                        <Item.Image size='tiny' src={'/static/'+valor.avatar} />
                        <Item.Content>
                          <Item.Header as='a'>{valor.nombre}</Item.Header>
                            <Item.Meta>{valor.dato}</Item.Meta>
                            <Item.Description>
                                {valor.descripcion}
                            </Item.Description>
                        </Item.Content>
                      </Item>
                    </Item.Group>
                  </div>
                ))}
            </div>

            <div className="row justify-content-center mt-5 reservacion_footer">
              <div className="col-12 col-lg-5 p-3 mt-xl-5">
                  <h2 className="text-center">Reservación</h2>
                    <FormRegistrarEvent />
              </div>
              <div className="col-12 col-md-5 p-3">
                  <img  src="/static/hero-4.jpg" />
              </div>
            </div>

          </div>

                  <Footer />

        </>
    );
  }
}
