import styled from "styled-components/macro";
import {
    Link as ReactRouterLink
} from "react-router-dom";

const Container = styled.div`
     display: flex;
     flex-wrap: wrap;
`;

const Background = styled.div`
    background-color: ${({ theme }) => theme.darkGrey} ;
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
    color: ${({ theme }) => theme.yellow} ;

`;

const Title = styled.h2`
    width:100%;
    margin-top: 0.5em;
`;

const Link = styled(ReactRouterLink)`
    margin-bottom: 1.5em;
    width:100%;
    color: ${({ theme }) => theme.yellow} ;
    text-decoration: inherit;
`;

export { Pane, Container, Title, Link, Background }