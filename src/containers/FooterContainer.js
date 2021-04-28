import React from 'react'
import Footer from '../component/footer'

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Pane>
                <Footer.Title>
                    Company
                </Footer.Title>
                <Footer.Item>
                    About Us
                </Footer.Item>
                <Footer.Item>
                    Contribute
                </Footer.Item>
            </Footer.Pane>
            <Footer.Pane>
                <Footer.Title>
                    Questions & Ideas
                </Footer.Title>
                <Footer.Item>
                    FAQ
                </Footer.Item>
                <Footer.Item>
                    Contact
                </Footer.Item>
            </Footer.Pane>
        </Footer>
    )
}

export default FooterContainer
