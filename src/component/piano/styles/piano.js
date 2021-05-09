import styled from "styled-components/macro";

const Frame = styled.div`
`;
const Container = styled.div`
    ${({ theme }) => theme.responsiveWidth}
`;
const WhiteKey = styled.path`
    fill: white;
    stroke: black;
    stroke-width: 0.25;
`;
const WhiteText = styled.path`
`;
const BlackKey = styled.path`
    fill: black;
    stroke: black;
    stroke-width: 0.25;
    &.active{
        fill: #222;
        stroke: #222;
    }
`;
const BlackText = styled.path`
`;
export { Frame, Container, WhiteKey, WhiteText, BlackKey, BlackText }