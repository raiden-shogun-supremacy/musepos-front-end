import '../style.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
    background-color: white;
    display: flex;
    justify-content : space-between;
    filter: drop-shadow(8px -4px 4px rgba(0, 0, 0, 0.25));
`

const MenuBtn = styled.div`
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    text-align: center;
    align-items : center;
`
const Icon = styled.img`
    width: 30px;
    height: 30px;
    margin-top: 16px;
    color: #AAAAAA;
`

const NavBar = ({passingIndex}) => {

    //set useStage
    const [switchIndex, setSwitchIndex] = useState('')
    
    const getPassedIndex = (x) =>{
        setSwitchIndex(x)
    }

    switch (switchIndex) {
        case 'Dashboard':
            passingIndex(switchIndex)
            break;
        case 'Order':
            passingIndex(switchIndex)
            break;
        case 'Stock':
            passingIndex(switchIndex)
            break;
        case 'Others':
            passingIndex(switchIndex)
            break;
    }
    return (
        <div>
        <Navbar>
            <MenuBtn onClick={getPassedIndex}>
                <Icon src='..\assets\img\dashboard.png' />
                <p>dashboard</p>       
            </MenuBtn>
            <MenuBtn>
                <Icon src='..\assets\img\order.png' />
                <p>Order</p>       
            </MenuBtn>
            <MenuBtn>
                <Icon src='..\assets\img\stock.png' />
                <p>Stock</p>       
            </MenuBtn>
            <MenuBtn>
                <Icon src='..\assets\img\other.png' />
                <p>Other</p>       
            </MenuBtn>
        </Navbar>
        </div>
    );
}

export default NavBar;