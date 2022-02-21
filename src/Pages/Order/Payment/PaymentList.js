import styled from "styled-components";

const Section = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const SectionGridMenu = styled(Section)`
    display : grid;
    grid-row-gap: 0vh;
    grid-template-columns: 51vw 18.5vw 10fr;
    margin-left: 5vw;
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

const PaymentList = ({data}) => {
    return(
        <Section>
            <SectionGridMenu>
                <Text>{data.Name}</Text>
                <Text>1</Text>
                <Text>{data.Price} THB</Text>
            </SectionGridMenu>
        </Section>
    )
}

export default PaymentList;