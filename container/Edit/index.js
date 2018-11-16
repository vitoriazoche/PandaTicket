/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

import Overlay from '../../components/overlay';
import api from '../../api';

import { Modal, Close } from './styles';

class Edit extends React.PureComponent {
  state = { status: '' };

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
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
      { value: 'in-service', option: 'Em andatmento', selected: false },
      { value: 'finished', option: 'Finalizado', selected: false },
      { value: 'opened', option: 'Aberto', selected: false },
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
    const { isVisible, onClose, target } = this.props;
    return (
      <Overlay isVisible={isVisible}>
        <Modal>
          <Close onClick={onClose}>X</Close>
          <h2>{target.name}</h2>
          <span>{`Solicitante: ${target.requester}`}</span>
          <span>{`Categoria: ${target.category}`}</span>
          <div>{`Descrição: ${target.description}`}</div>
          <span>Status: </span>
          <br />
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChange}>{this.renderOptions(target.status)}</select>
            <button type="submit">Concluir</button>
          </form>
        </Modal>
      </Overlay>
    );
  }
}

export default Edit;
