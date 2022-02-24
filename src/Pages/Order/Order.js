import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import CreateOrder from './CreateOrder';
import OrderList from './OrderList';

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

// const PATH = 'http://localhost:5000';
const PATH = 'https://musepos-api.herokuapp.com';

const Order = ({ data }) => {

    const [ newOrderPostOpen, setNewOrderPostOpen ] = useState('');
    const [ order, setOrder ] = useState([]);

    function onNewOrderClick(x) {
        setNewOrderPostOpen(x)
    }

    let newOrderPost = null
    switch(newOrderPostOpen) {
        case 'open':
            newOrderPost = <CreateOrder onBackClick={()=> onNewOrderClick('closed')} />
            break;
        case 'closed':
            newOrderPost = null
            break;
    }

    useEffect(() => {
        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

    
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo}`,
            }
        }

        axios.get(
            PATH + `/api/order/${data.id}`, config
        ).then((res) => {
            // debugger
            // console.log(res.data);

            setOrder(res.data);
        })
        .catch((err) => console.log(err.message));
    },[]);

    const order_list = order.map(data => {
        return <OrderList data={data}/>;
    });

    return (
        <Container>
            <Header>
                <HeaderText>Order</HeaderText>
                <Description>Check your resturant's orders.</Description>
            </Header>
            <Content>
                <Button onClick={()=>onNewOrderClick('open')}>Create Order</Button>
                {order_list}
                {newOrderPost}
            </Content>
        </Container>
    );
};

export default Order;