import '../style.css';
import styled from 'styled-components';
import { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";



const Margin64 = styled.div`
    margin-top: auto;
    margin-right: 16px;
`
const Detail = styled.div`
    top:10px;
    font-weight: 300;
`
const MarginT34 = styled.div`
    margin-top: 34px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const FormStyled = styled.form`
    display:grid;
    flex-direction: column;   
    margin:29px;
    margin-top: 10px;
    margin-left:16px;
    gap:16px;
`
const BackgroundHead = styled.div`
    z-index : -999;
    width:50%;
    height:50%;
    object-fit: cover;
`
const InputLogin = styled.input`
`
const Registerlink = styled.a`
    color: #338e3c ;
`
const Image = styled.div`
    background-image:url("assets/img/cafe.jpg") ;
    height: auto;
    width:inherit;
`



function Login() {

    
    return(
            <Container>
            <Image><BackgroundHead><img src="assets/img/cafe.jpg"/></BackgroundHead></Image>
            <img src="assets/logo/logo.png" className="logo" />
            <Detail>Make your resturant easier</Detail>
                <Form  >
                    <Input type='text' name="username" placeholder='username' /> 
                    <Input type='password' name="Password" placeholder='password' />            
                     <Margin64>
                     <CheckButton type='submit'>Log in!</CheckButton>
                    </Margin64>
                 </Form>
            <MarginT34>
            <p> no have User ID? <Registerlink href="/Register">Register new one!</Registerlink></p>
            </MarginT34>
            </Container>
    );
}
export default Login;