import styled from 'styled-components';

import ButtonComponent from '../components/Button';

export const Background = styled.div`
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(rgba(12, 141, 173, 1), #533cb0);
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 196px;
  height: 130px;
  padding: 35px;
`;

export const Table = styled.table`
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.75);
  background-color: #fff;
  border-radius: 5px;
  border-collapse: collapse;
  border-spacing: 0;

  thead {
    tr {
      height: 60px;
      background-color: #504fef;
      text-align: center;
      color: #fff;
      cursor: initial;

      &:hover {
        background-color: #504fef;
      }
    }
    }
  }

  td,
  tr {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`;

export const Button = styled(ButtonComponent)`
  margin: 38px;
  font-size: 22px;
  width: 200px;
`;

export const Tr = styled.tr`
  cursor: pointer;
  text-align: center;
  padding: 22px;

  &:hover {
    background-color: #e8e8e8;
  }
`;
