import React from 'react'
import { Container, WhiteKey, BlackKey, WhiteText, BlackText } from './styles/piano'


const Piano = ({isFullscreen, children, ...restProps }) => (
  <Container isFullscreen={isFullscreen}  {...restProps}>{children}</Container>
)
Piano.Svg = ({ width, children, ...restProps }) => (
  <svg version="1.1" viewBox={`-1 -1 ${width + 2} 112`} id="pianoSvg" {...restProps} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {children}
  </svg>
)
Piano.WhiteKey = ({ children, ...restProps }) => (
  <WhiteKey {...restProps}>{children}</WhiteKey>
)
Piano.BlackKey = ({ children, ...restProps }) => (
  <BlackKey {...restProps}>{children}</BlackKey>
)
Piano.WhiteText = ({ children, ...restProps }) => (
  <WhiteText {...restProps}>{children}</WhiteText>
)
Piano.BlackText = ({children, ...restProps }) => (
  <BlackText {...restProps}>{children}</BlackText>
)

export default Piano