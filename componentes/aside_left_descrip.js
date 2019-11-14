import React from "react";
import { Link } from "../routes";
import "./css/aside_descrip.styl";

const aside_descrip = (props) => {
    return(
        <>
            <div className="aside_left_descrip">
                <h1 className="p-1">La Carreta</h1>
                <p className="p-1">Restaurante "La carreta" ofrecemos almuerzos - platos a la carta - las mejores parrilladas y asados - local con DJ y Buffet para eventos</p>
                <Link route="/reservacion" >
                    <a>
                        <div id="btn-reservacion">
                            <b>Reservación</b>
                        </div>
                    </a>
                </Link>        
            </div>
        </>
    );
}

export default aside_descrip;