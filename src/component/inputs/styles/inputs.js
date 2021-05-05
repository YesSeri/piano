import styled from "styled-components/macro";
import { Hr, Checkbox as MantineCheckbox } from '@mantine/core';

const Frame = styled.div`
`;
const Container = styled.div`
    display:flex;
`;
const Label = styled.label`
    flex: 1 0 0;
`;
const Checkbox = styled(MantineCheckbox)`
    display:flex;
    justify-content:center;
    flex: 1 0 0;
`;
const Divider = styled(Hr)`
    margin: 0.4em 0;
`;
const Slider = styled.input`
    flex: 3 0 0;
`;
export { Frame, Container, Divider, Checkbox, Label, Slider }