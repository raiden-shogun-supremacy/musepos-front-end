import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border-radius : 15px;
    background-image : linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(247, 25, 136, 0) 47%),url(${ props => props.bgImg });
    background-size: cover;
    background-position: center;
    background-repeat : none;
    width: auto;
    height: 200px;
    margin: 5px;
    padding: 5px;
    position: relative;
`

const Overlay = styled.div`
  p {
    color : white;
    position: absolute;
    bottom: 0px;
    left: 10px;
  }
`

const RemoveMenuCard = ({ onStockProductClick, data }) => {
  return (
      <Card bgImg={data.img} onClick={() => onStockProductClick(data)}>
        <Overlay>
          <p>{data.Name}</p>
        </Overlay>
      </Card>
  );
};

export default RemoveMenuCard;
