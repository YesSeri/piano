import styled from "styled-components/macro";

const Frame = styled.div`
`;
const Container = styled.div`
    // This is tricky. I want full screen when in fullscreen mode. I want responsivness otherwise. It also needs to have a max height when not in fullscreen mode.
    margin: auto;
    resize: ${({ isFullscreen }) => isFullscreen ? 'none' : 'both'};
    overflow: hidden;
    width:80%; 
    height:100%;
    // If fullscreen then I want to have max width and height with important to override eventual resizing of the div by resize handle. Resize css property gets inlined and needs to be overridden somehow. It was either like this or removing it through Javascript. 
    ${({ isFullscreen }) => (isFullscreen && 'width:100% !important; height: 100% !important;')}
    svg{
        width: 100%;
        height: 100%;
        max-height: min(50vw, 600px); 
        ${({ isFullscreen }) => (isFullscreen && 'max-height:100% !important;')}
    }
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
    font-size: 0.9em;
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