import GlobalStyle from './globalStyle'
import styled, { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react'
import Header from './containers/HeaderContainer'
import Title from './containers/TitleContainer'
import About from './component/about'
import Questions from './component/questions'
import Contact from './component/contact'
import Contribute from './component/contribute'
import FooterContainer from './containers/FooterContainer'
import MainContainer from './containers/MainContainer'

const theme = {
  yellow: '#ffc017',
  darkGrey: '#111',
  midGrey: '#222',
  lightGrey: '#333',
  black: '#000',
  white: '#fff',
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

const Container = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
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
          <FooterContainer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}



export default App;
