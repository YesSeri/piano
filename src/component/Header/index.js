import { Background, Container, Pane, Text } from './styles/header'


const Header = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Header.Background = ({ children, ...restProps }) => (
  <Background {...restProps}>{children}</Background>
)

Header.Pane = ({ children, ...restProps }) =>
(
  <Pane {...restProps}>
    {children}
  </Pane>
)
Header.Text = ({ children, ...restProps }) =>
(
  <Text {...restProps}>
    {children}
  </Text>
)
export default Header;