import styled from 'styled-components';

const Button = styled.button`
  padding: 12px;
  margin: 12px;
  width: 145px;
  border-radius: 80px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #504fef;
  outline: none;
  transition: 1s;
  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
  display: block;

  &:hover {
    background-color: #3938af;
  }

  &:active {
    box-shadow: none;
  }
`;

export default Button;
