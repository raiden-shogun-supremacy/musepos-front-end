import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import order_entity from './order_entity';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
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
    color: #388E3C;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: -20px;
    margin-left: 5vw;
    color: #4A4A4A;
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

const Description2 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 3vh;
    margin-left: 5vw;
    color: #000000;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        width: 80vw;
        height: 3.5em;
    }
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
    margin-left: 30px;
    color: #000000;
    img {
        width: 11px;
        
    }
`

const Content = styled.div`
    display : flex;
    flex-direction : column;

    a {
        text-decoration: none;
    }
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
    margin: 2vh 20vw;
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

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 0px 5vw;

    select {
        width: 100%;
    }
`

const SectionGrid = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 0vw 1fr;
`

const ToAddMEnu = styled.a`
    text{
        color: #000;
    }
`

// const PATH = 'http://localhost:5000';
const PATH = 'https://musepos-api.herokuapp.com';

const CreateOrder = ({ onBackClick, data }) => {

    const [item, setItem] = useState({
        amtPeople: null,
        typeOfAct: '',
        orderStatus: 'unpaid',
        parentShop: data.id,
    });

    const navigate = useNavigate();

    function handlerSubmit(e){

        e.preventDefault();

        order_entity['amtPeople'] = item.amtPeople;
        order_entity['typeOfAct'] = item.typeOfAct;
        order_entity['orderStatus'] = item.orderStatus;
        order_entity['parentShop'] = item.parentShop;

        console.log(order_entity);
        
        navigate(`/select-menu/${data.id}`);
    }

  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back onClick={onBackClick}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Back</Back>
                        <HeaderText>Create Order</HeaderText>
                        <Description>Please tell us about your customer</Description>
                        <Description2>How many people are they?</Description2>
                        <Form>
                            <input type="number" placeholder='Number of customer' value={item.amtPeople} onChange={e => setItem({...item, amtPeople: e.target.value})}/>
                        </Form>
                        <Description2>Are They?</Description2>
                        <Section>
                            {/* <SectionGrid> */}
                            <select onChange={e => setItem({...item, typeOfAct: e.target.value})}>
                                <option>- Choose Actions-</option>
                                <option value='sit-in'>Sit-in</option>
                                <option value='takeaway'>Takeaway</option>
                            </select>
                            {/* </SectionGrid> */}
                        </Section>
                        <Button onClick={e => handlerSubmit(e)}>New Order</Button>
                        {/* </Form> */}
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default CreateOrder;