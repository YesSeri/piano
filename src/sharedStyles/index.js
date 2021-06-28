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
`
export { Button };