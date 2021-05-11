import React from 'react'
import styled from 'styled-components/macro'
const Container = styled.div`
    height: 100%;
    background-color: #aea4;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
`
const Text = styled.span`
    background: black;
    color:white;
    margin-bottom:90px;
`
const Overlay = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        setClicked(true)
    }
    return <Container onClick={handleClick}{...restProps}>
        <Text>
            {children}
        </Text>
    </Container>
}

export default Overlay
