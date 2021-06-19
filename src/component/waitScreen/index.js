import React from 'react'
import { Container, Text, BlackChar, WhiteChar } from './styles/waitScreen'

const WaitScreen = ({ setClicked, children, ...restProps }) => {
    const handleClick = () => {
        return () => {
            setClicked(true)
        }
    }
    const chars = children.split("")
    let black = true;
    return (
        <Container onClick={handleClick()} {...restProps}>
            <Text>
                {chars.map((c, i) => {
                    let style = {}
                    if (i === 0) {
                        style = { borderRadius: "10px 0px 0px 10px" }
                    }
                    if (i === chars.length - 1) {
                        style = { borderRadius: "0px 10px 10px 0px" }
                    }
                    black = !black;
                    return black ? <BlackChar style={style} key={i}>{c}</BlackChar> : <WhiteChar style={style} key={i}>{c}</WhiteChar>
                })}
            </Text>
        </Container>
    )
}

export default WaitScreen