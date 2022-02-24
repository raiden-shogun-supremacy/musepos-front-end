import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import PaymentList from './PaymentList';
import order_entity from '../order_entity';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
    overflow : scroll;
`

const Header = styled.div``

const HeaderText = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    margin-top: 1.5vh;
    margin-left: 5vw;
    color: #000000;
`

const TitelBar = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width: 100%;
    margin-top: 0px;
    color: #000000;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    width: 10vw;
    margin-top: 0px;
    color: #000000;
`

const Total = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    line-height: 32px;
    width: 10vw;
    margin-top: 0px;
    margin-bottom: 0px;
    color: #000000;
    
`

const Back = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 3vh;
    margin-left: 5vw;
    color: #43A047;
    img {
        width: 10px;
        filter: contrast(-100);
    }
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionGridHead = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 45vw 25vw 0fr;
    margin-left: 5vw;
`

const SectionGridMenu = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 51vw 18.5vw 10fr;
    margin-left: 5vw;
`

const SectionGridTotal = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 50vw 17vw 0fr;
    margin-left: 5vw;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`


const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width: 50vw;
    height: 2.6em;
    border: none;
    border-radius: 5px;
    background-color: #43A047;
    color: #ffffff;
    margin: 4vh 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
`

const Post = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
`
    
const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    cursor: zoom-out;
    overflow : scroll;
`
    
const BgContainer = styled.div`
    background-color: #f6f6f6;
    width: inherit;
    height: initial;
    padding: 10px;
    margin-top: 25%;
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 25%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Border = styled.div`
    width: inherit;
    height: 0;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 10px;
    margin-bottom: 3vh;
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
`

const PATH = 'http://localhost:5000';
// const PATH = 'https://musepos-api.herokuapp.com';

const Payment = ({ onBackClicked }) => {
    const order_summary = order_entity.orderList;

    const navigate = useNavigate();
    const id = useParams();

    console.log(id.id);

    // accumulate total price
    let total = [];
    for (var i = 0; i < order_summary.length; i++) {
        total.push(order_summary[i].priceUnit);
    }

    function total_price(x){
        var sum = 0
        for (var i=0; i< x.length; i++){
            sum += total[i]
        }
        return sum;
    }

    const total_cost = total_price(total);

    // mapping order
    const render_product_cost = order_summary.map((data) => {
        return <PaymentList data={data} />
    });


    const payFinished = (totalPay) => {
        order_entity.totalPay = totalPay;
        order_entity.orderStatus = 'paid';

        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

    
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userInfo}`,
                "Access-Control-Allow-Origin": "*"
            }
        }

        axios.post(
            PATH + '/api/order/create-order', order_entity, config
        );

        // order_entity = {
        //     orderList: [],
        //     totalPay: 0,
        //     peopleAmt: 0,
        //     typeOfAct: '',
        //     orderStatus: 'unpaid',
        //     orderID:'',
        // };

        navigate(`/landing/${id.id}`);
    }

  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back onClick={onBackClicked}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Back</Back>
                        <HeaderText>Order ID: 000013</HeaderText>
                        <Section>
                            <SectionGridHead>
                                <TitelBar>Product Name</TitelBar>
                                <TitelBar>Amount</TitelBar>
                                <TitelBar>Price</TitelBar>
                            </SectionGridHead>
                        </Section>
                        { render_product_cost }
                        <Border></Border>
                        <Section>
                            <SectionGridTotal>
                                <Total>Total</Total>
                                <Total>{ total_cost }</Total>
                                <Total>THB</Total>
                            </SectionGridTotal>
                        </Section>
                        <Button onClick={()=>{payFinished(total_cost)}}>Pay</Button>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default Payment;