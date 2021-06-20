import styled from 'styled-components/macro'

const Container = styled.div`
    padding-top: 10px;
    display:flex;
    justify-content:center;
    font-family: monospace;
    ${({ theme }) => theme.responsiveWidth}
`
const Text = styled.div`
    display:flex;
    justify-content:center;
    border:solid 1px black;
    border-radius: 10px;
    font-size: 3em;
    width:100%;
`
const Char = styled.div`
    flex: 1 1 0;
    height: 120px;
    display: flex;
    justify-content:center;
    align-items:center;
`
const BlackChar = styled(Char)`
    color: ${({theme}) => theme.yellow};
    background-color: ${({theme}) => theme.black};
`
const WhiteChar = styled(Char)`
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.midGrey};
`
export { Container, Text, BlackChar, WhiteChar }