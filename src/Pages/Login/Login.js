import '../style.css';
import styled from 'styled-components';

const Margin29 = styled.input`
    margin: 29px;
`
const Margin64 = styled.div`
    margin-top: auto;
    margin-right: 16px;
`
const Detail = styled.div`
<<<<<<< HEAD
font-weight: 300;
=======
    top:10px;
    font-weight: 300;
>>>>>>> 9c462752b3df68a1de0a1626c5a532becad8e532
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
    margin-top: 10px;
    margin-left:16px;
    gap:16px;
`
const BackgroundHead = styled.div`
    z-index : -999;
    width:100%;
    object-fit: cover;
`
const InputLogin = styled.input`

`

const Registerlink = styled.a`
    color: #338e3c ;
`


function Login() {
    
    return(
            <Container>
            <BackgroundHead><img src="assets/img/cafe.jpg" /></BackgroundHead>       
            <img src="assets/logo/logo.png" className="logo" />
            <Detail>Make your resturant easier</Detail>
            <Form>
             <InputLogin type='text' name="username" placeholder='username' /> 
             <InputLogin type='password' name="Password" placeholder='password' />            
            </Form>
            <Margin64>
             <button class="button2">Log in!</button>
            </Margin64>
            <MarginT34>
            <p> no have User ID? <Registerlink href="/Register">Register new one!</Registerlink></p>
            </MarginT34>
            </Container>
    );
}

export default Login;