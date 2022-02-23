import '../style.css';
import styled from 'styled-components';
import { useState } from 'react';
import ShopMenu from './ShopMenu.js'

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
    const [dropdown, setDropdown] = useState(false)
    let dropdown_show = null;
    if( dropdown == true ){
        dropdown_show = <ShopMenu onBgClick={bgClick} />
    }

    function stackClicked() {
        setDropdown(true)
    }
    function bgClick(){
        dropdown_show = null;
        setDropdown(false);
    }

    return(
        <Container>
          <StupidCircletTop/>
          <Section>
              <SectionCol>
                    <Head1>Shop</Head1>
                    <a href='/inbox'><Icon src='https://cdn-icons.flaticon.com/png/512/2099/premium/2099199.png?token=exp=1645629346~hmac=898e517acd8c68cf7b40c4a39d5d615f' /></a>
                    <Icon src='https://cdn-icons-png.flaticon.com/512/2089/2089793.png' onClick={stackClicked} />
                    {dropdown_show}
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