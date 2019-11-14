import React from "react";
import "../componentes/css/caja_list_platos.styl";

const cajaListPLatos = (props) => {
    return(
        <>
            <button type="button" className="btn button-list">
                Atención al cliente
                <span className="sr-only">unread messages</span>
            </button>
        </>
    );
}

export default cajaListPLatos;