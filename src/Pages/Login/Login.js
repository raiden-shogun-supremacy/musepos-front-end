import '../style.css';
import styled from 'styled-components';





const Ma29 = styled.input`
    margin: 29px;
`
const Mt64 = styled.div`
margin-top: 64px;
`
const Detail = styled.param`
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
              <div className="middle">
            <img src="assets/logo/logo.png" className="logo" />
            <p className="light">Make your resturant easier</p>   
            <input className="ma-29" type='text' name='Username' />
            <input className="ma-29" type='text' next='Passward' />
            <div class="mt-64">
            <button class="button2">Log in!</button>
            </div>
            <div className="mt-34">
            <p>Or no have User ID? Register new one!</p>
            </div>
        </div>
    );
}

export default Login;