import styled from "styled-components/macro";
import { Checkbox as MantineCheckbox } from '@mantine/core';

const Frame = styled.div`
    display:grid;
    ${({ theme }) => theme.responsiveWidth}
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;
const Container = styled.div`
    display:grid;
    padding:10px;
    @media screen and (max-width: 1200px) {
    }
    /* @media screen and (max-width: 900px) {
    } */
    @media screen and (max-width: 600px) {
    } 

`;
const Dropdown = styled.select`
`
const Option = styled.option`
`
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
    padding-top: 5px;
    padding-bottom: 5px;
`;
export { Frame, Container, Divider, Checkbox, Label, Dropdown, Option }