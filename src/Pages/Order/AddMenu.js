import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// import data
import dummy from '../../dummy/dummy.json';
import MenuCard from './MenuCard.js';
import Payment from './Payment/Payment';
import ConfirmOrder from './ConfirmOrder/ConfirmOrder';
import order_entity from './order_entity';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div`
    a {
        text-decoration: none;
    }
`

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
    padding-bottom: 10%;
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
    bottom: 3%;
    width: 90%;
    height: 2.6em;
    border: none;
    border-radius: 5px;
    background-color: #43A047;
    color: #ffffff;
    padding: 10px;
    text-decoration: none;
`

const Cancel = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 3vh;
    color: #43A047;
    img {
        width: 10px;
        filter: contrast(-100);
    }
`

const PATH = 'http://localhost:5000';
// const PATH = 'https://musepos-api.herokuapp.com';

const AddMenu = () => {
    //stages
    const [paymentPost, setPaymentPost] = useState('');
    const [optionFilter, setOptionFilter] = useState('');
    const [menus, setMenus] = useState([]);

    const data = useParams();
    const navigate = useNavigate();

    // fetching data
    useEffect(() => {
        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

    
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo}`,
            }
        }

        axios.get(
            PATH + `/api/menu/${data.id}`, config
        ).then((res) => {
            // debugger
            // console.log(res.data);

            setMenus(res.data);
        })
        .catch((err) => console.log(err.message));
    },[]);

    //map function
    const menu_display = menus.map((data) => {
        return <MenuCard data={data} onMenuCardClick={()=> menuSelected(data)} />
    });


    let payment_post = null;
    function menuSelected(data) {
        order_entity.orderList.push({
            menuName: data.menuName,
            menuID: data._id,
            orderAmount: 1,
            priceUnit: data.priceUnit
        });
        
        // debugger
        console.log(order_entity);
    };

    function cancelHandler(e){
        e.preventDefault();

        order_entity = {
            orderList: [],
            totalPay: 0,
            peopleAmt: 0,
            typeOfAct: '',
            orderStatus: 'unpaid',
            orderID:'',
        };

        navigate(`/landing/${data.id}`);
    }

    function postOpened(x) {
        setPaymentPost(x);
    };

    switch(paymentPost){
        case 'on':
            payment_post = <Payment onBackClicked={() =>postOpened('off')} />
            break
        case 'off':
            payment_post = null
            break
    };


  return (
    <Container>
        <Header>
        <Cancel>
            <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>
            <span onClick={(e) => cancelHandler(e)}>Cancel</span>
        </Cancel>
            <HeaderText>Add Menu</HeaderText>
            <Description>Which one your customer wants to order?</Description>
        </Header>
        <Content>
            <Section>
                <select onChange={(e)=> setOptionFilter(e.target.value)}>
                    <option>- Choose you category -</option>
                    <option value='drinks'>Beverage/Drink</option>
                    <option value='dessert'>Dessert</option>
                    <option value='food'>Food</option>
                </select>
            </Section>
            <SectionGrid>
                { menu_display }
            </SectionGrid>
            <SectionFloat>
            <Button onClick={()=>postOpened('on')}>Accept</Button>
            { payment_post }
            </SectionFloat>
        </Content>
    </Container>
  );
};

export default AddMenu;
