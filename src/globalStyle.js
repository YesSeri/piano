import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: auto;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  
  button {
    background-color: ${({ theme }) => theme.lightGrey} ;
    color: white;
    font-size: 1.2em;
    font-family: inherit;
    border: solid 2px #666;
    border-radius: 5px;
    padding: 0.25em 0.3em 0 0.3em ;
    text-align: center;
    min-width: 150px;
    user-select: none; 
    cursor: pointer;

    &:hover {
        border: solid 2px #999;
        background-color: ${({ theme }) => theme.darkGrey} ;
    }
    &:active {
        border: solid 2px #ccc;
        background-color: ${({ theme }) => theme.black} ;
    }
  }
`
export default GlobalStyle;