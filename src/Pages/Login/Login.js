import '../style.css';
import styled from 'styled-components';





const Ma29 = styled.input`
    margin: 29px;
`
const Mt64 = styled.div`
margin-top: 64px;
`
const Detail = styled.div`
font-weight: 300;
`
const Mt34 = styled.div`
margin-top: 34px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`




function Login() {
    return (
            <Container>
            <img src="assets/logo/logo.png" className="logo" />
            <Detail>Make your resturant easier</Detail>   
             <Ma29 type='text' name='Username' />
             <Ma29 type='text' next='Password' />
            <Mt64>
             <button class="button2">Log in!</button>
            </Mt64>
            <Mt34>
            <p>Or no have User ID? Register new one!</p>
            </Mt34>
        </Container>
    );
}

export default Login;