import styled from "styled-components/macro";
import {
    Link as ReactRouterLink
} from "react-router-dom";

const Container = styled.div`
    background: ${({theme}) => theme.yellow};
    border-bottom: solid 1px black;
    padding: 10px;
`;


const Text = styled.div`
    font-size: 3.5em;
    color: #000;
    margin: 0px;
    font-weight: 700;
`;
const Link = styled(ReactRouterLink)`
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
`

export { Container, Text, Link }