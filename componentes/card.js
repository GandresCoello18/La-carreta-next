import React from "react";
import Link from "next/link";
import { Card, Icon, Image, Rating } from 'semantic-ui-react';

class Tarjeta extends React.Component{
    render(){
        return(
            <>
                <Card key={this.props.id}>
                    <Image src={this.props.imagen} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>{this.props.title}</Card.Header>
                      <Card.Meta>
                        <Rating maxRating={5} defaultRating={this.props.estrellas} icon='star' size='mini' />
                      </Card.Meta>
                    
                      <Card.Description>
                        <Link href={`/pedidos-adomicilio/${this.props.id}`} prefetch>
                            <a className="btn btn-success form-control m-sm-1 m-xl-0">Pedido a domicilio</a>
                        </Link>
                      </Card.Description>
                 
                    </Card.Content>
                      <Card.Content extra>
                        <Icon name='dollar sign' />
                          {this.props.precio} Dolares
                      </Card.Content>
                  </Card>
            </>
        );
    }
}

export default Tarjeta;