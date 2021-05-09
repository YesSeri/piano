import styled from "styled-components/macro";
import {
    Link as ReactRouterLink
} from "react-router-dom";

const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

const Background = styled.div`
    background-color: #111;
    border-radius: 20px 20px 0px 0;
    @media screen and (max-width: 600px) {
        border-radius: 0;
    }
     
`;

const Pane = styled.div`
    width: 50%;
    display: flex;
    flex-wrap:wrap;
    @media screen and (max-width: 600px) {
        border-radius: 0;
        width: 100%;
    }
    color: #ffc017;

`;

const Title = styled.h2`
    width:100%;
`;

const Link = styled(ReactRouterLink)`
    margin-bottom:15px;
    width:100%;
    color: #ffc017;
    text-decoration: inherit;
`;

export { Pane, Container, Title, Link, Background }