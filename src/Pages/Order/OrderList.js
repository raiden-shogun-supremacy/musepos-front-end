import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const HeaderText = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    margin-top: 1vh;
    margin-left: 2vw;
`

const TextMenu = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -15px;
    margin-left: 2vw;
    color: #000000;
`

const TextTotal = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    margin-top : -5px;
    margin-left: 2vw;
    color: #000000;
`

const BgContainer = styled.div`
    background-color: #FFFFFF;
    width: inherit;
    height: initial;
    padding: 10px;
    margin-left: 12px;
    margin-right: 12px;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    border: 2px solid #F3F3F3;
    box-sizing: border-box;
    border-radius: 15px;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionCol = styled(Section)`
    display : grid;
    grid-column-gap: 0vw;
    grid-template-columns: 100fr 1fr;
`

const SectionRow = styled(Section)`
    display : grid;
    grid-template-rows: 1fr;
`

const Img = styled.img`
    width: 30px;
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

const OrderList = ({ onBackClick, data }) => {

    const probs = data;
    const list_menu = []
    for (var i = 0; i < probs.length; i++) {
        list_menu.push(probs[i].Name);
    }
    const orderMenuList = () => {
        return list_menu;
    }
    if(!!probs){
        return (
            <Container>
                  <BgContainer>
                      <Section>
                          <SectionCol>
                              <SectionRow>
                                  <HeaderText>{probs.orderID}</HeaderText>
                                  <TextMenu>{orderMenuList}</TextMenu>
                                  <TextTotal>Total: {probs.totalPay} Bath</TextTotal>
                              </SectionRow>
                              <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" />
                          </SectionCol>
                      </Section>
      
                  </BgContainer>
            </Container>
          
        );
    }
    else{
        return (<Border>No customer sit in your resturant yet...</Border>)
    }




};

export default OrderList;