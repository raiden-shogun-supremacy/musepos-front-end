import React, { useState } from 'react';
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

const TextUnaccept = styled(Text)`
    margin-top: 8vh;
    color: #43A047;;
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
    background-color: #FFFFFF;
    width: inherit;
    height: initial;
    padding: 10px;
    display: flex;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    flex-direction: column;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionCol = styled(Section)`
    display : grid;
    grid-column-gap: 0vw;
    grid-template-columns: 1fr 1fr;
    margin-top: -5vh;
`

const SectionRow = styled(Section)`
    display : grid;
    grid-template-rows: 1fr;
`

const Button = styled.button`
    border: 20px;
    margin-top: 5vh;
    width: 40vw;
    border-color: #FFFFFF;
`

const InviteBox = ({ onBackClick, data }) => {
    return (
        <Container>
            <BgContainer>
                <Section>
                    <SectionRow>
                        <HeaderText>Plearn</HeaderText>
                        <Text>Cafe</Text>
                        <TextRole>Invite you as : Manager </TextRole>
                    </SectionRow>
                </Section>      
                    <SectionCol>
                        <TextUnaccept>Unaccept</TextUnaccept>
                        <Button>Accept</Button>
                    </SectionCol>
              </BgContainer>
        </Container>
    );
};

export default InviteBox;