import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  padding: 20px;
  margin: 30px;
  height: 58px;
  width: 200px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: #0095ff;
  color: #fff;
  cursor: pointer;
  border-color: #07c;
  box-shadow: inset 0 1px 0 #66bfff;
`;

export const Image = styled.img`
  width: 196px;
  height: 130px;
  padding: 35px;
`;

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  text-align: center;
  font-weight: 100 !important;
  padding: 15px 10px;
  color: #fff;
  background-color: #66bfff;
`;

export const Tr = styled.tr`
  cursor: pointer;
  text-align: center;
  padding: 22px;

  &:hover {
    background-color: #e8e8e8;
  }
`;
