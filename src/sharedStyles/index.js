import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.lightGrey} ;
  border: none;
  color: white;
  padding: 8px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border: solid 3px ${({ theme }) => theme.darkGrey};
  border-radius: 5px;
  user-select: none; 
  cursor: pointer;
  min-width:160px;
  &:hover {
      background-color: ${({ theme }) => theme.darkGrey} ;
  }
  &:active {
      background-color: ${({ theme }) => theme.black} ;
  } 
  /* display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.lightGrey} ;
  color: white;
  font-size: 1.2em;
  font-family: inherit;
  border: solid 2px #666;
  border-radius: 5px;
  text-align: center;
  user-select: none; 
  cursor: pointer;

  &:hover {
      border: solid 2px #999;
      background-color: ${({ theme }) => theme.darkGrey} ;
  }
  &:active {
      border: solid 2px #ccc;
      background-color: ${({ theme }) => theme.black} ;
  } */
`
export { Button };