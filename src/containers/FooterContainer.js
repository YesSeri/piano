import React from 'react'
import {
    Link
} from "react-router-dom";
import Footer from '../component/footer'

const FooterContainer = () => {
    return (
        <Footer.Background>
            <Footer>
                <Footer.Pane>
                    <Footer.Title>
                        Company
                </Footer.Title>
                    <Footer.Item>
                        <Link to='/about'>
                            About Us
                    </Link>
                    </Footer.Item>
                    <Footer.Item>
                        <Link to='/contribute'>
                            Contribute
                    </Link>
                    </Footer.Item>
                </Footer.Pane>
                <Footer.Pane>
                    <Footer.Title>
                        Questions & Ideas
                </Footer.Title>
                    <Footer.Item>
                        <Link to='/faq'>
                            FAQ
                    </Link>
                    </Footer.Item>
                    <Footer.Item>
                        <Link to='/contact'>
                            Contact
                    </Link>
                    </Footer.Item>
                </Footer.Pane>
            </Footer>
        </Footer.Background>
    )
}

export default FooterContainer
