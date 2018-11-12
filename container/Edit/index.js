import React from 'react';

import Overlay from '../../components/overlay';

import { Modal, Close } from './styles';

// eslint-disable-next-line react/prop-types
const Edit = ({ isVisible, onClose, target }) => (
  <Overlay isVisible={isVisible}>
    <Modal>
      <Close onClick={onClose}>X</Close>
      <h2>{target.name}</h2>
      <span>{`Solicitante: ${target.requester}`}</span>
      <span>{`Categoria: ${target.category}`}</span>
      <div>{`Descrição: ${target.description}`}</div>
      <span>Status: </span>
      <form>
        <br />
        <select>
          <option>Em atendimento</option>
          <option>Finalizado</option>
          <option>Em análise</option>
        </select>
      </form>
      <button type="submit">Concluir</button>
    </Modal>
  </Overlay>
);

export default Edit;
