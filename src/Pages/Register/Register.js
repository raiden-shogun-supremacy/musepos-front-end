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
`
const Head = styled.div`
margin-top:102px;
display:grid;
flex-direction:column;
margin-left:16px;
`
const RegisterF = styled.h1`
font-size: 5vm;
border-style: none;
margin-bottom: -30px;
font-weight: 700;
margin-left: 16px;

`

const Let = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin-left: 16px;
`
const Can = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin-bottom: 19px;
margin-left: 16px;


`
const Div1 = styled.div`
display:flex;
flex-direction:row;
gap: 20px;
width: 100%;
`
const Div = styled.div``
const ButtonnReg = styled.button`

margin-right: 16px;
width:inherit;
`
const Div2 = styled.div`
display:flex;
flex-direction:column;
gap: 19px;
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
          console.log(formValues);
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
        <Head>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
             <Div>Signed in successfully</Div>   
            ) : (
              <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}       
            <Form onSubmit={handleSubmit}>
                <RegisterF>Register</RegisterF> 
                <Let>Let's earn money together!</Let>  
                <Can>Can we know you?</Can> 
                <Div>
                    <InputReg type="text" name='firstname' placeholder='Firstname' value={formValues.firstname} onChange={handleChange}></InputReg>
                </Div>
                <p>{formErrors.firstname}</p>
                <Div>
                    <InputReg type="text" name="lastname" placeholder='Lastname' value={formValues.lastname} onChange={handleChange}></InputReg>
                </Div>
                <p>{formErrors.lastname}</p>             
                <Div>
                    <InputReg type="text" name='phonenumber'   placeholder='Phone Number' value={formValues.phonenumber} onChange={handleChange} />
                </Div>
                <p>{formErrors.phonenumber}</p>
                <Div>
                    <InputReg type="text" name='username' placeholder='Username' value={formValues.username} onChange={handleChange} />
                </Div>
                <p>{formErrors.username}</p>
                <Div>
                    <InputReg type="password" name='password'  placeholder='Password' value={formValues.password} onChange={handleChange}/>                
                </Div>
                <p>{formErrors.password}</p>                          
                <ButtonnReg>Register</ButtonnReg>
            </Form>           
        </Head>        
    );

}

export default Register;