import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin : 0px 10px 20px 10px;
padding : 10px;
`

const Header = styled.div``

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

const Content = styled.div`
display : flex;
flex-direction : column;
`

const ButtonP = styled.button`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 20px;
width: 30vw;
height: 2.6em;
bottom: 20%;
border: none;
border-radius: 5px;
background-color: #43A047;
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
text-decoration: none;
`

const ButtonM = styled.button`
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 20px;
width: 30vw;
height: 2.6em;
bottom: 20%;
border: none;
border-radius: 5px;
background-color: #ffffff;
color: #43A047;
stroke: #43A047;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
text-decoration: none;
`
const Buttons = styled.div`
    display: flex;
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

function StockProductPost({detail}) {
    return(
        <div>
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back><img src="https://cdn.iconfinder.com/stored_data/214946/128/png?token=1642961554-SksP5MQRBIWxepwSUHeN%2B2XeYbp6ovui3LdAgbAlKbw%3D"/>  Back</Back>
                        <Buttons>
                            <ButtonM>-</ButtonM>
                            <ButtonP>+</ButtonP>
                        </Buttons>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>

        </div>
    );
}

export default StockProductPost