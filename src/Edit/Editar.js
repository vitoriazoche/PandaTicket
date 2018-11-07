import React, { Component } from 'react';
import Overlay from '../component/overlay';

import { Modal, Close } from './styles';


class Edit extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    return (
      <Overlay isVisible={this.props.isVisible}>
        <Modal>
          <Close onClick={this.props.onClose}>X</Close>
          <h2>Nome do chamado</h2>
          <span>Solicitante: Jonathan</span>
          <span>Categoria: Email</span>
          <form>
            <label>Selecione o status do chamado:</label>
            <br />
            <select>
              <option>Em atendimento</option>
              <option>Finalizado</option>
              <option>Em análise</option>
            </select>
          </form>
        </Modal>
      </Overlay>
    );
  }
}
 
export default Edit;