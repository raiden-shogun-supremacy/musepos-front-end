import '../style.css';
import styled from 'styled-components';

const Container = styled.div`
    margin : 0px;
`

const Container2 = styled.div`
    display: flex;
    justify-content: center;
    margin : 0px 10px 20px 10px;
    padding : 10px;
`

const Head1 = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  margin-top: 0vh;
  color: #FFFFFF;
  margin-top: 5vh;

`
const Detail1 = styled.h6`
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  margin-left: 20px;
  margin-top: -20px;
  color: #FFFFFF;
`
const Text = styled.div`
    text-align: center;
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    position: absolute;
    font-family: Roboto;
    top:50%;
    color: #AAAAAA;
`

const StupidCircletTop = styled.div`
    background-color : #43A047;
    width: 200%;
    height: 100%;
    border-radius : 50%;
    z-index : -999;
    margin-top: -30vh;
    margin-left: -50vw;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
`

const Box = styled.div`
    background-color:#FFFFFF;
    position: fixed;
    width: 90vw;
    height: 80vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: -1vh;

`
const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionCol = styled(Section)`
    display : grid;
    grid-column-gap: 2vw;
    grid-template-columns: 100fr 1fr 1fr;
    margin-left: 20px;
    margin-right: 20px;
`

const Icon = styled.img`
    width: 40px;
    margin-top: 10px;
`

function ShopSelect(){
    return(
        <Container>
          <StupidCircletTop/>
          <Section>
              <SectionCol>
                    <Head1>Shop</Head1>
                    <Icon src='https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/mail-512.png'></Icon>
                    <Icon src='https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/stack-512.png'></Icon>
              </SectionCol>
          </Section>
                <Detail1>Which one is your works today?</Detail1>
                    <Container2>
                        <Box>
                            <Text>You no have your bussiness yet.<br/>Create new one or accept your invite.</Text>         
                        </Box> 
                    </Container2>
        </Container>     
);
}

export default ShopSelect