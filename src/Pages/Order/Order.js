import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div``

const HeaderText = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color : #388E3C;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -20px;
    color: #000000;
`

const Content = styled.div`
    display : flex;
    flex-direction : column;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 5px 0px;
`

const Border = styled.div`
    display : flex;
    width: inherit;
    height: 80vh;
    left: 16px;
    margin-top: 20px;
    background: #FFFFFF;
    border: 2px solid #F3F3F3;
    color : #AAAAAA;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
`

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    width: inherit;
    height: 2.6em;
    border: none;
    border-radius: 5px;
    background-color: #43A047;
    color: #ffffff;
    margin: 4px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
`

const Order  = ({ onBgClick }) => {
  return (
    <Container>
        <Header>
            <HeaderText>Order</HeaderText>
            <Description>Check who going to sit in your resturant</Description>
        </Header>
        <Content>
            <Button>+ New Order!</Button>
            <Border>No customer sit in your resturant yet...</Border>
        </Content>
    </Container>
  );
};

export default Order;