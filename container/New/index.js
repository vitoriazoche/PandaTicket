/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import format from 'date-fns/format';

import Modal from '../../components/Modal';
import api from '../../api';
import { Form } from './styles';

class New extends Component {
  state = {
    ticket: {
      status: '',
      name: '',
      category: '',
      description: '',
      requester: '',
      openningDate: '',
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const status = 'Em andamento';
    const openningDate = format(new Date(), 'DD/MM/YYYY');
    const requester = 'João';

    this.setState(prevState => ({
      ticket: {
        ...prevState.ticket,
        status,
        openningDate,
        requester,
      },
    }));

    try {
      // eslint-disable-next-line react/destructuring-assignment
      api.newTicket(this.state.ticket).then((res) => {
        alert(res.statusText);
      });
    } catch (error) {
      alert('Erro ao abrir chamado');
    }
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
    const { onClose, isOpen } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <Form method="post" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nome do Chamado"
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Nome do Solicitante"
            name="requester"
            onChange={this.handleChange}
          />
          <select onChange={this.handleChange} name="category">
            <option disabled selected>
              Escolha uma catregoria
            </option>
            <option>Suporte</option>
            <option>E-mail</option>
            <option>Acesso</option>
            <option>Beneficios</option>
            <option>Infraestrutura</option>
            <option>Financeiro</option>
          </select>
          <textarea placeholder="Descrição" name="description" onChange={this.handleChange} />
          <button type="submit" onClick={onClose}>
            Novo Chamado
          </button>
        </Form>
      </Modal>
    );
  }
}

export default New;
