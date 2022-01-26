import '../style.css';
import styled from 'styled-components';
import { useState } from 'react';



const Margin29 = styled.input`
    margin: 29px;
`
const Margin64 = styled.div`
margin-top: auto;
margin-right: 16px;
`
const Detail = styled.div`
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

const Form = styled.form`
display:grid;
flex-direction: column;   
margin:29px;
margin-top: auto;
margin-left:16px;
gap:0px
`
const BackgroundHead = styled.div`
z-index : -999;
width:100%;
object-fit: cover;
`




function Login() {
    const initialValues = {Username:"",password:""};
    const [formValues, setFormValues] = useState(initialValues);
    return (
            <Container>
            <BackgroundHead><img src="assets/img/cafe.jpg" /></BackgroundHead>       
            <img src="assets/logo/logo.png" className="logo" />
            <Detail>Make your resturant easier</Detail>  
            <Form>
             <Margin29 type='text' name='Username' placeholder='Username' value={ formValues.Username} />
             <Margin29 type='text' next='Password' placeholder='Password' value={ formValues.password} />
            </Form>
            <Margin64>
             <button class="button2">Log in!</button>
            </Margin64>
            <MarginT34>
            <p> no have User ID? Register new one!</p>
            </MarginT34>
            </Container>
            
    );
}

export default Login;