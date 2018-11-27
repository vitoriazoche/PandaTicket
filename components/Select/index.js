import styled from 'styled-components';

const Select = styled.select`
  padding: 12px;
  margin: 12px;
  border-radius: 5px;
  border: 1px solid #777;
  outline: none;
  transition: 1s;

  &:focus {
    border: 1px solid #504fef;
  }
`;

export default Select;
