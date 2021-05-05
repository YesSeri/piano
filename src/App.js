import './scss/my.scss'
import GlobalStyle from './globalStyle'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react'
import Header from './component/Header'
import Title from './component/Title'
import About from './component/about'
import Questions from './component/questions'
import Contact from './component/contact'
import Contribute from './component/contribute'
import FooterContainer from './containers/FooterContainer'
import MainContainer from './containers/MainContainer'


function App() {
  return (
    <div className="app-container">
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
        <div>
          <FooterContainer />
        </div>
      </Router>
    </div>
  );
}



export default App;
