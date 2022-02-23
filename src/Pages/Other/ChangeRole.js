import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div``

const TextName = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    margin-top: 1.5vh;
    margin-left: 5vw;
`

const TextRole = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: -20px;
    margin-left: 5vw;
    color: #43A047;
    margin-bottom: 5vh;
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

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-left: 5vw;
`

const TextRed = styled(Text)`
    color: #FF5252;
    margin-left: 0px;
`

const Select = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 5vw;
    margin-right: 5vw;
    input{
        width: 50vw;
        height: 3.5em;
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
    margin: 2vh 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-decoration: none;
    margin-top: 7vh;

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
    margin-top: 50%;
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
`
const SectionCol = styled(Section)`
    display : grid;
    grid-template-columns: 0fr 100fr;
`

const ChangeRole = ({ onBClick, data }) => {
  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back onClick={onBClick}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Cancel</Back>
                        <TextName>Natasha Romanoff</TextName>
                        <TextRole>Employee</TextRole>
                        <Text>Change To..</Text>
                        <Select>
                            <option>Role</option>
                            <option>Owner</option>
                            <option>Manager</option>
                            <option>Employee</option>
                        </Select>
                       <Button>Save</Button>
                       <Section>
                           <SectionCol>
                            <Text>Or..</Text>
                            <TextRed>Fired this Employee</TextRed>
                           </SectionCol>
                       </Section>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default ChangeRole;