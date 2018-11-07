import React, { Component } from 'react';

import { Modal, Form, Close} from './styles';
import Overlay from '../component/overlay';

class Novo extends Component {
  render() { 
    console.log(this.props);
    return (
      <Overlay isVisible={this.props.isVisible}>
        <Modal>
          <Close onClick={this.props.onClose}>X</Close>
          <Form method="post">
            <label>Digite o nome:</label>
            <input type="text" placeholder="Nome do Chamado"/>

            <label>Digite o solicitante:</label>
            <input type="text" placeholder="Nome do Solicitante"/>

            <labe>Selecione a categoria:</labe>
            <select>
              <option>Suporte</option>
              <option>E-mail</option>
              <option>Acesso</option>
              <option>Beneficios</option>
              <option>Infraestrutura</option>
              <option>Financeiro</option>
            </select>

            <label>Escreva a descrição:</label>
            <textarea placeholder="Mensagem"/>

            <button type="submit">Novo Chamado</button>
          </Form>
        </Modal>
      </Overlay>
    );
  }
}
 
export default Novo;