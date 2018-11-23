import styled from 'styled-components';

export const Overlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.span`
  position: relative;
  cursor: pointer;
  top: 2px;
  left: 477px;

  &:hover {
    color: grey;
  }
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: calc(50% - 150px);
  background-color: #fff;
  position: relative;
  height: 300px;
  width: 500px;
`;
