import React from 'react';
import Head from './head';
import { Link } from "../routes";
import { Icon, Menu, Input, Label, Image } from 'semantic-ui-react';
import { getId, login, postColletion, token } from "./Api/index";
import "../componentes/css/header.styl";

class header extends React.Component{
    state = { activeItem: 'closest',
                session: false,
                name_user: 'anonimo'
             }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  Open_AND_close_Menu = () => {
      let menu_vertical = document.getElementById('menu-vertical');
      if(menu_vertical.style.display == "none"){
            menu_vertical.style.display = "block";
      }else{
            menu_vertical.style.display = "none";
      }
  }

   registrarUser = async ()  => {

    const load = document.createElement('div');
    load.classList= "ui active transition visible dimmer";
    load.innerHTML = `
        <div class="content">
            <div class="ui indeterminate text loader">Verificando...</div>
        </div>
    `;
    document.getElementById('form-registro').appendChild(load);

    document.getElementById('btn-registrar').disabled = true;

      const user = document.getElementById('registro_usuario').value;
      const correo = document.getElementById('registro_email').value;
      const phone = document.getElementById('registro_phone').value;
      const password = document.getElementById('registro_contra').value;
      const password_confir = document.getElementById('registro_confir_contra').value;

      var crear_sms = document.createElement('div');
      crear_sms.classList = "ui negative message";

      if(user == undefined || user == "" || correo == undefined || correo == "" || phone == undefined || phone == "" || password == undefined || password == "" || password_confir == undefined || password_confir == "" ){
        crear_sms.innerHTML = `
            <div class="header">Campos vacios, por favor revisa y vuelve a intentarlo</div>
        `;
      }else if(correo.indexOf('@') == -1){
        crear_sms.innerHTML = `
            <div class="header"> ( ${correo} ) No es un correo </div>
        `;
      }else if(password != password_confir){
        crear_sms.innerHTML = `
            <div class="header">Las contraseñas no son iguales</div>
        `;
      }else if(password.length < 7 || password_confir.length < 7){
        crear_sms.innerHTML = `
            <div class="header">Se necesita 7 o mas caracteres en contraseña</div>
        `;
      }else{
    
        login(correo, password)
            .then( data => {
                const respuesta = data;
                    if(respuesta.body.length == 0 || respuesta.error == 'usuario no encontrado' || respuesta.error == 'contraseña incorrecta'){
                        crear_sms.classList = "ui positive  message";
                        crear_sms.innerHTML = `
                            <div class="header">Exito al crear su cuenta</div>
                        `;
            
                        const datos = {
                            name: user,
                            correo: correo,
                            clave: password,
                            telefono: phone
                        }
            
                        postColletion('user', datos);
            
                    }else{
                        crear_sms.classList = "ui negative  message";
                        crear_sms.innerHTML = `
                            <div class="header">Error ya existe una cuenta con estos datos.</div>
                        `;
                    }
            })
      }

      document.getElementById('insert_message_registro').appendChild(crear_sms);

      setTimeout(function () {
        document.querySelector('#insert_message_registro div').remove();
        document.getElementById('btn-registrar').disabled = false;
        document.getElementById('form-registro').appendChild(load).remove();
        document.getElementById('form-registro').reset();
      },3000);

  }

  SessionUser = async () => {

    const load = document.createElement('div');
    load.classList= "ui active transition visible dimmer";
    load.innerHTML = `
        <div class="content">
            <div class="ui indeterminate text loader">Verificando...</div>
        </div>
    `;

    const btn_login = document.getElementById('btn_login');
    btn_login.disabled = true;

    const login_correo = document.getElementById('login_correo').value;
    const login_password = document.getElementById('login_password').value;

    var crear_sms_login = document.createElement('div');
    crear_sms_login.classList = "ui negative message";

    if(login_correo == undefined || login_correo == "" || login_password == undefined || login_password == ""){
        crear_sms_login.innerHTML = `
            <div class="header">Campos vacios, por favor revisa y vuelve a intentarlo</div>
        `;
    }else{

        
        login(login_correo, login_password)
            .then( data => {
                const respuesta = data;
                
                if(respuesta.error == 'contraseña incorrecta'){
                    crear_sms_login.innerHTML = `
                        <div class="header">Datos incorrectos, vuelva a intentarlo</div>
                    `;  
                }else{
                    
                    const datos = {
                        id: respuesta.body[0]._id,
                        name: respuesta.body[0].name,
                        correo: respuesta.body[0].correo,
                        clave: respuesta.body[0].clave,
                        telefono: respuesta.body[0].telefono
                    }
        
                    token(datos)
                        .then( data => {
                            const respuesta_3 = data; 
                            
                            if(respuesta_3.text == "protegido"){
                                if(respuesta_3.data.respuesta.name !== 'ADMINISTRACION-CARRETA' && respuesta_3.data.respuesta.correo !== 'admin@gmail.com'){
                                    localStorage.setItem('user', respuesta_3.data.respuesta.id);
                                    window.location.href = "/especiales";
                                }else{
                                    localStorage.setItem('admin', respuesta_3.data.respuesta.id);
                                    window.location.href = "/administracion";
                                }
                            }
                        })
                }
            })
    }

    document.getElementById('insert_message_login').appendChild(crear_sms_login);
    document.getElementById('form-login').appendChild(load);

    setTimeout(function () {
        document.querySelector('#insert_message_login div').remove();
        btn_login.disabled = false;
        document.getElementById('form-login').appendChild(load).remove();    
    },3000);

  }

  cerrarSession = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  }


  componentDidMount(){
      if(localStorage.getItem('user')){
        this.setState({
            session: true
        })
        getId('user', localStorage.getItem('user')).then( data => {
            this.setState({
                name_user: data.body[0].name
            })
        });
      }
  }
 
    render(){
        console.log(this.state.session);
        const { activeItem } = this.state;
        return(
            <>            
                <Head title={this.props.titulo} />

                <nav className="row">
                    <div className="col-2 logo">
                        <Link route="/" >
                            <a>
                                <img src="static/logo.jpg" />
                            </a>
                        </Link>        
                    </div>
                    <div className="col-10 menu-itens">
                        <ul>
                            <li>
                                <a href="/"> 
                                    <Label basic image>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                            {this.state.session ? 
                                                this.state.name_user 
                                            : "anonimo" }
                                    </Label>
                                </a>
                            </li>
                            <li>
                                <Link route="/reservacion" >
                                    <a>Reservaciones</a>
                                </Link>
                            </li>
                            <li>
                                <Link route="/eventos" >
                                    <a>Eventos</a>
                                </Link>
                            </li>    
                            <li>
                                <Link route="/especiales" >
                                    <a>Especiales</a>
                                </Link>    
                            </li>
                            {this.state.session ? 
                                <li onClick={this.cerrarSession}>
                                    <a href="/">Salir</a>
                                </li> :
                                <li data-toggle="modal" data-target="#exampleModalCenter">
                                    <a href="#">Login</a>
                                </li>
                            }
                            <li>
                                <Link route="/"  >
                                    <a>Home</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div id="menu-hamburguesa" onClick={this.Open_AND_close_Menu}>
                        <Icon name="bars" />
                    </div>

                    <div id="menu-vertical">
                        <Menu pointing vertical>
                            <Link to="/">
                                <a>
                                    <Menu.Item name='Home'
                                    active={activeItem === 'Home'}
                                    onClick={this.handleItemClick}>

                                    </Menu.Item>
                                </a>
                            </Link>

                            <Link to="#">
                                <a>
                                    {this.state.session ? 
                                        <Menu.Item name='Salir'
                                        active={activeItem === 'Salir'}
                                        onClick={this.cerrarSession}>
                                        
                                        </Menu.Item> 
                                        :
                                        <Menu.Item name='Login'
                                        active={activeItem === 'Login'}
                                        onClick={this.handleItemClick}
                                        data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                        
                                        </Menu.Item>
                                    }
                                </a>
                            </Link>
                            
                            <Link to="/especiales">
                                <a>
                                    <Menu.Item name='Especiales'
                                    active={activeItem === 'Especiales'}
                                    onClick={this.handleItemClick}>

                                    </Menu.Item>
                                </a>
                            </Link>

                            <Link to="/eventos">
                                <a>
                                    <Menu.Item name='Eventos'
                                    active={activeItem === 'Eventos'}
                                    onClick={this.handleItemClick}>

                                    </Menu.Item>
                                </a>
                            </Link>    
                                
                            <Link to="/reservacion">
                                <a>
                                    <Menu.Item name='Reservaciones'
                                    active={activeItem === 'Reservaciones'}
                                    onClick={this.handleItemClick}>

                                    </Menu.Item>
                                </a>
                            </Link>
                                
                            <Menu.Item>
                                <div className="row">
                                    <div className="col-4">
                                        <Image size="mini" src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    </div>
                                    <div className="col">
                                        <Label basic>
                                            {this.state.session ? 
                                                this.state.name_user 
                                            : "anonimo" }
                                        </Label>
                                    </div>
                                </div>
                            </Menu.Item>
                        </Menu>
                    </div>
                </nav>

                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Iniciar Sessión</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="insert_message_login">

                            </div>
                            <div className="modal-body">
                                <form action="" method="" id="form-login">
                                    <input type="email" id="login_correo" className="form-control" placeholder="Correo" />
                                    <input type="password" id="login_password" className="form-control mt-3" placeholder="Contraseña" />
                                    <input type="button" id="btn_login" className="btn btn-success form-control mt-3" value="Entrar" onClick={this.SessionUser}/>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Salir</button>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registro_modal">¿No tienes una cuenta? - Registrate</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="registro_modal" tabindex="-1" role="dialog" aria-labelledby="registro_modalTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="registro_modalTitle">Registrate aqui..!</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="insert_message_registro">

                            </div>
                            <div className="modal-body">
                                <form action="" method="" id="form-registro">
                                    <input type="text" id="registro_usuario" required="" className="form-control" placeholder="Usuario" />
                                    <input type="email" id="registro_email" required="" className="form-control mt-3" placeholder="Correo Electronico" />
                                    <input type="number" id="registro_phone" className="form-control mt-3" placeholder="Telefono" />
                                    <input type="password" id="registro_contra" required="" className="form-control mt-3" placeholder="Contraseña 7 caracteres o mas" />
                                    <input type="password" id="registro_confir_contra" required="" className="form-control mt-3" placeholder="Confirma contraseña" />
                                    <input type="button" id="btn-registrar" className="btn btn-success form-control mt-3" value="Registrarme" onClick={this.registrarUser} />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    nav{
                        background-color: ${this.props.color_nav}
                    }
                `}</style>

            </>
        );
    }
}

export default header;