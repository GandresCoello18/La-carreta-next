import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

    componentDidUpdate(prevProps, prevState){
        if(prevState.modalOpen == false){
            this.setState({
                modalOpen: true
            })
        }
    }

  render(){ 
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Aviso' />
        <Modal.Content>
            <h3>{this.props.text}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Continuar
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}