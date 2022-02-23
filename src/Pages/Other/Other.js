import React, { useState } from 'react';
import styled from 'styled-components';
import Invite from './Invite';
import ChangeRole from './ChangeRole.js';
import dummyEmp from '../../dummy/dummyEmp.json' ;

const Container = styled.div`
    margin : 0px 10px 20px 10px;
    padding : 10px;
    overflow : scroll;
`

const Header = styled.div``

const HeaderText = styled.h1`
   font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    line-height: 49px;
    color : #388E3C;
`

const Description = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    margin-top : -20px;
    color: #000000;
`

const Setting = styled.h3`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #AAAAAA;
    margin-top: 6vh;

`

const TextHead = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #111111;
`

const Text = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #111111;
`

const TextRoleOwner = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #FF5252;
`

const TextRoleMg = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #38E83C;
`

const TextRoleSeller = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #43A047;
`

const BgContainerTop = styled.div`
    background-color: #F3F3F3;
    width: inherit;
    height: 4vh;
    padding: 10px;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BgContainerBottom = styled.div`
    background-color: #F3F3F3;
    width: inherit;
    height: 4vh;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Border = styled.div`
    width: inherit;
    height: inherit;
    padding: 10px;
    background: #FFFFFF;
    border: 2px solid #F3F3F3;
    box-sizing: border-box;
`

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionGridHead = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 100fr 1fr 2fr;
    margin-left: 5vw;
    margin-right: 5vW;
`

const SectionGridEmp = styled(SectionGridHead)`
`

const SectionInvite = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const ButtonRemove = styled.button`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width: 100%;
    height: 2.6em;
    border: none;
    border-radius: 5px;
    background-color: #f3f3f3;
    color: #C62828;
    margin-left: 0%;
    margin-top: 3vh;
`

const ButtonLogout = styled.button`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width: 100%;
    height: 2.6em;
    border: 1px solid #FF5252;
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #FF5252;
    margin-left: 0%;
    margin-top: 5vh;
    margin-bottom: 10vh;
`

const StupidCircletTop = styled.div`
    z-index : -999;
    background-color : #43A047;
    width : 200px;
    height : 200px;
    position : fixed;
    border-radius : 50%;
    top : -120px;
    right : -120px;
`

const Img = styled.img`
    width: 15px;
    opacity: 0.3;
`

const Other = () => {
    const [invitePostOpen, setInvitePostOpen] = useState('');
    const [changeRoleOpen, setChangeRoleOpen] = useState('');

    let invitePost = null;
    let changeRole = null;
    function inviteClickedOpen(){
        setInvitePostOpen('on')
    }
    function inviteClickedClose(){
        setInvitePostOpen('off')
    }
    function changeRoleClickedOpen(){
        setChangeRoleOpen('on')
    }
    function changeRoleClickedClose(){
        setChangeRoleOpen('off')
    }
    switch(invitePostOpen){
        case 'on':
            invitePost = <Invite onBackClick={inviteClickedClose} />
            break
        case 'off':
            invitePost = null;
            break
    }
    switch(changeRoleOpen){
        case 'on':
            changeRole = <ChangeRole onBClick={changeRoleClickedClose} />
            break
        case 'off':
            changeRole = null;
            break
    }
    const emp_list = dummyEmp.map((data)=>{
        return(
            <>
                <Text>{data.name}</Text>
                <TextRoleSeller>{data.role}</TextRoleSeller>
                <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" onClick={() =>changeRoleClickedOpen} />
            </>
        )
        });
return (
    <Container>
        <Header>
            <StupidCircletTop></StupidCircletTop>
            <HeaderText>Others</HeaderText>
            <Description>What to need today?</Description>
        </Header>
        {invitePost}
        {changeRole}
            <Setting>Settings</Setting>
                <BgContainerTop>
                    <SectionGridHead>
                        <TextHead>Employees</TextHead>
                        <TextHead>Role</TextHead>
                    </SectionGridHead>
                </BgContainerTop>
                <Border>
                    <SectionGridEmp>
                        { emp_list }
                        {/* <Text>Steve Rogres</Text>
                        <TextRoleOwner>Owner</TextRoleOwner>
                        <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" />
                        <Text>Bruce Banner</Text>
                        <TextRoleMg>Manager</TextRoleMg>
                        <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" />
                        <Text>Thor Odinson</Text>
                        <TextRoleSeller>Seller</TextRoleSeller>
                        <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" />
                        <Text>Clint Barton</Text>
                        <TextRoleSeller>Seller</TextRoleSeller>
                        <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" />
                        <Text>Natasha Romanoff</Text>
                        <TextRoleSeller>Seller</TextRoleSeller>
                        <Img src="https://cdn-icons-png.flaticon.com/512/2089/2089793.png" /> */}
                    </SectionGridEmp>
                </Border>
                <BgContainerBottom>
                    <SectionInvite onClick={inviteClickedOpen}>
                        <Text>+ Invite Employee</Text>
                    </SectionInvite>
                </BgContainerBottom>
                <a href='/removemenu'><ButtonRemove>Remove Menu</ButtonRemove></a>
            <a href='/'><ButtonLogout>Log Out</ButtonLogout></a>
    </Container>
  );
};

export default Other;