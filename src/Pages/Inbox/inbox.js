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
    color: #388E3C;
`

const Detail1 = styled.h6`
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    margin-left: 16px;
    margin-top: -20px;
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

const EmptyText = styled.div`
    background-color:#FFFFFF;
    position: absolute;
    width: 90%;
    height: 75%;
    size: 50px;
    top:150px;
    left:5%;
    `

const EmpInvite = styled.div`
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

const A = styled.a`
    text-decoration: none;
`

function  Inbox(){
    return(
        <Container>
        <A href="/shop"><Cancel><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png"/> Back</Cancel></A>
        <Head1>Inbox</Head1> 
        <Detail1>Have you got some invite today?</Detail1>
        <EmptyText>
        <EmpInvite>Seem you don't have any invite today ...</EmpInvite>         
        </EmptyText> 
  
    </Container>     
);
}

export default Inbox;