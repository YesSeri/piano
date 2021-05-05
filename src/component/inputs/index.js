import React from 'react'
import { Frame, Container, Divider, Checkbox, Label, Slider } from './styles/inputs'


const Inputs = ({ children, ...restProps }) => {
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}

Inputs.Label = ({ children, ...restProps }) => {
    return (
        <Label {...restProps}>{children}</Label>
    )
}
Inputs.Checkbox = ({ ...restProps }) => {
    return (
        <Checkbox {...restProps} />
    )
}
Inputs.Slider = ({ children, ...restProps }) => {
    return (
        <Slider {...restProps}>{children}</Slider>
    )
}
Inputs.Container = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>{children}</Container>
    )
}
Inputs.Divider = ({ ...restProps }) => {
    return (
        <Divider {...restProps} />
    )
}



export default Inputs