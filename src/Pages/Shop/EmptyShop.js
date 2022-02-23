import '../style.css';
import styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { IoMail } from "react-icons/io5";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
margin-left: 4%;
display: flexbox;
`
const Container = styled.div`
  margin-top:5vh;
  display:grid;
  flex-direction:column;
  margin-left:16px;
  margin-right: 16px;
`
const Head1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 250%;
  line-height: 49px;
  margin-top: 1vh;
  color: #FFFFFF;

`
const Detail1 = styled.h6`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  font-weight: 300;
  margin-top: -2vh;
  color: #FFFFFF;
`
const EmpShop = styled.div`
text-align: center;
display: grid;
flex-direction: row;
gap: 50px;
width: 100%;
margin-top: 50px;
margin-bottom: 50px;
position: absolute;
font-family: Roboto;
top:50%;
color: #AAAAAA;
`

const StupidCircletTop = styled.div`
    background-color : #43A047;
    width: 100%;
    height: 70%;
    position:absolute;
    z-index : -999;
    left: 0;
    top:0;
`

const EmptyText = styled.div`
background-color:#FFFFFF;
position: absolute;
width: 90%;
height: 75%;
size: 50px;
top:150px;
left:5%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`

const Menutop = styled.div`
display: flex;
font-size: 4vh;
gap: 30px;
margin-top: 15px;
margin-left: 45%;
margin-right: 20px;
`

const TextHead = styled.div`
`

function EmptyShop(){
  const navigate = useNavigate();

  useEffect(() => {
    const isThereLocalStorage = localStorage.getItem('userInfo');

    if(isThereLocalStorage){
        navigate('/shopselect');
    }
}, [])

    return(
        <Container>
          <StupidCircletTop/>
            <Header>
            <TextHead>
            <Head1>Shop</Head1>
            <Detail1>Which one is your works today?</Detail1>      
            </TextHead>
            <Menutop>
            <a href="/Inbox"><IoMail/></a>            
            <a href="/shopselect"><CgMenu/></a>            
            </Menutop>      
            </Header>
            <EmptyText>
              <EmpShop>You no have your bussiness yet.<br/>Create new one or accept your invite.</EmpShop>         
            </EmptyText> 
        </Container>     
);
}

export default EmptyShop;