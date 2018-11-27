/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../../components/Modal';
import Button from '../../components/Button';
import api from '../../api';

import {
  Info, Label, Description, Status, Select, Form,
} from './styles';

class Edit extends React.PureComponent {
  state = { status: '' };

  componentDidMount() {
    const { status } = this.props.target;
    this.setState({ status });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { status } = this.state;
    try {
      api.editTicket(status).then(() => {
        alert('alterado com sucesso');
      });
    } catch (error) {
      alert(`Fetch restaurant error: ${error}`);
    }
  };

  handleChange = event => this.setState({ status: event.target.value });

  renderOptions = (status) => {
    const options = [
      { value: 'opened', option: 'Aberto', selected: false },
      { value: 'in-service', option: 'Em andamento', selected: false },
      { value: 'finished', option: 'Finalizado', selected: false },
    ];
    return options.map((item) => {
      if (status === item.option) item.selected = true;
      return (
        <option key={item.value} value={item.value} selected={item.selected}>
          {item.option}
        </option>
      );
    });
  };

  render() {
    const { onClose, isOpen, target } = this.props;
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>{target.name}</h2>
        <Info>
          <Label>Solicitante: </Label>
          {target.requester}
        </Info>
        <br />
        <Info>
          <Label>Categoria: </Label>
          {target.category}
        </Info>
        <Description>{target.description}</Description>
        <Status>Status: </Status>
        <Form method="post" onSubmit={this.handleSubmit}>
          <Select onChange={this.handleChange}>{this.renderOptions(target.status)}</Select>
          <Button type="submit" onClick={onClose}>
            Concluir
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default Edit;
