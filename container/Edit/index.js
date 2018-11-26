/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React from 'react';

import Modal from '../../components/Modal';
import api from '../../api';

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

  // handleChange = (e) => {
  //   e.persist();
  //   this.setState((state) => {
  //     const nextState = {
  //       ...state,
  //       ticket: {
  //         ...state.ticket,
  //         [e.target.name]: e.target.value,
  //       },
  //     };
  //     return {
  //       ...nextState,
  //     };
  //   });
  // };

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
      <Modal isOpen={isOpen} onClose={onClose} title="Editar chamado">
        <h2>{target.name}</h2>
        <span>{`Solicitante: ${target.requester}`}</span>
        <span>{`Categoria: ${target.category}`}</span>
        <div>{`Descrição: ${target.description}`}</div>
        <span>Status: </span>
        <br />
        <form onSubmit={this.handleSubmit} method="post">
          <select onChange={this.handleChange}>{this.renderOptions(target.status)}</select>
          <button type="submit" onClick={onClose}>
            Concluir
          </button>
        </form>
      </Modal>
    );
  }
}

export default Edit;
