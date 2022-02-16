import React from 'react';
import styled from 'styled-components';

// import data
import dummy from '../../dummy/dummy.json';
import MenuCard from './MenuCard.js';

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
    width: inherit;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 5px 0px;
    width: 100%;
`

const SectionGrid = styled(Section)`
    display : grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 25%;
`

const SectionFloat = styled(Section)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    position: fixed;
    z-index: 999;
    bottom: 10%;
    width: 90%;
    height: 2.6em;
    border: none;
    border-radius: 5px;
    background-color: #43A047;
    color: #ffffff;
    margin: 4px 0px;
    padding: 10px;
    text-decoration: none;
`
const menu_display = dummy.map((data) => {
    return <MenuCard data={data} />
});

const AddMenu = ({ onBackClick }) => {
  return (
    <Container>
        <Header>
            <HeaderText>Add Menu</HeaderText>
            <Description>Which one your customer wants to order?</Description>
        </Header>
        <Content>
            <Section>
                <select>
                    <option>- Choose you category -</option>
                    <option>Beverage/Drink</option>
                    <option>Dessert</option>
                    <option>Food</option>
                </select>
            </Section>
            <SectionGrid>
                { menu_display }
            </SectionGrid>
            <SectionFloat>
            <Button>Accept</Button>
            </SectionFloat>
        </Content>
    </Container>
  );
};

export default AddMenu;
