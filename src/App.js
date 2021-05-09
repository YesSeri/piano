import './scss/my.scss'
import GlobalStyle from './globalStyle'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react'
import Header from './containers/HeaderContainer'
import Title from './component/Title'
import About from './component/about'
import Questions from './component/questions'
import Contact from './component/contact'
import Contribute from './component/contribute'
import FooterContainer from './containers/FooterContainer'
import MainContainer from './containers/MainContainer'

const theme = {
  yellow: 'rgba(255, 192, 23, 1)',
  responsiveWidth: `margin: auto;
    width: 70%;
    @media screen and (max-width: 1200px) {
        width: 80%;
    }
    @media screen and (max-width: 900px) {
        width: 90%;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }`,
  
}

function App() {
  return (
    <div className="app-container">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Title />
            <Header />
            <Switch >
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/faq'>
                <Questions />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contribute'>
                <Contribute />
              </Route>
              <Route path='/'>
                <MainContainer />
              </Route>
            </Switch>
          </div>
          <div>
            <FooterContainer />
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}



export default App;
