import '../style.css'
import styled from 'styled-components';


const Form = styled.form`
display:flex;
flex-direction: column;
gap: 19px;   
margin-top: auto;
margin-bottom: 80px;
justify-content: center;
max-width:auto ;
`
const Head = styled.div`
margin-top:102px;
display:grid;
flex-direction:column;
margin-left:16px
`
const Regis = styled.h1`
font-size: 42px;
border-style: none;
margin-bottom: -30px;
font-weight: 700;
`

const Let = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
`
const Can = styled.h6`
font-size: 14px;
line-height: 16px;
font-weight: 500;
margin-bottom: 19px;

@media (max-width: 768px) {
    width:100;
  }

`
const Div1 = styled.div`
display:flex;
flex-direction:row;
gap: 20px;

@media (max-width: 960px) {
    flex-direction:column;
  }
`




function Register() {
    return (
        <Head>
                
                <Regis>Register</Regis> 
                <Let>Let's earn money together!</Let>  
                <Can>Can we know you?</Can> 
            <Form>
                <Div1>
                <input type="text"  placeholder='Firstname' />
                <input type="text"  placeholder='Lastname' />
                </Div1>                
                <input type="text"  placeholder='Phone Number' />
                <input type="text"  placeholder='Username' />
                <input type="text"  placeholder='Password' />   
            </Form>
            <button>Register</button>     
        </Head>        
    );

}

export default Register;