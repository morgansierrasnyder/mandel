import * as React from 'react'
import glamorous from 'glamorous'
import { upperCase } from 'lodash'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

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
              <Switch>
                <Route path="/fractals" component={Home} />
                <Route path="/fractals/:any" component={() => <div>I'm hiding the good stuff</div>} />
                <Route path="/fractals/:any/:param" component={({ match }) => <div>{upperCase(match.params.param)}</div>} />
                <Route path="*" render={() => <div>Uncharted Territory</div>} />
              </Switch>
            </Router>
          </Content>
        </Container>
      </div>
    );
  }
}

export default App
