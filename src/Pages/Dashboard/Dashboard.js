import React from 'react';
import styled from 'styled-components';
import { fakeProfit, fakeBill, fakePercent } from './fakeRandomNumber';


// initial styling
const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
    padding-bottom: 100px;
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

const Card = styled.div`
    border : none;
    border-radius : 10px;
    padding : 15px;
    background-color : ${ props => props.color == "grey" ? '#F3F3F3':'#43A047' };
    width : 100%;
    height : 100%;
`

const Topic = styled.h3`
    margin : 4px 0px;
    color : ${ props => props.color == "grey" ? '#000000':'white' };
`

const Info = styled.h1`
    margin : 0px;
    color : ${ props => props.color == "grey" ? '#43A047':'#FFFFFF' };
`

const Desc = styled.p`
    margin : 0px;
    color : ${ props => props.color == "grey" ? '#000000':'#FFFFFF' };
`

const StupidCircle = styled.div`
    z-index : -999;
    background-color : #43A999;
    width : 200px;
    height : 200px;
    position : fixed;
    border-radius : 50%;
    top : -120px;
    right : -120px;
`

const component = [
    {
        topic : "Total Info",
        info : `${fakeProfit().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ฿`,
        desc : "for this month",
        style : "green"
    },
    {
        topic : "Order Info",
        info : `${fakeBill().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} bills`,
        desc : "for this month",
        style : "grey"
    },
    {
        topic : "Net. worth",
        info : `${fakePercent().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ฿`,
        desc : "compare with prev. month",
        style : "green"
    },
    {
        topic : "Recommended Menu",
        info : `Karee kai`,
        desc : "for this week",
        style : "green"
    },
    {
        topic : "By time & date",
        info : `TBA`,
        desc : `TBA`,
        style : "grey"
    }
];

// DISPLAYING content card components
const display_card = component.map((data) => {
    return (
        <Section>
            <Card color={data.style}>
                <Topic color={data.style}>{data.topic}</Topic>
                <Info color={data.style}>{data.info}</Info>
                <Desc color={data.style}>{data.desc}</Desc>
            </Card>
        </Section>
    );
})

// Main components
const Dashboard = () => {
    return (
    <Container>
        <Header>
            <HeaderText>Dashboard</HeaderText>
            <Description>Let's look your today's profit!</Description>
        </Header>
        <Content>
            { display_card }
        </Content>
        {/* <StupidCircle /> */}
    </Container>
  );
};

export default Dashboard;
