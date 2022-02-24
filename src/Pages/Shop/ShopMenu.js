import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-left: 2vw;
    font-weight: 400;
    color: #000000;
`

const TextRed = styled(Text)`
    color: #C62828;
`

const BgContainer = styled.div`
    background-color: #FFFFFF;
    width: inherit;
    height: initial;
    padding: 5px;
    display: flex;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    flex-direction: column;
    margin-left: 60vw;
    margin-top: 8vh;
    margin-right: 20px;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionRow = styled(Section)`
    display : grid;
    grid-template-rows: 1fr;

    a {
        text-decoration: none;
    }
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


const ShopMenu = ({ onBgClick }) => {

    const navigate = useNavigate();

    function logoutHandler(e){
        e.preventDefault();

        localStorage.removeItem('museUser');
        navigate('/');
    }


    useEffect(() => {
        if(!localStorage.getItem('museUser')){
            navigate('/');
        }
    },[]);

    return (
        <Container>
            <Post >
                <Background onClick={onBgClick}>
                    <BgContainer>
                        <Section>
                            <SectionRow>
                                <a href='/create-shop' ><Text>Create New Shop</Text></a>
                                <TextRed onClick={e => logoutHandler(e) }>Log out</TextRed>
                            </SectionRow>
                        </Section>
                    </BgContainer>
                </Background>
            </Post>
            
        </Container>
    );
};

export default ShopMenu;