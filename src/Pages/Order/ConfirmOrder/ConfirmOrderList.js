import styled from "styled-components";

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`
const SectionGrid = styled(Section)`
    display : grid;
    grid-column-gap: 30vw;
    grid-row-gap: 0vh;
    grid-template-columns: 100fr 0fr;
    margin-left: 5vw;
    margin-right: 3vw;
    margin-bottom: 0vw;
    overflow : scroll;
    
`
const Border = styled.div`
    width: inherit;
    height: 0;
    margin-left: 15vw;
    margin-right: 15vw;
    margin-top: 10px;
    margin-bottom: 3vh;
    background: #FFFFFF;
    border: 1px solid #AAAAAA;
    box-sizing: border-box;
`
const P = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    width: 10vw;
    margin-top: 0px;
    color: #000000;
`

const ConfirmOrderList = ({data}) => {
    return(
        <>
        <Section>
            <SectionGrid>
                <P>{data.Name}</P>
                <P>1</P>
            </SectionGrid>
        </Section>
        </>
    );
}

export default ConfirmOrderList;