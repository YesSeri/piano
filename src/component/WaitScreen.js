import React from 'react'
import styled from 'styled-components/macro'
const Container = styled.div`
    height: 90vh;
    max-height:300px;
    background-color: #111;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
    border-radius: 10px 10px 10px 10px;
    @media screen and (max-width: 600px) {
        border: solid 1px white;
        border-radius: 10px 10px 0 0;
    }
`
const Text = styled.span`
    background: black;
    color:white;
`
const WaitScreen = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        setClicked(true)
    }
    return <Container onClick={handleClick}{...restProps}>
        <Text>
            {children}
        </Text>
    </Container>
}

export default WaitScreen