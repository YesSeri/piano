import React from 'react'
import Footer from '../component/footer'

const FooterContainer = () => {
    return (
        <Footer.Background>
            <Footer>
                <Footer.Pane>
                    <Footer.Title>
                        Company
                </Footer.Title>
                    <Footer.Link to='/about'>
                        About Us
                    </Footer.Link>
                    <Footer.Link to='/contribute'>
                        Contribute
                    </Footer.Link>
                </Footer.Pane>
                <Footer.Pane>
                <Footer.Title>
                        Questions & Ideas
                </Footer.Title>
                    <Footer.Link to='/faq'>
                        FAQ
                    </Footer.Link>
                    <Footer.Link to='/contact'>
                        Contact
                    </Footer.Link>
                </Footer.Pane>
            </Footer>
        </Footer.Background>
    )
}

export default FooterContainer
