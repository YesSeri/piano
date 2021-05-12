import styled from "styled-components/macro";

// const color = `rgba(255, 192, 23, 1);`
const Background = styled.div`
    border-radius: 0 0 20px 20px;
    background: ${({ theme }) => theme.yellow};
    @media screen and(max-width: 700px) {
        border-radius: 0 0 10px 10px;
    }
`;

const Container = styled.div`
    user-select: none; 
    ${({ theme }) => theme.responsiveWidth}
    display: flex;
    flex-wrap: wrap;
`;


const Pane = styled.div`
    display: flex;
    width: 50%;
    svg {
        padding: 5px 0;
        margin: auto;
        max-width: 300px;
    }
    @media screen and(max-width: 700px) {
        width: 100%;
        border-radius: 0;
    }
`;

const Text = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-items: center;
    h2 {
        margin: 10px 10px;

        @media screen and(max-width: 700px) {
            font-size: 2.6em;
        }
        font-size: 3.2em;
    }
    p {
        margin: 10px 10px;
        @media screen and(max-width: 700px) {
            font-size: 0.8em;
        }
    }
`;

export { Pane, Container, Text, Background }