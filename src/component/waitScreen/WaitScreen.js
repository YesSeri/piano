import React from 'react'
import styled from 'styled-components/macro'
const Container = styled.div`
`
const Text = styled.span`
`
const WaitScreen = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        return () => {
            setClicked(true)
        }
    }
    return (
        <Container onClick={handleClick()}>
            <Text></Text>
        </Container>
    )
}

export default WaitScreen