import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin : 0px 10px 20px 10px;
    padding : 10px;
    a {
        text-decoration: none;
    }
`

const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin : 0px 10px 20px 10px;
    padding : 10px;

    .start-btn {
        border-color: #FFFFFF;
        width: 85vw;
        margin-top: 5vh;
    }
`

const Head1 = styled.h1`
  margin-left: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  margin-top: 3vh;
`

const Detail1 = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  margin-top: -2vh;
`
const Detail2 = styled.h6`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  font-weight: 400;
  margin-bottom: 12vh;
  margin-top: 10vh;
`
const Cancel = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 3vh;
    margin-left: 16px;
    color: #43A047;
    img {
        width: 10px;
        filter: contrast(-100);
    }
`

const StupidCircletTop = styled.div`
    z-index : -999;
    background-color : #43A047;
    width : 300px;
    height : 300px;
    position : fixed;
    border-radius : 50%;
    top : -120px;
    right : -120px;
`

const StupidCircletBottom = styled.div`
    z-index : -999;
    background-color : #43A047;
    width : 200px;
    height : 200px;
    position : fixed;
    border-radius : 50%;
    bottom: -120px;
    left: -120px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
    margin-left: 20px;
    margin-right: 20px;
    input{
        width: 85vw;
        height: 3.5em;
    }
`

// const PATH = 'http://localhost:5000';
const PATH = 'https://musepos-api.herokuapp.com';

function NewShop(){

    const [shopName, setShopName] = useState('');

    const navigate = useNavigate();

    function submitHandler(e){
        e.preventDefault();

        const userInfo = localStorage.getItem('museUser')
            ? JSON.parse(localStorage.getItem('museUser')) : null;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userInfo}`
            }
        }

        axios.post(
            PATH + '/api/shop/create-shop',
            {
                "shopName": shopName
            }
            , config
        )

        navigate('/shop');
    }

    return(
        <Container>
        <a href="/"><Cancel><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Cancel</Cancel></a>
        <StupidCircletTop/>
            <Head1>New Shop</Head1> 
            <Detail1>Welcome new owner.</Detail1>  
            <Detail2>Let's tell us something about your new business.</Detail2>
            <Form>
                <input type="text" placeholder='Shop name' value={shopName} onChange={e => setShopName(e.target.value)}/>
            </Form>
            {/* <Form><input type="text" placeholder='Type' /></Form> */}
            <Container2>
              <button className='start-btn' onClick={e => submitHandler(e)}>Start!</button>
            </Container2>
            
        <StupidCircletBottom/>           
    </Container>     
  );
}

export default NewShop;