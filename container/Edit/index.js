import React from 'react';

import Overlay from '../../components/overlay';

import { Modal, Close } from './styles';

// eslint-disable-next-line react/prop-types
const Edit = ({ isVisible, onClose }) => (
  <Overlay isVisible={isVisible}>
    <Modal>
      <Close onClick={onClose}>X</Close>
      <h2>Nome do chamado</h2>
      <span>Solicitante: Jonathan</span>
      <span>Categoria: Email</span>
      <form>
        <br />
        <select>
          <option>Em atendimento</option>
          <option>Finalizado</option>
          <option>Em análise</option>
        </select>
      </form>
    </Modal>
  </Overlay>
);

export default Edit;
