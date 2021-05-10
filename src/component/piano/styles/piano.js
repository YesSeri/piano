import styled from "styled-components/macro";

const Frame = styled.div`
`;
const Container = styled.div`
    margin: auto;
    width: 90%;
    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`;
const WhiteKey = styled.path`
    fill: white;
    stroke: black;
    stroke-width: 0.25;
    &.active{
        fill: #ccc;
    }
`;
const BlackKey = styled.path`
    fill: black;
    stroke: black;
    stroke-width: 0.25;
    &.active{
        fill: #333;
        stroke: #333;
    }
`;
const Text = styled.text`
    font-family: monospace;
    font-size: 1.2em;
    user-select: none;
    pointer-events: none; 
`
const WhiteText = styled(Text)`
    fill:black;
`;
const BlackText = styled(Text)`
    fill:white;
`;
export { Frame, Container, WhiteKey, WhiteText, BlackKey, BlackText }
// text {
    //     user-select: none;
    //     pointer-events: none;
    //     font-family: monospace;
    //     font-size: 0.6em;
    //     &.svg-white-note-text {
    //         fill: black;
    //     }
    //     &.svg-white-translation-text {
    //         fill: black;
    //     }
    //     &.svg-black-note-text {
    //         fill: white;
    //     }
    //     &.svg-black-translation-text {
    //         fill: white;
    //     }