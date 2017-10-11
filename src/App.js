import * as React from 'react'
import glamorous from 'glamorous'
import { upperCase } from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Routes from './routing'
import mandel from './mandel.svg'
import Home from './components/Fractals'
import './App.css';

const Container = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  padding: '36px',
  width: '100%'
})
const Content = glamorous.div({
  textAlign: 'left',
  width: '500px'
})

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={mandel} className="App-logo" alt="logo" />
        </header>
        <Container>
          <Content>
            <Router>
              <Routes />
            </Router>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App
