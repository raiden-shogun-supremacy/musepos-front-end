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
    font-size: 34px;
    line-height: 40px;
    margin-top: 2vh;
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

const Description3 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 4vh;
    margin-left: 5vw;
    color: #000000;
`

const Sit = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 0vh;
    margin-left: 12vw;
    color: #000000;
    img {
        width: 11px;
        
    }
`

const Take = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 0vh;
    margin-left: 12vw;
    color: #000000;
    img {
        width: 11px;
        
    }
`

const Content = styled.div`
    display : flex;
    flex-direction : column;
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
`
    
const BgContainer = styled.div`
    background-color: #f6f6f6;
    width: inherit;
    height: 55vh;
    padding: 10px;
    margin-top: 21vh;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 15px;
`

const Order = () => {
  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back><img src="https://cdn.iconfinder.com/stored_data/214946/128/png?token=1642961554-SksP5MQRBIWxepwSUHeN%2B2XeYbp6ovui3LdAgbAlKbw%3D"/>  Back</Back>
                        <HeaderText>Before New Order</HeaderText>
                        <Description>Please tell us about your customer</Description>
                        <Description2>How many people are they?</Description2>
                        <Form>
                            <input type="text"  placeholder='They are                                                    People' />
                        </Form>
                        <Description3>Are They?</Description3>
                        <Sit><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png"/> Sit in</Sit>
                        <Take><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png"/> Take away</Take>
                        <Button>New Order</Button>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default Order;