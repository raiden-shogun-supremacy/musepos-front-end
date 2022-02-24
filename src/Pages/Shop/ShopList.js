import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const HeaderText = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    margin-top: 1vh;
    margin-left: 2vw;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -15px;
    margin-left: 2vw;
    font-weight: 300;
    color: #000000;
`

const TextRole = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -5px;
    margin-left: 2vw;
    font-weight: 400;
    color: #000000;
`

const BgContainer = styled.div`
    flex-direction: column;
    background-color: #FFFFFF;
    width: inherit;
    height: initial;
    padding: 10px;
    display: flex;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    border: 2px solid #F3F3F3;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: scroll;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionRow = styled(Section)`
    display : grid;
    grid-template-rows: 1fr;
`

const ShopList = ({ onBackClick, data }) => {

    const navigate = useNavigate();
    
    return (
        <Container onClick={() => navigate(`/landing/${data._id}`)}>
            <BgContainer>
                <Section>
                    <SectionRow>
                        <HeaderText>{data.shopName}</HeaderText>
                        {/* <Text>{data}</Text> */}
                        <TextRole>As : Employee</TextRole>
                    </SectionRow>
                </Section>      
              </BgContainer>
        </Container>
    );
};

export default ShopList;