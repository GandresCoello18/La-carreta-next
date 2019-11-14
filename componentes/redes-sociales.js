import React from "react";
import { Icon } from 'semantic-ui-react';

const redesSocial = (props) => {
    return(
        <>
            <div className="contenedor-redes">
                <ul>
                    <li><a href="https://www.facebook.com/ParrilladaLaCarreta/" target="_blanck"><Icon name="facebook" /></a></li>
                    <li><a href="https://www.instagram.com/lacarreta_bhyo/" target="_blanck"><Icon name="instagram" /></a></li>
                </ul>
            </div>
            <style jsx>{`
                .contenedor-redes{
                    position: absolute;
                    font-size: 30px;
                    padding: 5px;
                    right: -5px;
                    top: 500px;
                }
                .contenedor-redes ul li{
                    list-style: none;
                    padding: 10px;
                    background-color: rgba(0,0,0,0.5);
                }
                .contenedor-redes ul li a{
                    color: #fff;
                }
            `}</style>
        </>
    );
}

export default redesSocial;