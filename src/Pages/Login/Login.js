import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
    input{
        width: 90vw;
        height: 3.5em;
    }
`

const Button = styled.button`
    border: 20px;
    border-color: #FFFFFF;
    width: 90vw;
    margin-top: 5vh;
`

const Registerlink = styled.a`
    color: #338e3c ;
`

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.prevenDefault();
        try {
            const config = {
                headers : {
                  "Content=type" : "application/json"
                }
            };

            const {data} = 
                axios.post('http://localhost:5000/api/user/login',
                {
                    username,
                    password
                },
                 config
                )
                .then(
                    localStorage.setItem('userInfo', JSON.stringify(data)),
                    navigate('emptyshop')
                )
            }
        catch(err){
            console.log(err.message);
            }
    }

    return(
        <Container>
            <ImgBg src='assets/img/cafe.jpg'></ImgBg>
                <Post>
                    <BgContainer>
                        <ImgLogo src='assets/logo/logo.png'></ImgLogo>
                        <Text>Make your resturant easier</Text>
                        <Form>
                            <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required/>
                        </Form>
                        <Form>
                            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required/>
                        </Form>
                        <Button type="submit" onClick={submitHandler}>Login</Button>
                        <TextReg>Or no have User ID? <Registerlink href="/Register">Register </Registerlink>new one!</TextReg>
                    </BgContainer>
                </Post>
        </Container>
    );
}
export default Login;