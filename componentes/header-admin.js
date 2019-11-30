import React from "react";
import Head from "./head";
import { Link } from "../routes";
import { Menu } from "semantic-ui-react";

class HeadAdmin extends React.Component{
    
    state = {}

    componentDidMount(){
        if(!localStorage.getItem('admin')){
            window.location.href = '/';
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
        if(name == 'cerrar'){
            localStorage.removeItem('admin');
            window.location.href = '/';
        }
    }    
    
    render(){
        const { activeItem } = this.state;
        return(
            <>
            <Head title={this.props.title} />
                <Menu stackable inverted>
                    <Menu.Item>
                        <img src='/static/logo.jpg' />
                    </Menu.Item>

                    <Link route="/administracion">
                        <a className="mt-2">
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}>
                                Inicio
                            </Menu.Item>
                        </a>
                    </Link>

                    <Menu.Item
                        name='cerrar'
                        active={activeItem === 'cerrar'}
                        onClick={this.handleItemClick}>
                        Cerrar Session
                    </Menu.Item>
                </Menu>
            </>
        );
    }
}

export default HeadAdmin;