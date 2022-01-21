import React from 'react';
import styled from 'styled-components';

// import data
import dummy from '../../dummy/dummy.json';
import StockCard from './StockCard';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div``

const HeaderText = styled.h1`
    font-weight : 600;
    color : #43A047;
`

const Description = styled.p`
    font-size : 14px;
    margin-top : -20px;
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

const SectionGrid = styled(Section)`
    display : grid;
    grid-template-columns: 1fr 1fr;
`

const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    width: inherit;
    height: 4em;
    border-radius: 15px;
    background-color: #F3F3F3;
    color: #AAAAAA;
    margin: 5px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
        width: 20px;
        filter: opacity(.4);
    }
`

const StupidCircle = styled.div`
    z-index : -999;
    background-color : #43A047;
    width : 200px;
    height : 200px;
    position : fixed;
    border-radius : 50%;
    top : -120px;
    right : -120px;
`
const stock_display = dummy.map((data) => {
    return <StockCard data={data} />
});

const StockPage = () => {
  return (
    <Container>
        <Header>
            <HeaderText>Stock</HeaderText>
            <Description>Manage your menu</Description>
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
                { stock_display }
            </SectionGrid>
            <Button><img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/plus-circle-512.png" />add new menu</Button>
        </Content>
        <StupidCircle />
    </Container>
  );
};

export default StockPage;
