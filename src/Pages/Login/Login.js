import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    margin : 0px;
    padding: 0%;
    
`

const Post = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    overflow: scroll;
`

const BgContainer = styled.div`
    background: #FFFFFF;
    width: 100vw;
    height: 100%;
    margin-top: 25vh;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

    .input-form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2vh;
        input{
            width: 90vw;
            height: 3.5em;
            margin: 5px;
        }
    }

    .submit-button{
        border: 20px;
        border-color: #FFFFFF;
        width: 90vw;
        margin-top: 5vh;
    }
    
`

const ImgBg = styled.img`
    position: fixed;
    width: 100%;
`

const ImgLogo = styled.img`
    margin-top: 5vh;
    width: 40%;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: -2vh;
    margin-bottom: 5vh;
    color: #000000;
`

const TextReg = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    margin-bottom: 5vh;
`

const Registerlink = styled.a`
    color: #338e3c ;
`
const RegisterError = styled.p`
    font-family: Roboto;
    color: #C62828;
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
    margin-top: 0vh;
`

// const PATH = 'http://localhost:5000';
const PATH = 'https://musepos-api.herokuapp.com';

function Login() {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isRequried, setIsRequried] = useState(null);
    let usernameRequired = null;
    let passwordRequired = null;
    switch(isRequried){
        case 'error':
          usernameRequired = <RegisterError>Please fill username</RegisterError>
          passwordRequired = <RegisterError>Please fill password</RegisterError> 
          break
      }

    const navigate = useNavigate();

    function submitHandler(e){
        if( username == null || password == null){
            setIsRequried('error')
          }
          else{
            e.preventDefault();

            const config = {
                header : {
                    // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                    "Content-Type": "application/json"
                }
            };
    
            axios.post(
                PATH + '/api/user/login', {
                    "username" : username,
                    "password" : password
                }, config
            ).then((res) => {
    
                // debugger
                // console.log(res.data);
    
                if(res.data.token){
                    localStorage.setItem('museUser', JSON.stringify(res.data.token));
                }
    
                navigate('/shop');
            }
            ).catch(err => {
                console.log(err.message);
            });
          }
        
    }

    useEffect(() => {
        const isThereLocalStorage = localStorage.getItem('museUser');

        if(isThereLocalStorage){
            navigate('/shop');
        }
    },[]);

    return(
        <Container>
            <ImgBg src='assets/img/cafe.jpg'></ImgBg>
                <Post>
                    <BgContainer>
                        <ImgLogo src='assets/logo/logo.png'></ImgLogo>
                        <Text>Make your resturant easier</Text>
                        <form className="input-form">
                            <input type="text" placeholder='Username' value={username} onChange={event => setUsername(event.target.value)} />
                            {usernameRequired}
                            <input type="password" placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
                            {passwordRequired}
                        </form>
                        <button className="submit-button" onClick={ e => submitHandler(e) }>Login</button>
                        <TextReg>Or no have User ID? <Registerlink href="/register">Register </Registerlink>new one!</TextReg>
                    </BgContainer>
                </Post>
        </Container>
    );
}
export default Login;