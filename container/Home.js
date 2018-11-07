import React, { Component, Fragment } from 'react';
import Novo from "./New/Novo";
import Editar from './Edit/Editar';

import { Header, Button, Image, Table, Thead, Tr} from './styles';
import Logo from '../img/Logo.png'

class Home extends Component {
  state = { 
    showNewTicket: true,
    showEditTicket: false,
  }

  toggleNewTicket = () => this.setState({showNewTicket: !this.state.showNewTicket})

  toggleEditTicket = () => this.setState({showEditTicket: !this.state.showEditTicket})

  render() { 
    const { showNewTicket, showEditTicket } = this.state;
    return (
      <Fragment>
        <Novo isVisible={showNewTicket} onClose={this.toggleNewTicket}/>
        <Editar isVisible={showEditTicket} onClose={this.toggleEditTicket}/>
        
        <Header>
          <Image src={Logo} />
          <Button onClick={this.toggleNewTicket}>Abrir chamado</Button>
        </Header>
        
        <Table>
          <Thead>
            <tr>
              <th>Status</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Descrição</th>
              <th>Data abertura</th>
              <th>Responsável</th>
            </tr>
          </Thead>
          <tbody>
            <Tr onClick={this.toggleEditTicket}>
              <td>Aberto</td>
              <td>1</td>
              <td>Ajuste de relatório</td>
              <td>Suporte</td>
              <td>Necessito de uma inserção de uma coluna no relatório ja existente</td>
              <td>29/10/2018</td>
              <td>Analista suporte</td>      
            </Tr>
            <Tr onClick={this.toggleEditTicket}>
              <td>Aberto</td>
              <td>2</td>
              <td>Solicitação de VR</td>
              <td>Benefícios</td>
              <td>Preciso da segunda via do cartão VR para o funcionario X até sexta</td>
              <td>30/10/2018</td>
              <td>RH</td>      
            </Tr>
            <Tr onClick={this.toggleEditTicket}>
              <td>Finalizado</td>
              <td>3</td>
              <td>Backup do banco Y</td>
              <td>Suporte</td>
              <td>Preciso de um backup do banco Y pois excluido as tabelas :(</td>
              <td>02/10/2018</td>
              <td>DBA</td>      
            </Tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}
 
export default Home;