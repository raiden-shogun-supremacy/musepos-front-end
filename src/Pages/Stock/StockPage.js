import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

// import data
import dummy from '../../dummy/dummy.json';
import StockCard from './StockCard';

//import popup components
import StockProductPost from './StockProductPost';
import AddStock from './AddStock';

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
    color : #43A047;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
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
    width: 100%;
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
    margin-bottom: 25%;
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

const StockPage = () => {

    const [selectedStockProductOpen, setSelectedStockProductOpen] = useState(null);
    const [optionFilter, setOptionFilter] = useState('');
    const [searchText, setSearchText] = useState('');
    const [onAddMenuClick, setOnAddMenuClick] = useState('');

    function onStockProductOpenClick(data) {
        setSelectedStockProductOpen(data);
    }
    function onStockProductCloseClick() {
        setSelectedStockProductOpen(null);
    }
    function onAddNewMenuOpenClicked(){
        setOnAddMenuClick('on');
    }
    function onAddNewMenuClosedClicked(){
        setOnAddMenuClick('off');
    }

    let addStockPost = null;
    let stockProductPost = null;
    if (!!selectedStockProductOpen) {
        stockProductPost = <StockProductPost detail={selectedStockProductOpen} onBackClick={onStockProductCloseClick} />
    }
    switch(onAddMenuClick){
        case 'on':
            addStockPost = <AddStock onBackClick={onAddNewMenuClosedClicked} />
            break
        case 'off':
            addStockPost = null;
            break
    }

    const stock_display = dummy.filter((data) => {return data.Name.includes(optionFilter)})
    .map((data) => {
        return <StockCard data={data} onStockProductClick={onStockProductOpenClick} />
    });
  return (
    <Container>
        {stockProductPost}
        {addStockPost}
        <Header>
            <HeaderText>Stock</HeaderText>
            <Description>Manage your menu</Description>
        </Header>
        <Content>
            <Section>
                <input value={optionFilter} onChange={(e)=> setOptionFilter(e.target.value)}></input>
                {/* <select onChange={(e)=> setOptionFilter(e.target.value)}>
                    <option>- Choose you category -</option>
                    <option value='Beverage/Drink'>Beverage/Drink</option>
                    <option value='Dessert'>Dessert</option>
                    <option value='Food'>Food</option>
                </select> */}
            </Section>
            <SectionGrid>
                { stock_display }
            </SectionGrid>
            <Button onClick={onAddNewMenuOpenClicked}><img src="https://cdn1.iconfinder.com/data/icons/feather-2/24/plus-circle-512.png"/>add new menu</Button>
        </Content>
        <StupidCircle />
    </Container>
  );
};

export default StockPage;
