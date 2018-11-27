import styled from 'styled-components';

export const Overlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Close = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  font-weight: 800;
  font-size: 20px;
  top: 0;
  right: 0;
  color: #999;
  padding: 10px 10px 0 0;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #504fef;
  }
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  top: calc(50% - 250px);
  background-color: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.75);
  padding: 20px;
  height: auto;
  width: 45%;
`;
