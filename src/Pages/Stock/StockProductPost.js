import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div``

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : 0px;
    color: #000000;
`

const NameMenu = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-top : 0px;
    color: #388E3C;
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
const PopImg = styled.img`
    border-radius : 15px;
    background-size: cover;
    background-position: center;
    background-repeat : none;
    width: 30vw;
    height: auto;
    position: relative;
    
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 0px 5vw;
`

const SectionCol = styled(Section)`
    display : grid;
    grid-column-gap: 5vw;
    grid-template-columns: 30vw 30vw;
`

const SectionColDes = styled(Section)`
    display : grid;
    grid-column-gap: 1vw;
    margin-left: 0px;
    grid-template-columns: 1fr 1fr;
`

const SectionRow = styled(Section)`
    display : grid;
    grid-template-rows: 1fr;
`

function StockProductPost({ detail, onBackClick }) {

    const [count, setCount] = useState(detail.Amt)

    function decrementCount() {
        setCount(prevCount => prevCount-1)
    }
    function incrementCount() {
        setCount(prevCount => prevCount+1)
    }

    return(
        <div>
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back onClick={()=> onBackClick(detail)}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" />  Back</Back>
                        <Section>
                            <SectionCol>
                                <PopImg src={detail.img} />
                                <SectionRow>
                                        <NameMenu>{detail.Name}</NameMenu>
                                    <SectionColDes>
                                        <Description>ID:</Description>
                                        <Description>{detail.PodID}</Description>
                                        <Description>Price:</Description>
                                        <Description>{detail.Price} THB</Description>
                                    </SectionColDes>
                                </SectionRow>
                            </SectionCol>
                        </Section>
                        <Section>
                            <p>In stock amount: {count}</p>
                        </Section>
                        <Section>
                            <SectionCol>
                                <ButtonM onClick={decrementCount}>-</ButtonM>
                                <ButtonP onClick={incrementCount}>+</ButtonP>
                            </SectionCol>
                        </Section>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>

        </div>
    );
}

export default StockProductPost