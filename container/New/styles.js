import styled from 'styled-components';

export const Message = styled.textarea`
  padding: 12px;
  margin: 12px;
  border-radius: 5px;
  border: 1px solid #777;
  outline: none;
  transition: 1s;
  height: 100px;

  &:focus {
    border: 1px solid #504fef;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
