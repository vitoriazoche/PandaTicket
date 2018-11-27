import React, { Component } from 'react';

import New from './New';
import Edit from './Edit';
import api from '../api';

import Logo from '../img/logo.png';
import {
  Background, Header, Button, Image, Table,
} from './styles';

class Home extends Component {
  state = {
    showNewTicket: false,
    showEditTicket: false,
    target: {},
    data: [],
  };

  async componentDidMount() {
    try {
      api.getTickets().then((res) => {
        this.setState({ data: res.data });
      });
    } catch (error) {
      alert(`Fetch restaurant error: ${error}`);
    }
  }

  toggleNew = () => this.setState(prevState => ({ showNewTicket: !prevState.showNewTicket }));

  toggleEdit = () => this.setState(prevState => ({ showEditTicket: !prevState.showEditTicket }));

  renderEdit = (item) => {
    this.setState(prevState => ({ showEditTicket: !prevState.showEditTicket, target: item }));
  };

  render() {
    const {
      data, showNewTicket, showEditTicket, target,
    } = this.state;

    return (
      <Background>
        <Header>
          <Image src={Logo} />
          <Button onClick={this.toggleNew}>Abrir chamado</Button>
        </Header>

        <New isOpen={showNewTicket} onClose={this.toggleNew} />
        <Edit isOpen={showEditTicket} onClose={this.toggleEdit} target={target} />

        <Table>
          <thead>
            <tr>
              <th>Status</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Solicitante</th>
              <th>Data abertura</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} onClick={() => this.renderEdit(item)}>
                <td>{item.status}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.requester}</td>
                <td>{item.openningDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Background>
    );
  }
}

export default Home;
