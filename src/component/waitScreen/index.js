import React from 'react'
import styled from 'styled-components/macro'
const Container = styled.div`
background-color: white;
max-width:600px;
margin:auto;
`
const Text = styled.p`
    font-size: 3em;
    text-align:justify;
    text-align-last: justify;
    font-family: monospace;
    line-height: 1.6;
    letter-spacing: 0.2em;
`
const BlackChar = styled.span`
    color:black;
    background-color:#ddd;
`
const WhiteChar = styled.span`
    color:white;
    background-color:#222;
`
const WaitScreen = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        return () => {
            setClicked(true)
        }
    }
    const chars = children.split("")
    console.log(chars)
    let black = true;
    return (
        <Container onClick={handleClick()}>
            <Text>{chars.map(c => {
                black = !black;
                if (black) {
                    return <BlackChar>{c}</BlackChar>
                } else {
                    return <WhiteChar>{c}</WhiteChar>
                }
            })}
            </Text>
        </Container>
    )
}

export default WaitScreen