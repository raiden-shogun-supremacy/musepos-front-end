import '../style.css'
import styled from 'styled-components';
import { useState, useEffect } from "react";
import axios from 'axios';


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

function Register() {
    const initialValues = { firstname:"", lastname:"", phonenumber:"", username: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

  //   function createNewEmployee() {
  //     axios
  //     .post('http://localhost:3000/api/user/register', {
  //         name: name,
  //         username: username,
  //         password: password
  //     })
  //     .then(
  //         alert('Registeration Successful!')
  //     )
  //     // .catch(err => alert(err.message));
  // }
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
      
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          
        }
      }, [formErrors]);
      
      const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.firstname = "First name is required!";
          }
        if (!values.lastname) {
            errors.lastname = "Last name is required!";
          }
        if (!values.phonenumber) {
            errors.phonenumber = "Phone Number is required!";
        }
        if (!values.username) {
            errors.username = "Username is required!";
          }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };

      return (
        <Container>
            <a href="/"><Cancel><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/>  Cancel</Cancel></a>
            <StupidCircletTop/>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <RegisterForm>Signed in successfully</RegisterForm>   
              ) : (
                <pre></pre>
                )}  
                <Head1>Register</Head1> 
                <Detail1>Let's earn money together!</Detail1>  
                <Detail2>Can we know you?</Detail2>     
            <Form onSubmit={handleSubmit}>
                <Register2>   
                    <InputReg type="text" name='name' placeholder='Name' value={formValues.name} onChange={handleChange}></InputReg>
                    <Register1>{formErrors.firstname}</Register1>
                    {/* <InputReg type="text" name="lastname" placeholder='Lastname' value={formValues.lastname} onChange={handleChange}></InputReg>
                    <Register1>{formErrors.lastname}</Register1>              */}
                </Register2>                
                <Register2>
                    <InputReg type="text" name='phonenumber'   placeholder='Phone Number' value={formValues.phonenumber} onChange={handleChange} />
                </Register2>
                <Register1>{formErrors.phonenumber}</Register1>
                <RegisterForm>
                    <InputReg type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                </RegisterForm>
                <Register1>{formErrors.username}</Register1>
                <RegisterForm>
                    <InputReg type="password" name='password'  placeholder='Password' value={formValues.password} onChange={handleChange}/>                
                </RegisterForm>
                <Register1>{formErrors.password}</Register1>                          
                <ButtonnReg>Register</ButtonnReg>
            </Form>
            <StupidCircletBottom/>           
        </Container>        
    );

}

export default Register;