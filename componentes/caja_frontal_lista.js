import React from "react";
import "../componentes/css/caja_list_platos.styl";

const cajaListPLatos = (props) => {
    return(
        <>
            <a href="https://api.whatsapp.com/send?phone=593992239138&text=Hola, necesito hablar con la persona encargada, en este momento..." target="_blanck" type="button" className="btn button-list">
                Atención al cliente
                <span className="sr-only">unread messages</span>
            </a>
        </>
    );
}

export default cajaListPLatos;