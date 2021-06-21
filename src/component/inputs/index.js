import React from 'react'
import { Frame, Container, Divider, Checkbox, Label, Dropdown, Option } from './styles/inputs'


const Inputs = ({ children, ...restProps }) => {
    console.log(restProps)
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

Inputs.Dropdown = ({ options, ...restProps }) => {
    return (
        <Dropdown {...restProps}>
            {options.map((option, idx) => {
                return (<Option value={idx}>
                    {option}
                </Option>)
            })}

        </Dropdown>
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