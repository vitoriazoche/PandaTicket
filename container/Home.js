import React, { Component, Fragment } from 'react';

import New from './New';
import Edit from './Edit';
import api from '../api';

import Logo from '../img/Logo.png';
import {
  Header, Button, Image, Table, Thead, Tr,
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
      <Fragment>
        <Header>
          <Image src={Logo} />
          <Button onClick={this.toggleNew}>Abrir chamado</Button>
        </Header>

        <New isOpen={showNewTicket} onClose={this.toggleNew} />
        <Edit isOpen={showEditTicket} onClose={this.toggleEdit} target={target} />

        <Table>
          <Thead>
            <tr>
              <th>Status</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Solicitante</th>
              <th>Data abertura</th>
            </tr>
          </Thead>
          <tbody>
            {data.map(item => (
              <Tr key={item.id} onClick={() => this.renderEdit(item)}>
                <td>{item.status}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
                <td>{item.requester}</td>
                <td>{item.openningDate}</td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default Home;
