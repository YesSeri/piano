import React from 'react'
import styled from 'styled-components/macro'
const Container = styled.div`
    height: 90vh;
    max-height:300px;
    background-color: #000;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items: center;
`
const Text = styled.span`
    background: black;
    color:white;
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
