/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Overlay from '../../components/overlay';
import { Modal, Form, Close } from './styles';

class New extends Component {
  state = {
    ticket: {
      status: '',
      id: 0,
      name: '',
      category: '',
      description: '',
      requester: '',
      openningDate: '',
      owner: '',
    },
  };

  handleChange = (e) => {
    e.persist();
    this.setState((state) => {
      const nextState = {
        ...state,
        ticket: {
          ...state.ticket,
          [e.target.name]: e.target.value,
        },
      };
      return {
        ...nextState,
      };
    });
  };

  render() {
    const { isVisible, onClose } = this.props;
    return (
      <Overlay isVisible={isVisible}>
        <Modal>
          <Close onClick={onClose}>X</Close>
          <Form method="post">
            <input type="text" placeholder="Nome do Chamado" />
            <input type="text" placeholder="Nome do Solicitante" />
            <select>
              <option>Suporte</option>
              <option>E-mail</option>
              <option>Acesso</option>
              <option>Beneficios</option>
              <option>Infraestrutura</option>
              <option>Financeiro</option>
            </select>
            <textarea placeholder="Descrição" />
            <button type="submit">Novo Chamado</button>
          </Form>
        </Modal>
      </Overlay>
    );
  }
}

export default New;
