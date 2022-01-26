import '../style.css'
import styled from 'styled-components';


const Form = styled.form`
display:flex;
flex-direction: column;
gap: 19px;   
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
    return (
        <Head>         
            <RegisterF>Register</RegisterF> 
            <Let>Let's earn money together!</Let>  
            <Can>Can we know you?</Can> 
            <Form>
                <Div1>
                    <InputReg type="text"  placeholder='Firstname' ></InputReg>
                    <InputReg type="text"  placeholder='Lastname' ></InputReg>
                </Div1>
                <Div2>
                    <InputReg type="text"  placeholder='Phone Number' />
                    <InputReg type="text"  placeholder='Username' />
                    <InputReg type="text"  placeholder='Password' />                
                </Div2>                               
            </Form>            
            <ButtonnReg>Register</ButtonnReg>
        </Head>        
    );

}

export default Register;