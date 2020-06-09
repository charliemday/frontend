import React from 'react';
import styled from 'styled-components';

interface Props {
  from: number;
  to: number;
  currency: string;
  onClick: () => void;
}
const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-stretch;
  align-items: center;
  cursor: pointer;
  width: 30%;
  margin: auto;
  margin-top: 40px;
  border: solid 2px white;
  border-radius: 10px;
  &:hover {
    border: solid 2px gray;
  }
`;

const SaleContainer = styled.div`
  border: solid 2px gray;
  border-radius: 999px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  border: solid 2px gray;
  height: 2px;
  flex: 1;
`;

const ItemDetail = (props: Props) => {
  const { from, to, currency, onClick } = props;
  return (
    <Container onClick={onClick}>
      <SaleContainer>{`${currency}${from}`}</SaleContainer>
      <Divider />
      <SaleContainer>{`${currency}${to}`}</SaleContainer>
    </Container>
  );
};

export default ItemDetail;
