import React, { useState } from 'react';
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
    color: #388E3C;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    input{
        width: 50vw;
        height: 3.5em;
    }
`

const FormImg = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    input{
        width: 50vw;
    }
`

const Select = styled.select`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    input{
        width: 50vw;
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
    margin-left: 20px;
    color: #000000;
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
    margin : 0px 5vw;
    margin-bottom: 1vh;
`

const SectionGrid = styled(Section)`
    display : grid;
    grid-row-gap: 1vh;
    grid-template-columns: 10fr 1fr;
`


const AddStock = ({ onBackClick, data }) => {
  return (
    <Container>
        <Post>
            <Background>
                <BgContainer>
                    <Content>
                        <Back onClick={onBackClick}><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Cancel</Back>
                        <HeaderText>Add new menu!</HeaderText>
                        <FormImg><Description for="image">What's your menu look like?</Description><input type="file" id="image" name="image" /></FormImg>
                        <Section>
                            <SectionGrid>
                                <Text>Name</Text>
                                <Form><input type="text" placeholder='Menu Name' /></Form>
                                <Text>Category</Text>
                                <Select>
                                    <option>-Catagory-</option>
                                    <option>Beverage/Drink</option>
                                    <option>Dessert</option>
                                    <option>Food</option>
                                </Select>
                            </SectionGrid>
                        </Section>
                        <Section>
                            <Button>Add new!</Button>
                        </Section>
                    </Content>
                </BgContainer>
            </Background>
        </Post>
    </Container>
  );
};

export default AddStock;