import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ShopMenu from './ShopMenu';
import ShopList from './ShopList';

import '../style.css';
import axios from 'axios';

const Container = styled.div`
    margin : 0px;
`

const Container2 = styled.div`
    display: flex;
    justify-content: center;
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Head1 = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    margin-top: 0vh;
    color: #FFFFFF;
    margin-top: 5vh;

`
const Detail1 = styled.h6`
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-top: -20px;
    color: #FFFFFF;
`
const Text = styled.div`
    text-align: center;
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    position: absolute;
    font-family: Roboto;
    top:50%;
    color: #AAAAAA;
`

const StupidCircletTop = styled.div`
    background-color : #43A047;
    width: 200%;
    height: 100%;
    border-radius : 50%;
    z-index : -999;
    margin-top: -30vh;
    margin-left: -50vw;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    background-color:#FFFFFF;
    position: fixed;
    width: 90vw;
    height: 80vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: -1vh;

`
const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionCol = styled(Section)`
    display : grid;
    grid-column-gap: 2vw;
    grid-template-columns: 100fr 1fr 1fr;
    margin-left: 20px;
    margin-right: 20px;
`

const Icon = styled.img`
    width: 30px;
    margin-top: 10px;
    filter: invert(1);
`

// const PATH = 'http://localhost:5000';
const PATH = 'https://musepos-api.herokuapp.com';

function ShopSelect(){

    const [shopList, setShopList] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    let dropdown_show = null;
    if( dropdown == true ) {
        dropdown_show = <ShopMenu onBgClick={bgClick} />
    }

    function stackClicked() {
        setDropdown(true)
    }
    function bgClick(){
        dropdown_show = null;
        setDropdown(false);
    }

    
    
    
    useEffect(() => {
        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

    
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo}`,
            }
        }

        axios.get(
            PATH + '/api/shop/', config
        ).then((res) => {
            // debugger
            // console.log(res.data);

            setShopList(res.data);
        })
        .catch((err) => console.log(err.message));
    },[]);

    const shop_list = shopList.map(data => {
        return <ShopList data={data}/>
    });


    return(
        <Container>
            <StupidCircletTop/>
            <Section>
                <SectionCol>
                    <Head1>Shop</Head1>
                    <a href='/inbox'><Icon src='https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-58-512.png' /></a>
                    <Icon src='https://cdn2.iconfinder.com/data/icons/user-interface-essential-solid/32/Artboard_6-512.png?fbclid=IwAR1FSODimUM23ji-nCg9v1uh1wi0Rr_b4TDeqzl9CsUyus1RTO4is2mdD5k' onClick={stackClicked} />
                    {dropdown_show}
                </SectionCol>
            </Section>
            <Detail1>Which one is your works today?</Detail1>
            <Container2>
                <Box>
                {shop_list != [] ? shop_list : <Text>You doesn't have your own business yet.<br/>Create the new one!</Text>}
                </Box>
            </Container2>
        </Container>     
    );
}

export default ShopSelect