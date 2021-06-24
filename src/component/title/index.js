import { Container, Link, Text } from './styles/title'


const Title = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
)

Title.Text = ({ to, children, ...restProps }) =>
(
  <Text {...restProps}>
    <Link to={to}>
      {children}
    </Link>
  </Text>

)
export default Title;