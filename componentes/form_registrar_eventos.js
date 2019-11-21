import React from "react";
import { Form, Button, Message  } from 'semantic-ui-react';

class formRegistrar extends React.Component{

  componentDidMount(){
    var año = new Date().getFullYear();
    var mes = new Date().getMonth();
    var dia = new Date().getDate();

    var fecha = String(año + '-' + Number(mes + 1) + '-' + dia);
    document.getElementById('fecha-reservacion').setAttribute('min',`${fecha}`);
  }

    doReservacion = (e) => {
      var area_sms = document.getElementById('insert-message-reservacion');

      var date = document.getElementById('fecha-reservacion').value;
      var hora = document.getElementById('hora-reservacion').value;
      var personas = document.getElementById('persona-reservacion').value;
      var nombre = document.getElementById('nombre-reservacion').value;
      var telefono = document.getElementById('telefono-reservacion').value;

      const sms = document.createElement('div');

      if(!date || !hora || !personas || !nombre || !telefono){
        sms.classList = 'ui negative message';
        sms.innerHTML = `
          <div class="header">
            Error..! - Detectado campos vacios.
          </div>
        `;
      }else{
        const datos = {
          fecha: date,
          hora: hora,
          persona: personas,
          nombre: nombre,
          telefono: telefono
        }
        sms.classList = 'ui positive message';
        sms.innerHTML = `
          <div class="header">
            Exito..! - Reservavion registrada.
          </div>
        `;
        e.target.reset();
      }

      if(!document.querySelector('#insert-message-reservacion div')){
        area_sms.appendChild(sms);
      }

      setTimeout( () => {
        area_sms.innerHTML = '';
        area_sms.classList = '';
      },3000);
    }

    render(){
      const items = [
        'Digita la hora entre las 11-am y 11-pm',
        'Debes tener un cuenta. si no tienes, seras redirigido ah Registro',
      ]
        return(
            <>
                    <Message>
                      <Message.Header>Atencion: Para ( registrar un evento o reservación ) con exito asegurate de cumplir con...</Message.Header>
                      <Message.List items={items} />
                    </Message>
                    
                    <Form onSubmit={this.doReservacion}>
                      <Form.Group unstackable widths={2}>
                        <Form.Input label='Fecha' id="fecha-reservacion" placeholder='Selecciona la fecha' type="Date"/>
                        <Form.Input label='Hora' id="hora-reservacion" placeholder='Selecciona la hora' type="time"/>
                      </Form.Group>
                      <Form.Group unstackable widths={2} className="mt-3">
                        <Form.Input label='Personas' id="persona-reservacion" placeholder='Cuantas Personas?' type="number"/>
                        <Form.Input label='Nombre' id="nombre-reservacion" placeholder='Guardar a nombre de...' type="text" />
                      </Form.Group>
                      <Form.Group widths={2} className="mt-3">
                        <Form.Input label='Telefono' id="telefono-reservacion" placeholder='Numero de telefono' type="number"/>
                        <Button type='submit' primary>Registrar</Button>
                      </Form.Group>
                    </Form>
                    <div id="insert-message-reservacion">

                    </div>
            </>
        );
    }
}

export default formRegistrar;