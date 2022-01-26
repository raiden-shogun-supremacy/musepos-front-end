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

const P = styled.p`
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
    grid-column-gap: 30vw;
    grid-row-gap: 0vh;
    grid-template-columns: 100fr 0fr;
    margin-left: 5vw;
    margin-right: 5ex;
`

const SectionGrid = styled(Section)`
    display : grid;
    grid-column-gap: 30vw;
    grid-row-gap: 0vh;
    grid-template-columns: 100fr 0fr;
    margin-left: 5vw;
    margin-right: 3vw;
    margin-bottom: 0vw;
    overflow : scroll;
    
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

const ConfirmOrder = ({ onBgClick }) => {
  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Back</Back>
                        <HeaderText>Order ID: 000013</HeaderText>
                        <Section>
                            <SectionGridHead>
                                <TitelBar>Product Name</TitelBar>
                                <TitelBar>Amount</TitelBar>
                            </SectionGridHead>
                        </Section>
                        <Section>
                            <SectionGrid>
                                <P>Americano</P>
                                <P>1</P>
                                <P>Mocca</P>
                                <P>2</P>
                            </SectionGrid>
                        </Section>
                        <Border></Border>
                        <Section>
                            <SectionGrid>
                                <Total>Total Amount</Total>
                                <Total>3</Total>
                            </SectionGrid>
                        </Section>
                        <Button>Confirm</Button>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default ConfirmOrder;