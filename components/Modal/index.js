/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import {
  Overlay, Close, Wrapper, Title,
} from './styles';

export default class Modal extends PureComponent {
  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));

  render() {
    const {
      title, isOpen, children, onClose,
    } = this.props;

    return (
      <Overlay isVisible={isOpen}>
        <Wrapper>
          <Close onClick={onClose}>X</Close>
          <Title>{title}</Title>
          {children}
        </Wrapper>
      </Overlay>
    );
  }
}
