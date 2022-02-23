import React, { useState } from 'react';
import styled from 'styled-components';
import item from './item.json';

const Navbar = styled.div`
    background-color: white;
    display: flex;
    justify-content : space-between;
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.25);
    padding: 10px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    width: 100vw;
`

const MenuBtn = styled.button`
    justify-content: center;
    text-align: center;
    align-items : center;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 50px;
`
const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-top: 20px;
    opacity: 0.3;

`

const Text = styled.p`
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
    const render_menu = item.map((data) => {
        return (
        <MenuBtn onClick={() => getPassedIndex(data.name)}>
            <Icon src={data.img} />
            <Text>{data.name}</Text>       
        </MenuBtn>
        )
    })
    return (
        <div>
            <Navbar>
                { render_menu }
                {/* <MenuBtn onClick={() => getPassedIndex('Dashboard')}>
                    <Icon src='..\assets\img\dashboard.png' />
                    <Text>Dashboard</Text>       
                </MenuBtn>
                <MenuBtn onClick={() => getPassedIndex('Order')}>
                    <Icon src='..\assets\img\order.png' />
                    <Text>Order</Text>       
                </MenuBtn>
                <MenuBtn onClick={() => getPassedIndex('Stock')}>
                    <Icon src='..\assets\img\stock.png' />
                    <Text>Stock</Text>       
                </MenuBtn>
                <MenuBtn onClick={() => getPassedIndex('Others')}>
                    <Icon src='..\assets\img\other.png' />
                    <Text>Other</Text>       
                </MenuBtn> */}
            </Navbar>
        </div>
    );
}

export default NavBar;