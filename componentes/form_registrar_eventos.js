import React from "react";
import { Form, Button, Message  } from 'semantic-ui-react';

class formRegistrar extends React.Component{

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
                    
                    <Form>
                      <Form.Group unstackable widths={2}>
                        <Form.Input label='Fecha' placeholder='Selecciona la fecha' type="Date"/>
                        <Form.Input label='Hora' placeholder='Selecciona la hora' type="time"/>
                      </Form.Group>
                      <Form.Group unstackable widths={2} className="mt-3">
                        <Form.Input label='Personas' placeholder='Cuantas Personas?' type="number"/>
                        <Form.Input label='Nombre' placeholder='Guardar a nombre de...' type="text" />
                      </Form.Group>
                      <Form.Group widths={2} className="mt-3">
                        <Form.Input label='Telefono' placeholder='Numero de telefono' type="number"/>
                        <Button type='submit' primary>Registrar</Button>
                      </Form.Group>
                    </Form>
                    
                    <Message positive>
                      <Message.Header>You are eligible for a reward</Message.Header>
                        <p>Go to your <b>special offers</b> page to see now.</p>
                      </Message>
            </>
        );
    }
}

export default formRegistrar;