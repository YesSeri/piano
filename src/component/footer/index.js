import { Pane, Container, Title, Link, Background } from './styles/footer'

const Footer = ({ children, ...restProps }) => (
    <Container {...restProps}>{children}</Container>
)
Footer.Background = ({ children, ...restProps }) => (
    <Background {...restProps}>{children}</Background>
)

Footer.Pane = ({ children, ...restProps }) =>
(
    <Pane {...restProps}>
        {children}
    </Pane>
)
Footer.Title = ({ children, ...restProps }) =>
(
    <Title {...restProps}>
        {children}
    </Title>
)
Footer.Link = ({ children, ...restProps }) =>
(
    <Link {...restProps}>
        {children}
    </Link>
)
export default Footer;