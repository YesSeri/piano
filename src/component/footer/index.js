import React from 'react'

const Footer = ({ children, ...restProps }) => (
    <div className="footer" {...restProps}>{children}</div>
)
Footer.Background = ({ children, ...restProps }) => (
    <div className="footer__bg" {...restProps}>{children}</div>
)

Footer.Pane = ({ children, ...restProps }) =>
(
    <div className="footer__pane" {...restProps}>
        {children}
    </div>
)
Footer.Title = ({ children, ...restProps }) =>
(
    <div className="footer__pane__title" {...restProps}>
        <h2>
            {children}
        </h2>
    </div>
)
Footer.Item = ({ children, ...restProps }) =>
(
    <div className="footer__pane__item" {...restProps}>
        <p>
            {children}
        </p>
    </div>
)
export default Footer;