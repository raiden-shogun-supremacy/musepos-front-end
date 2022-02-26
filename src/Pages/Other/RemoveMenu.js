import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// import data
import dummy from '../../dummy/dummy.json';
import RemoveMenuCard from './RemoveMenuCard';

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Header = styled.div``

const HeaderText = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -20px;
    color: #000000;
`

const Content = styled.div`
    display : flex;
    flex-direction : column;
    width: inherit;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    margin : 5px 0px;
    width: 100%;
`

const SectionGrid = styled(Section)`
    display : grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 10%;
`

const SectionFloat = styled(Section)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
`

const Cancel = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 3vh;
    color: #43A047;
    img {
        width: 10px;
        filter: contrast(-100);
    }
`

const StupidCircle = styled.div`
    z-index : -999;
    background-color : #43A047;
    width : 200px;
    height : 200px;
    position : fixed;
    border-radius : 50%;
    top : -120px;
    right : -120px;
`

const PATH = 'http://localhost:5000';
// const PATH = 'https://musepos-api.herokuapp.com';

const RemoveMenu = () => {

    const [getMenu, setGetMenu] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

    
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo}`,
            }
        }

        axios.get(
            PATH + `/api/menu/${id}`, config
        ).then((res) => {
            // debugger
            // console.log(res.data);

            setGetMenu(res.data);
        })
        .catch((err) => console.log(err.message));
    });

    const menu_display = getMenu.map((data) => {
        return <RemoveMenuCard data={data}/>
    });

    

    function cancelHandler(){
        navigate(`/landing/${id}`);
    }
  return (
    <Container>
        <Header>
        <StupidCircle/>
        <Cancel><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/><span onClick={() => cancelHandler()}> Cancel</span></Cancel>
            <HeaderText>Remove Menu</HeaderText>
            <Description>Which one did you want to take out?</Description>
        </Header>
        <Content>
            <Section>
                <select>
                    <option>- Choose you category -</option>
                    <option>Beverage/Drink</option>
                    <option>Dessert</option>
                    <option>Food</option>
                </select>
            </Section>
            <SectionGrid>
                { menu_display }
            </SectionGrid>
            <SectionFloat>
            </SectionFloat>
        </Content>
    </Container>
  );
};

export default RemoveMenu;

