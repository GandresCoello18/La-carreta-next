import React from "react";
import { Header, Image, Table, Menu, Icon } from 'semantic-ui-react';

class tablaEvento extends React.Component{
    render(){
        return(
            <>
                <Table basic='very' celled >
                    <Table.Header>
                            <Header as="h3" className="text-center">Julio</Header>
                        <Table.Row>
                            <Table.HeaderCell>Usario</Table.HeaderCell>
                            <Table.HeaderCell>Fecha</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://image.flaticon.com/icons/svg/149/149071.svg' rounded size='mini' />
                                    <Header.Content>
                                        Elena Valles
                                        <Header.Subheader>Necesito un lugar amplio y bonito para celebrar la comida de mi boda</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>22</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://image.flaticon.com/icons/svg/149/149071.svg' rounded size='mini' />
                                    <Header.Content>
                                        Julio Garcia
                                        <Header.Subheader>celebreare mi cumple años numero 23</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>15</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://image.flaticon.com/icons/svg/149/149071.svg' rounded size='mini' />
                                    <Header.Content>
                                        Cindy Avilez
                                        <Header.Subheader>Tendremos una reunion de negocios</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>12</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://image.flaticon.com/icons/svg/149/149071.svg' rounded size='mini' />
                                    <Header.Content>
                                        Carlos Castro
                                        <Header.Subheader>Celebrare mi aniversario junto con mi esposa e hijos</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>11</Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' />
                                    </Menu.Item>
                                </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </>
        );
    }
}

export default tablaEvento;