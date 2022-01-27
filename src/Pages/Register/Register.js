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
gap:16px;
`
const Container = styled.div`
margin-top:102px;
display:grid;
flex-direction:column;
margin-left:16px;
`
const Head1 = styled.h1`
font-size: 5vm;
border-style: none;
margin-bottom: -30px;
font-weight: 700;
margin-left: 16px;

`

const Detail1 = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin-left: 16px;
`
const Detail2 = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin-bottom: 19px;
margin-left: 16px;


`
const Div1 = styled.div`
color: red;
width: 100%;
`
const Div = styled.div`
width:100%;
`
const ButtonnReg = styled.button`

margin-right: 16px;
width:inherit;
`
const Div2 = styled.div`
display: grid;
flex-direction: row;
gap: 16px;
width: 100%;
`
const InputReg = styled.input`
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
            {Object.keys(formErrors).length === 0 && isSubmit ? (
             <Div>Signed in successfully</Div>   
            ) : (
              <pre></pre>
            )}       
            <Form onSubmit={handleSubmit}>
                <Head1>Register</Head1> 
                <Detail1>Let's earn money together!</Detail1>  
                <Detail2>Can we know you?</Detail2> 
                
                <Div2>   
                    <InputReg type="text" name='firstname' placeholder='Firstname' value={formValues.firstname} onChange={handleChange}></InputReg>
                    <Div1>{formErrors.firstname}</Div1>
                    <InputReg type="text" name="lastname" placeholder='Lastname' value={formValues.lastname} onChange={handleChange}></InputReg>
                    <Div1>{formErrors.lastname}</Div1>             
                </Div2>                
                
                <Div>
                    <InputReg type="text" name='phonenumber'   placeholder='Phone Number' value={formValues.phonenumber} onChange={handleChange} />
                </Div>
                
                <Div1>{formErrors.phonenumber}</Div1>
                <Div>
                    <InputReg type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                </Div>
                <Div1>{formErrors.username}</Div1>
                <Div>
                    <InputReg type="password" name='password'  placeholder='Password' value={formValues.password} onChange={handleChange}/>                
                </Div>
                <Div1>{formErrors.password}</Div1>                          
                <ButtonnReg>Register</ButtonnReg>
            </Form>           
        </Container>        
    );

}

export default Register;