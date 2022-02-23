import '../style.css'
import styled from 'styled-components';
import { useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Form = styled.form`
  display:flex;
  flex-direction: column;  
  margin-top: auto;
  margin-bottom: 80px;
  gap:16px;
  input{
        width: 80vw;
        margin-left: 16px;
        margin-right: 16px;
        height: 3.5em;
    }
`
const Container = styled.div`
  margin-top:5vh;
  display:grid;
  flex-direction:column;
  margin-left:16px;
  margin-right: 16px;
`
const Head1 = styled.h1`
  margin-left: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  margin-top: 0vh;
`

const Detail1 = styled.h6`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-left: 16px;
  margin-top: -20px;
`
const Detail2 = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-bottom: 19px;
  margin-left: 16px;
`
const Cancel = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top: 0px;
    margin-left: 16px;
    color: #43A047;
    img {
        width: 10px;
        filter: contrast(-100);
    }
`
const RegisterForm = styled.div`
width:100%;
`
const ButtonnReg = styled.button`
border: 20px;
border-color: #FFFFFF;
margin-right: 16px;
margin-left: 16px;
width:inherit;
`

const Register2 = styled.div`
display: grid;
flex-direction: row;
gap: 16px;
width: 100%;
`
const InputReg = styled.input`
`

const Register1 = styled.div`
  color: red;
  width: 100%;
  margin-left: 16px;
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

const Register = (props) => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function createNewEmployee() {
      axios
      .post('https://musepos-api.herokuapp.com/api/user/register', {
          name: name,
          username: username,
          password: password
      })
      .then()      
       .catch(err => alert(err.message));
       await alert('Registeration Successful!')      
       await navigate('/',{ replace: true })
      }
  

      return (
        <Container>
            <a href="/"><Cancel><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Cancel</Cancel></a>
            <StupidCircletTop/>
                <Head1>Register</Head1> 
                <Detail1>Let's earn money together!</Detail1>  
                <Detail2>Can we know you?</Detail2>     
            <Form >
                <Register2>   
                    <InputReg type="text" name='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required></InputReg>
                </Register2>                
                <RegisterForm>
                    <InputReg type="text" name='username' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} required/>
                </RegisterForm>
                <RegisterForm>
                    <InputReg type="password" name='password'  placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required/>                
                </RegisterForm>
                <a href='/' onClick={createNewEmployee}><ButtonnReg>Register</ButtonnReg></a>
            </Form>
            <StupidCircletBottom/>           
        </Container>        
    );

}

export default Register;