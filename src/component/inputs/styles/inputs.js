import styled from "styled-components/macro";
import { Checkbox as MantineCheckbox } from '@mantine/core';

const Frame = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top:10px;
    ${({ theme }) => theme.responsiveWidth}
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`;
const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    justify-content: center;
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }
    /* @media screen and (max-width: 900px) {
    } */
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    } 

`;
const SliderContainer = styled(Container)`
    grid-template-columns: 1fr 4fr;
`;
const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Divider = styled.div`
    border-top: solid 1px black;
    height: 1px;
    width:100%;
    margin-top: 5px;
    padding-bottom: 10px;
`;
const Checkbox = styled(MantineCheckbox)`
    @media screen and (max-width: 1200px) {
        padding-top:10px;
    }
    justify-content: center;
`;
const Slider = styled.input`
    flex: 4 0 0;
    height: 48px;
`;
export { Frame, Container, Divider, Checkbox, Label, Slider, SliderContainer }