import '../style.css'
import styled from 'styled-components';
import { useState, useEffect } from "react";

const Form = styled.form`
  display:flex;
  flex-direction: column;  
  margin:29px;
  margin-top: auto;
  margin-bottom: 80px;
  margin-left:16px;
  margin-right: 16px;
  gap:16px;
  input{
        width: 80vw;
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
const Div1 = styled.div`
  color: red;
  width: 100%;
`
const Div = styled.div`
width:100%;
`
const ButtonnReg = styled.button`
border-color: #FFFFFF;
margin-right: 16px;
margin-left: 16px;
width:inherit;
z-index: 999;
`
const Div2 = styled.div`
display: grid;
flex-direction: row;
gap: 16px;
width: 100%;
`
const InputReg = styled.input`
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
        if (!values.firstname) {
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
              <Div>Signed in successfully</Div>   
              ) : (
                <pre></pre>
                )}  
                <Head1>Register</Head1> 
                <Detail1>Let's earn money together!</Detail1>  
                <Detail2>Can we know you?</Detail2>     
            <Form onSubmit={handleSubmit}>
                <Register2>   
                    <InputReg type="text" name='firstname' placeholder='Firstname' value={formValues.firstname} onChange={handleChange}></InputReg>
                    <Div1>{formErrors.firstname}</Div1>
                    <InputReg type="text" name="lastname" placeholder='Lastname' value={formValues.lastname} onChange={handleChange}></InputReg>
                    <Div1>{formErrors.lastname}</Div1>             
                </Register2>                
                
                <Register1>
                    <InputReg type="text" name='phonenumber'   placeholder='Phone Number' value={formValues.phonenumber} onChange={handleChange} />
                </Register1>
                
                <Register1>{formErrors.phonenumber}</Register1>
                <Register>
                    <InputReg type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                </Register>
                <Register1>{formErrors.username}</Register1>
                <Register>
                    <InputReg type="password" name='password'  placeholder='Password' value={formValues.password} onChange={handleChange}/>                
                </Register>
                <Register1>{formErrors.password}</Register1>                          
                <ButtonnReg>Register</ButtonnReg>
            </Form>
            <StupidCircletBottom/>           
        </Container>        
    );

}

export default Register;