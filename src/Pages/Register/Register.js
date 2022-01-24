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
justify-content: center;
margin-left:16px
`
const Regis = styled.h1`
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
`

const Butt = styled.button`
margin-left:16px;
`
const Div2 = styled.div`
display:flex;
flex-direction:column;
gap: 19px;
width: 100%;
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
                </Div1>
                <Div1>
                    <input type="text"  placeholder='Lastname' />
                </Div1>
                <Div2>
                    <input type="text"  placeholder='Phone Number' />
                    <input type="text"  placeholder='Username' />
                    <input type="text"  placeholder='Password' />                
                </Div2>                                
            </Form>            
            <Butt>Register</Butt>
        </Head>        
    );

}

export default Register;