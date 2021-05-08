import { createGlobalStyle } from 'styled-components'

const responsiveWidth = 
  `margin: auto;
  width: 70%;
  @media screen and (max-width: 1200px) {
      width: 80%;
  }
  @media screen and (max-width: 900px) {
      width: 90%;
  }
  @media screen and (max-width: 600px) {
      width: 100%;
  }`
const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: auto;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  
`
export default GlobalStyle;