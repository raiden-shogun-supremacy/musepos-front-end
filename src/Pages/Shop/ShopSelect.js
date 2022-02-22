import '../style.css';
import styled from 'styled-components';


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
  color: #FFFFFF;
  top:2%;

`
const Detail1 = styled.h6`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin-left: 16px;
  margin-top: -20px;
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
width: 80%;
height: 70%;
size: 50px;
top:150px;
left:10%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;

`

function Shopselect(){
    return(
        <Container>
          <StupidCircletTop/>
            <Head1>Shop</Head1>
            <Detail1>Which one is your works today?</Detail1>
            <EmptyText>
              <EmpShop>You no have your bussiness yet.<br/>Create new one or accept your invite.</EmpShop>         
            </EmptyText> 
        </Container>     
);
}

export default Shopselect