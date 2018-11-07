import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Button = styled.button`
  padding: 20px;
  margin: 20px;
  height: 58px;
  width: 200px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;
`

export const Image = styled.img`
  width: 140px;
  height: 105px;
`

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse; border-spacing: 0;
`

export const Thead = styled.thead`
  text-align: center;
  font-weight: 100 !important;
  padding: 15px 10px;
  color: #fff;
  background-color: #879dc1;
`

export const Tr = styled.tr`
  cursor: pointer;
  text-align: center;
  padding: 22px;

  &:hover {
    background-color: #e8e8e8;
  }
`