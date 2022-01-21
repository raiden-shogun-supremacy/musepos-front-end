import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border-radius : 5px;
    background-image : url(${ props => props.bgImg })
    width : 200px;
    height : 200px;
`

const StockCard = ({ data }) => {
  return (
      <Card bgImg={data.img}>
      </Card>
  );
};

export default StockCard;
