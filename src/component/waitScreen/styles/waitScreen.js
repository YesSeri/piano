import styled from 'styled-components/macro'

const Container = styled.div`
    display:flex;
    justify-content:center;
    font-family: monospace;
    ${({ theme }) => theme.responsiveWidth}
`
const Text = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    border:solid 1px black;
    border-radius: 10px;
    font-size: 3em;
    width:100%;
`
const Char = styled.div`
    flex: 1 1 0;
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:#222;
`
const BlackChar = styled(Char)`
    color: #111;
    background-color:#eee;
`
const WhiteChar = styled(Char)`
    color: #eee;
    background-color:#111;
`
export { Container, Text, BlackChar, WhiteChar }