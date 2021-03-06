/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import format from 'date-fns/format';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import api from '../../api';
import { Message, Form } from './styles';

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

  componentDidMount() {
    const status = 'Aberto';
    const openningDate = format(new Date(), 'DD/MM/YYYY');
    const requester = 'João';
    this.setState({ ticket: { status, openningDate, requester } });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { ticket } = this.state;

    try {
      api.newTicket(ticket).then((res) => {
        alert(res.statusText);
      });
    } catch (error) {
      alert('Erro ao abrir chamado');
    }
    window.location.reload();
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
      <Modal isOpen={isOpen} onClose={onClose} title="Novo chamado">
        <Form method="post" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Nome do Chamado"
            name="name"
            onChange={this.handleChange}
          />
          <Input
            type="text"
            placeholder="Nome do Solicitante"
            name="requester"
            onChange={this.handleChange}
          />
          <Select onChange={this.handleChange} name="category">
            <option disabled selected>
              Escolha uma catregoria
            </option>
            <option>Suporte</option>
            <option>E-mail</option>
            <option>Acesso</option>
            <option>Beneficios</option>
            <option>Infraestrutura</option>
            <option>Financeiro</option>
          </Select>
          <Message placeholder="Descrição" name="description" onChange={this.handleChange} />
          <Button type="submit" onClick={onClose}>
            Confirmar
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default New;
