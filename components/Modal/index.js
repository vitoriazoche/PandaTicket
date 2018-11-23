/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';

import {
  Overlay, Close, Wrapper, Title,
} from './styles';

export default class Modal extends PureComponent {
  toggle = () => this.setState(({ isVisible }) => ({ isVisible: !isVisible }));

  render() {
    const {
      title, isOpen, children, onClose,
    } = this.props;

    return (
      <Overlay isVisible={isOpen} onClick={this.toggle}>
        <Wrapper>
          <Close onClick={onClose} />
          <Title>{title}</Title>
          {children}
        </Wrapper>
      </Overlay>
    );
  }
}
