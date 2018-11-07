import styled from 'styled-components';

export const Modal = styled.div`
  position: relative;
  margin: 0 auto;
  top: calc(50% - 150px);
  background-color: #fff;
  position: relative;
  height: 300px;
  width: 500px;
`


export const Close = styled.span`
  position: relative;
  cursor: pointer;
  top: 2px;
  left: 477px;

  &:hover {
    color: grey;
  }
`

export default Modal;