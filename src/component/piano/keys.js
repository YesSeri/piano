import React from 'react'
import { Container, WhiteKey, BlackKey, WhiteText, BlackText } from './styles/piano'


const Piano = ({ children, ...restProps }) => (
  <Container {...restProps}>
    {children}
  </Container>
)
Piano.WhiteKey = ({ children, ...restProps }) => (
  // <path
  //     id={id}
  //     data-note={note}
  //     className={`${color}-key piano-key ${activeKeys.includes(note) || clicked === note ? 'active' : ''}`}
  //     d={d}
  //     onContextMenu={(e) => e.preventDefault()}
  //   />
  <WhiteKey {...restProps}>
    {children}
  </WhiteKey>
)
Piano.BlackKey = ({ children, ...restProps }) => (
  // <path
  //     id={id}
  //     data-note={note}
  //     className={`${color}-key piano-key ${activeKeys.includes(note) || clicked === note ? 'active' : ''}`}
  //     d={d}
  //     onContextMenu={(e) => e.preventDefault()}
  //   />
  <BlackKey {...restProps}>
    {children}
  </BlackKey>
)
Piano.WhiteText = ({ children, ...restProps }) => (
  <WhiteText {...restProps}>{children}</WhiteText>
)
Piano.BlackText = ({ x, y, children, ...restProps }) => (
  <BlackText {...restProps}>{children}</BlackText>
)

export default Piano