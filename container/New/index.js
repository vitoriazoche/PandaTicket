import React from 'react';

import Overlay from '../../components/overlay';
import { Modal, Form, Close } from './styles';

// eslint-disable-next-line react/prop-types
const Novo = ({ isVisible, onClose }) => (
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
        <textarea placeholder="Mensagem" />
        <button type="submit">Novo Chamado</button>
      </Form>
    </Modal>
  </Overlay>
);

export default Novo;
